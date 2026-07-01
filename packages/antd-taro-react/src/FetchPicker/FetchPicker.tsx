import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Popup, {PopupProps} from "../Popup";
import {Button, DotLoading, SafeArea, SpinLoading} from "../index";
import {CheckOutline, SearchOutline} from "@trionesdev/antd-mobile-icons-react";
import {ScrollView} from "@tarojs/components";
import Input from "../Input";
import {debounce, get, isEmpty, isEqual, some} from "lodash-es";
import classNames from "classnames";


type LabeledValue = { label?: string, value?: string | number }

type PickerValue = string | string[] | number | number[] | LabeledValue | LabeledValue[]

export type FetchPickerProps = Omit<PopupProps, ''> & {

  /**
   * @description 是否全屏
   * @default false
   */
  fullScreen?: boolean;
  /**
   * @description 搜索框
   * @default false
   */
  showSearch?: boolean;
  /**
   * @description 搜索框占位符
   * @default 搜索
   */
  searchPlaceholder?: string;
  value?: PickerValue;
  /**
   * @description 是否多选
   * @default false
   */
  multiple?: boolean;
  labelInValue?: boolean;
  /**
   * @description 弹窗标题
   */
  title?: React.ReactNode;
  /**
   * @description 取消按钮文字,fullScreen 为 false 时生效
   * @default 取消
   */
  cancelText?: string;
  /**
   * @description 确定按钮文字,fullScreen 为 false 时生效
   * @default 确定
   */
  okText?: string;

  onCancel?: () => void;

  onOk?: (value?: PickerValue, option?: any | any[]) => void;
  /**
   * @description 请求
   * @default
   */
  fetch?: (params: { page?: number, size?: number, wd?: string }) => Promise<any[]>;
  fieldNames?: {
    label?: string;
    value?: string;
  };
  /**
   * @description 空状态
   * @default 暂无数据
   */
  empty?: React.ReactNode;
  /**
   * @description 是否分页
   * @default false
   */
  pageable?: boolean;
  /**
   * @description 每页大小,pageable 为 true 时生效
   * @default 20
   */
  pageSize?: number;
  optionRender?: (option: any, selected: boolean) => React.ReactNode;
}

const cls = "triones-antm-fetch-picker";

export const FetchPicker: React.FC<FetchPickerProps> = ({
                                                          open = false,
                                                          fullScreen = false,
                                                          height,
                                                          showSearch = false,
                                                          searchPlaceholder = '搜索',
                                                          value,
                                                          multiple = false,
                                                          labelInValue = true,
                                                          title,
                                                          cancelText = '取消',
                                                          okText = '确定',
                                                          onCancel,
                                                          onOk,
                                                          fetch,
                                                          fieldNames,
                                                          empty,
                                                          pageable,
                                                          pageSize = 20,
                                                          optionRender,
                                                          round = true,
                                                          ...rest
                                                        }) => {
  const {label: labelFieldName = 'label', value: valueFieldName = 'value'} = fieldNames || {}
  const [options, setOptions] = useState<any[]>([])
  const [queryParams, setQueryParams] = useState<{ page: number, size: number, wd?: string }>({page: 1, size: pageSize})
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loading, setLoading] = useState(false)
  const [internalValue, setInternalValue] = useState<PickerValue | undefined>(value || (multiple ? [] : undefined))
  const requestIdRef = useRef(0)

  const handleGetOptions = useCallback((value?: PickerValue) => {
    if (!value) return null
    if (multiple) {
      if (labelInValue) {
        return options.filter((option) => {
          return some(value as LabeledValue[], (v) => get(option, valueFieldName) === get(v, "value"))
        })
      } else {
        return options.filter((option) => {
          return some(value as any[], (v) => get(option, valueFieldName) === v)
        })
      }
    } else {
      if (labelInValue) {
        return options.find((option) => isEqual(get(option, valueFieldName), get(value, "value")))
      } else {
        return options.find((option) => get(option, valueFieldName) === value)
      }
    }
  }, [labelInValue, options])

  const handleItemClick = useCallback((item: any) => {
    const itemValue = get(item, valueFieldName)
    const itemLabel = get(item, labelFieldName)
    let newValue: PickerValue
    if (multiple) {
      const prevList = Array.isArray(internalValue) ? internalValue : []
      if (labelInValue) {
        const values = prevList as LabeledValue[]
        const exists = some(values, (v) => get(v, "value") === itemValue)
        newValue = exists
          ? values.filter((v) => get(v, "value") !== itemValue)
          : [...values, {value: itemValue, label: itemLabel}]
      } else {
        const values = prevList as (string | number)[]
        const exists = values.includes(itemValue)
        newValue = exists ? values.filter((v) => v !== itemValue) : [...values, itemValue]
      }
    } else {
      newValue = labelInValue ? {value: itemValue, label: itemLabel} : itemValue
    }
    setInternalValue(newValue)
    if (!multiple) {
      const option = handleGetOptions(newValue)
      onOk?.(newValue, option)
      onCancel?.()
    }
  }, [internalValue, labelFieldName, labelInValue, multiple, onCancel, onOk, valueFieldName, options])

  const handleSelected = useCallback((item: any) => {
    if (!internalValue || isEmpty(internalValue)) {
      return false
    }
    if (multiple) {
      if (labelInValue) {
        return some(internalValue as LabeledValue[], (v) => get(v, "value") === get(item, valueFieldName))
      } else {
        return (internalValue as (string | number)[])?.includes(get(item, valueFieldName))
      }
    } else {
      if (labelInValue) {
        return get(internalValue, "value") === get(item, valueFieldName)
      } else {
        return internalValue === get(item, valueFieldName)
      }
    }
  }, [internalValue, labelInValue, multiple, valueFieldName])

  const handleFetch = useCallback((params: { page: number, size: number, wd?: string }) => {
    if (!fetch) {
      setOptions([])
      setHasMore(false)
      return
    }
    const requestId = ++requestIdRef.current
    setLoading(true)
    fetch(params).then((res) => {
      if (requestId !== requestIdRef.current) {
        return
      }
      const nextOptions = res || []
      setOptions((prev) => params.page === 1 ? nextOptions : [...prev, ...nextOptions])
      setHasMore(pageable ? nextOptions.length >= params.size : false)
    }).finally(() => {
      if (requestId === requestIdRef.current) {
        setLoading(false)
      }
    })
  }, [fetch, pageable])

  const handleOnOk = () => {
    onOk?.(internalValue, handleGetOptions(internalValue))
    onCancel?.()
  }

  useEffect(() => {
    if (!open) {
      setInternalValue(multiple ? [] : undefined)
      return
    }
    handleFetch(queryParams)
  }, [handleFetch, open, queryParams])

  useEffect(() => {
    if (!open) {
      return
    }
    if (value == undefined) {
      return
    }
    setInternalValue((prev) => isEqual(value, prev) ? prev : value)
  }, [open, value])

  const handleSearchChange = useMemo(() => debounce((v) => {
    setQueryParams((prev) => ({...prev, page: 1, wd: v}))
  }, 500), [])

  useEffect(() => {
    return () => handleSearchChange.cancel()
  }, [handleSearchChange])

  const header = <>
    <div className={classNames(`${cls}-head-button`, `${cls}-head-button-cancel`)} onClick={onCancel}>{cancelText}</div>
    <div className={`${cls}-head-title`}>{title}</div>
    {multiple &&
      <div className={classNames(`${cls}-head-button`, `${cls}-head-button-ok`)} onClick={handleOnOk}>{okText}</div>}
  </>
  return <Popup {...rest} open={open}
                height={fullScreen ? `calc(-24px + 100vh)` : (height ?? 'auto')} onClose={onCancel} round={round}>
    <SafeArea>
      <div className={cls}>
        <div className={`${cls}-head`}>{header}</div>
        {showSearch && <div className={`${cls}-search-bar`}>
          <Input className={`${cls}-search-bar-input`} prefix={<div style={{paddingInline: 8}}><SearchOutline/></div>}
                 variant={`outlined`} placeholder={searchPlaceholder}
                 value={queryParams.wd}
                 onChange={handleSearchChange}
          />
        </div>}
        <ScrollView className={`${cls}-body`} scrollY={true} onScrollToLower={() => {
          if (!hasMore || !pageable) {
            return
          }
          setQueryParams((prev) => ({...prev, page: prev.page + 1}))
        }}>
          {isEmpty(options) && loading && <div className={`${cls}-loading`}>
            <div className={`${cls}-loading-content`}>
              <SpinLoading/>
              <div>加载中...</div>
            </div>
          </div>}
          {isEmpty(options) && !loading && (empty || <div className={`${cls}-empty`}>暂无数据</div>)}
          {options?.map((item, index) => {
            const selected = handleSelected(item)
            return <div className={classNames(`${cls}-item`, `${cls}-item-option`,
              {
                [`${cls}-item-option-selected`]: selected
              })} key={`${get(item, valueFieldName) ?? index}`} onClick={() => {
              handleItemClick(item)
            }}>
              <div className={`${cls}-item-option-content`}>{
                optionRender?.(item, selected) || get(item, labelFieldName)
              }</div>
              {multiple && selected && <div className={`${cls}-item-option-state`}>
                <CheckOutline/>
              </div>}
            </div>
          })}
          {!isEmpty(options) && loading && <div className={`${cls}-loading-more`}>
            加载更多<DotLoading/>
          </div>}
        </ScrollView>
      </div>
    </SafeArea>
  </Popup>
}

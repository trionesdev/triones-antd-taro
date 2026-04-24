import React, {useEffect, useState} from "react";
import Popup from "../Popup";
import {Button, DotLoading} from "../index";
import {CloseOutline, LeftOutline, SearchOutline} from "@trionesdev/antd-mobile-icons-react";
import Space from "../Space";
import {ScrollView} from "@tarojs/components";
import Input from "../Input";
import {isEmpty} from "lodash-es";

export type FetchPickerProps = {
  open?: boolean;
  /**
   * @description 是否全屏
   * @default false
   */
  fullScreen?: boolean;
  height?: number | string;
  /**
   * @description 是否可返回,fullScreen 为 true 时生效
   * @default true
   */
  backable?: boolean;
  /**
   * @description 返回按钮图标,fullScreen 为 true 时生效
   * @default
   */
  backIcon?: React.ReactNode;
  /**
   * @description 是否可关闭,fullScreen 为 true 时生效
   * @default true
   */
  closable?: boolean;
  /**
   * @description 关闭按钮图标,fullScreen 为 true 时生效
   * @default
   */
  closeIcon?: React.ReactNode;
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
  round?: boolean;
  onClose?: () => void;
  onBack?: () => void;
  fetch?: (params: { page?: number, wd?: string }) => Promise<any[]>;
  fieldNames?: {
    label?: string;
    value?: string;
  };
  empty?: React.ReactNode;
  pageSize?: number
}

const cls = "triones-antm-fetch-picker";

export const FetchPicker: React.FC<FetchPickerProps> = ({
                                                          open = false, fullScreen = false,
                                                          height,
                                                          backable = true,
                                                          backIcon,
                                                          closable = true,
                                                          closeIcon,
                                                          title,
                                                          cancelText = '取消',
                                                          okText = '确定',
                                                          round = true,
                                                          fetch,
                                                          fieldNames,
                                                          empty,
                                                          pageSize = 10
                                                        }) => {
  const {label: labelFieldName = 'label', value: valueFieldName = 'value'} = fieldNames || {}
  const [options, setOptions] = useState<any[]>([])
  const [queryParams, setQueryParams] = useState<{ page: number, pageSize: number, wd?: string }>({page: 1, pageSize})
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loading, setLoading] = useState(false)

  const handleFetch = () => {
    if (fetch) {
      setLoading(true)
    }
    fetch?.(queryParams).then((res) => {
      setOptions([...options, ...(res || [])])
      setHasMore((res || []).length >= queryParams.pageSize)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    if (queryParams.page == 1) {
      setOptions([])
    }
    handleFetch()
  }, [queryParams])

  const header = fullScreen ? <>
    <Space>
      {backable && <div className={`${cls}-head-icon`}>{backIcon || <LeftOutline/>}</div>}
      {closable && <div className={`${cls}-head-icon`}>{closeIcon || <CloseOutline/>}</div>}
    </Space>
    <div className={`${cls}-head-title`}>{title}</div>
  </> : <>
    <div className={`${cls}-head-button`}>{cancelText}</div>
    <div className={`${cls}-head-title`}>{title}</div>
    <div className={`${cls}-head-button`}>{okText}</div>
  </>
  return <Popup open={open} height={fullScreen ? '100%' : (height ?? 'auto')} round={fullScreen ? false : round}>

    <div className={cls}>
      <div className={`${cls}-head`}>{header}</div>
      <div className={`${cls}-search-bar`}>
        <Input className={`${cls}-search-bar-input`} prefix={<div style={{paddingInline: 8}}><SearchOutline/></div>}
               variant={`outlined`} placeholder="搜索"
               value={queryParams.wd}
               onChange={(v) => {
                 setQueryParams({...queryParams, page: 1, wd: v})
               }}
        />
      </div>
      <ScrollView className={`${cls}-body`} scrollY={true} onScrollToLower={() => {
        if (!hasMore) {
          return
        }
        setQueryParams({...queryParams, page: queryParams.page + 1})
      }}>
        {isEmpty(options) && (empty || <div className={`${cls}-empty`}>暂无数据</div>)}
        {options?.map((item, index) => <div className={`${cls}-list-item`}
                                            key={`${index}`}>{item[labelFieldName]}</div>)}
        {loading && <div className={`${cls}-loading`}>
          <DotLoading/>
        </div>}
      </ScrollView>
      {fullScreen && <div className={`${cls}-footer`}>
        <Button type={'primary'} block={true} size={'large'}>{okText}</Button>
      </div>}
    </div>
  </Popup>
}

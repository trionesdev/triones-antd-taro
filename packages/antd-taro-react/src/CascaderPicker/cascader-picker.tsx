import React, {FC, useEffect, useRef, useState} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import _ from "lodash";
import CascaderView from "../CascaderView";
import {useConfig} from "../ConfigProvider";

const cascaderPickerCls = "triones-antm-cascader-picker";

export type CascaderPickerProps = {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode
  options?: any[]
  /**
   * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   * @default false
   */
  labelInValue?: boolean
  fieldNames?: {
    value?: string;
    label?: string;
    children?: string;
  };
  columnsCount?: number
  value?: any[],
  onOk?: (value?: any[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
  asyncRequest?: (parentValue?: any) => Promise<any>;
}

export const CascaderPicker: FC<CascaderPickerProps> = React.memo(({
                                                                     className,
                                                                     style,
                                                                     open,
                                                                     afterOpenChange,
                                                                     title,
                                                                     options,
                                                                     labelInValue = false,
                                                                     fieldNames,
                                                                     columnsCount,
                                                                     value, onOk,
                                                                     onCancel,
                                                                     onClose,
                                                                     asyncRequest
                                                                   }) => {
  const {locale} = useConfig();
  // const [internalValue, setInternalValue] = useState(value)
  const internalValueRf = useRef(value)
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const handleClose = () => {
    setInnerOpen(false)
    onClose?.()
  }
  const handleOk = () => {
    onOk?.(internalValueRf.current)
    handleClose()
  }

  const handelCancel = () => {
    onCancel?.()
    handleClose()
  }

  useEffect(() => {
    afterOpenChange?.(innerOpen)
  }, [innerOpen]);

  useEffect(() => {
    if (open === undefined) {
      return;
    }
    if (open === innerOpen) {
      return;
    }
    setInnerOpen(open)
  }, [open]);

  useEffect(() => {
    if (value === undefined) {
      return;
    }
    if (_.isEqual(value, internalValueRf.current)) {
      return;
    }
    internalValueRf.current = value
  }, [value])

  return <Popup open={innerOpen} afterOpenChange={(o) => {
    setInnerOpen(o)
  }} styles={{
    body: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    }
  }}>
    <div className={classNames(cascaderPickerCls, className)} style={style}>
      <div className={classNames(`${cascaderPickerCls}-header`)}>
        <a className={classNames(`${cascaderPickerCls}-header-button`)}
           onClick={handelCancel}>{locale.common.cancel}</a>
        {title && <div className={classNames(`${cascaderPickerCls}-header-title`)}>{title}</div>}
        <a className={classNames(`${cascaderPickerCls}-header-button`, `${cascaderPickerCls}-header-button-ok`)}
           onClick={handleOk}>{locale.common.confirm}</a>
      </div>
      <div className={classNames(`${cascaderPickerCls}-body`)}>
        <CascaderView fieldNames={fieldNames}
                      options={options}
                      labelInValue={labelInValue}
                      columnsCount={columnsCount}
                      value={value}
                      onChange={(newVal) => {
                        internalValueRf.current = newVal
                      }}
                      asyncRequest={asyncRequest}
                      style={{height: '100%'}}/>
      </div>
    </div>
  </Popup>
})

import React, {FC, useEffect, useState} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import _ from "lodash";
import {PickerView} from "./picker-view";

const pickerCls = "triones-antm-picker";

export type PickerProps = {
  open?: boolean
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode
  columns?: Option[][]
  /**
   * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   * @default false
   */
  labelInValue?: boolean
  value?: any[],
  onOk: (value: any[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export type Option = {
  label?: string, value?: string
}

export const Picker: FC<PickerProps> = React.memo(({
                                                     open,
                                                     afterOpenChange,
                                                     title,
                                                     columns,
                                                     labelInValue = false,
                                                     value, onOk,
                                                     onCancel,
                                                     onClose
                                                   }) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: _.size(columns)}).map(() => null))
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const handleClose = () => {
    setInnerOpen(false)
    onClose?.()
  }
  const handleOk = () => {
    onOk?.(internalValue)
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
    if (open == undefined) {
      return;
    }
    if (open == innerOpen) {
      return;
    }
    setInnerOpen(open)
  }, [open]);

  return <Popup open={innerOpen} afterOpenChange={(o)=>{setInnerOpen(o)}} styles={{
    body: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    }
  }}>
    <div className={classNames(pickerCls)}>
      <div className={classNames(`${pickerCls}-header`)}>
        <a className={classNames(`${pickerCls}-header-button`)} onClick={handelCancel}>取消</a>
        {title && <div className={classNames(`${pickerCls}-header-title`)}>{title}</div>}
        <a className={classNames(`${pickerCls}-header-button`)} onClick={handleOk}>确定</a>
      </div>
      <div className={classNames(`${pickerCls}-body`)}>
        <PickerView columns={columns}
                    labelInValue={labelInValue}
                    value={internalValue}
                    onChange={(v) => {
                      setInternalValue(v)
                    }}/>
      </div>
    </div>
  </Popup>
})

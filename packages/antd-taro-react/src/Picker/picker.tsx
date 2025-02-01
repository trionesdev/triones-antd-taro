import React, {FC} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import {PickerViewColumn} from "./picker-view-column";

const pickerCls = "triones-antm-picker";

export type PickerProps = {
  open?: boolean
  title: React.ReactNode
  columns?: { label: string, value: string }[]
}

export const Picker: FC<PickerProps> = ({
                                          open,
                                          title,
                                        }) => {
  return <Popup open={open} styles={{
    body: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    }
  }}>
    <div className={classNames(pickerCls)}>
      <div className={classNames(`${pickerCls}-header`)}>
        <a className={classNames(`${pickerCls}-header-button`)}>取消</a>
        {title && <div className={classNames(`${pickerCls}-header-title`)}>{title}</div>}
        <a className={classNames(`${pickerCls}-header-button`)}>确定</a>
      </div>
      <div className={classNames(`${pickerCls}-body`)}>
        <div className={classNames(`${pickerCls}-view`)}>
          <PickerViewColumn/>
          <div className={classNames(`${pickerCls}-view-mask`)}>
            <div className={classNames(`${pickerCls}-view-mask-top`)}/>
            <div className={classNames(`${pickerCls}-view-mask-middle`)}/>
            <div className={classNames(`${pickerCls}-view-mask-bottom`)}/>
          </div>
        </div>
      </div>
    </div>
  </Popup>
}

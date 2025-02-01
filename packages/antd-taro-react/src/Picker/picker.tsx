import React, {FC} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import {PickerViewColumn} from "./picker-view-column";
import _ from "lodash";

const pickerCls = "triones-antm-picker";

export type PickerProps = {
  open?: boolean
  title?: React.ReactNode
  columns?: Option[][]
  /**
   * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   * @default false
   */
  labelInValue?: boolean
  value?: any[],
  onChange?: (value: any[]) => void,
}

export type Option = {
  label?: string, value?: string
}

export const Picker: FC<PickerProps> = ({
                                          open,
                                          title,
                                          columns,
                                          labelInValue = false
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
          {!_.isEmpty(columns) && columns?.map((column: any, index: number) => {
            return <PickerViewColumn options={column}/>
          })}
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

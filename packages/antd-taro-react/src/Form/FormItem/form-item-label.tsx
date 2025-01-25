import React, {CSSProperties, FC} from "react"
import classNames from "classnames";
import {NamePath} from "rc-field-form/lib/interface";
import {useFormContext} from "@trionesdev/antd-taro-react/Form/hooks/useFormContext";
import {isFunction} from "lodash";

type FormItemLabelProps = {
  className?: string
  style?: CSSProperties
  label?: React.ReactNode
  name?: NamePath
  required?: boolean
}
export const FormItemLabel: FC<FormItemLabelProps> = ({className, style, label, required}) => {
  const {requiredMark} = useFormContext()
  const clsPrefix = `triones-antm-form-item-label`
  return <div className={classNames(className, {required: `${clsPrefix}-required`})} style={style}>
    <label>
      {required && <div className={`${clsPrefix}-required-mark`}>
        {isFunction(requiredMark) ? requiredMark(label, {required}) : '*'}
      </div>}
      {label}</label>
  </div>
}

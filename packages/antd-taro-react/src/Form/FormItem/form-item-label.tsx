import React, {CSSProperties, FC} from "react"
import classNames from "classnames";
import {NamePath} from "rc-field-form/lib/interface";
import {useFormContext} from "../hooks/useFormContext";
import {isFunction} from "lodash";
import {FormItemLayout} from "@trionesdev/antd-taro-react/Form/form";

type FormItemLabelProps = {
  className?: string
  style?: CSSProperties
  label?: React.ReactNode
  layout?: FormItemLayout;
  name?: NamePath
  required?: boolean
}
export const FormItemLabel: FC<FormItemLabelProps> = ({className, style, label, layout, required}) => {
  const {requiredMark, colon} = useFormContext()
  const clsPrefix = `triones-antm-form-item-label`
  return <div className={classNames(className, {required: `${clsPrefix}-required`})} style={style}>
    <label>
      {required && <div className={`${clsPrefix}-required-mark`}>
        {isFunction(requiredMark) ? requiredMark(label, {required}) : '*'}
      </div>}
      {label}
      {layout == 'horizontal' && colon && ':'}
    </label>
  </div>
}

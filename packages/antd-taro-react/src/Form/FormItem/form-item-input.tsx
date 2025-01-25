import React, {FC, useState} from "react"
import {Field} from "rc-field-form";
import classNames from "classnames";
import {Meta, Rule} from "rc-field-form/lib/interface";
import _ from "lodash";

type FormItemInputProps = {
  children?: React.ReactElement;
  className?: string;
  name?: string;
  rules?: Rule[]
  errors?: React.ReactNode[];
  errorRender?: (errors?: any[]) => React.ReactNode;
}

export const FormItemInput: FC<FormItemInputProps> = ({children, className, name, rules, errorRender}) => {
  const [meta, setMeta] = useState<Meta | undefined>()

  const clsPrefix = "triones-antm-form-item"
  return <div className={classNames(className)}>
    <div><Field name={name} rules={rules} trigger={'onChange'} onMetaChange={(meta) => {
      setMeta(meta)
    }}>{children}</Field></div>
    {!_.isEmpty(meta?.errors) &&
      <div className={classNames(`${clsPrefix}-error`)}>{errorRender?.(meta?.errors) || meta?.errors.join(',')}</div>}
  </div>
}

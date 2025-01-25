import React, {FC} from "react"
import {Field} from "rc-field-form";
import classNames from "classnames";
import {Rule} from "rc-field-form/lib/interface";

type FormItemInputProps = {
  children?: React.ReactElement;
  className?: string;
  name?: string;
  rules?: Rule[]
  errors?: React.ReactNode[];
}

export const FormItemInput: FC<FormItemInputProps> = ({children, className, name, rules}) => {

  return <div className={classNames(className)}>
    <div><Field name={name} rules={rules} trigger={'onChange'}>{children}</Field></div>
    <div></div>
  </div>
}

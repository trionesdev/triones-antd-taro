import React, {FC, ReactNode} from "react"
import {FormItemLabel} from "@trionesdev/antd-taro-react/Form/FormItem/form-item-label";
import {FormItemInput} from "@trionesdev/antd-taro-react/Form/FormItem/form-item-input";
import { NamePath } from "rc-field-form/lib/interface";

export type FormItemProps = {
  children?: ReactNode;
  label?: ReactNode;
  name?: NamePath;
}

export const FormItem: FC<FormItemProps> = (props) => {
  return <>
    <FormItemLabel/>
    <FormItemInput />
  </>
}

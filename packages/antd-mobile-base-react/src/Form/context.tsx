import React from "react";
import {FormItemVerticalAlign, FormLayout, FormHorizontalAlign, RequiredMark} from "./types";


export interface FormContextProps {
  colon?: boolean;
  layout?: FormLayout;
  labelAlign?: FormHorizontalAlign
  labelWidth?: number
  contentAlign?: FormHorizontalAlign
  requiredMark?: RequiredMark;
  form?: any;
  hiddenError?: boolean
  extra?: React.ReactNode;
  verticalAlign?: FormItemVerticalAlign;
}

export const FormContext = React.createContext<FormContextProps>({
  colon: true,
  layout: "horizontal",
  labelAlign: "start",
  contentAlign: "start",
})

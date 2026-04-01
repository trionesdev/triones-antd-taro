import React from "react";
import {FormLayout, FormLayoutAlign, RequiredMark} from "./types";


export interface FormContextProps {
  colon?: boolean;
  layout?: FormLayout;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  wrapperAlign?: FormLayoutAlign
  requiredMark?: RequiredMark;
  form?: any;
  hiddenError?: boolean
  extra?: React.ReactNode;
}

export const FormContext = React.createContext<FormContextProps>({
  colon: true,
  layout: "horizontal",
  labelAlign: "left"
})

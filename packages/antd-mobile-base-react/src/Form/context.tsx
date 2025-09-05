import React from "react";
import {FormLayout, FormLayoutAlign, RequiredMark} from "./form";

export interface FormContextProps {
  colon?: boolean;
  layout?: FormLayout;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  requiredMark?: RequiredMark;
  form?: any;
  hiddenError?: boolean
}

export const FormContext = React.createContext<FormContextProps>({
  colon: true,
  layout: "horizontal",
  labelAlign: "left",

})

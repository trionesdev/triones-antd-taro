import React from "react";
import {FormLayout, FormLayoutAlign, RequiredMark} from "./form";

export interface FormContextProps {
  layout?: FormLayout;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  requiredMark?: RequiredMark;
  form?: any;
}

export const FormContext = React.createContext<FormContextProps>({
  layout: "horizontal",
  labelAlign: "left",

})

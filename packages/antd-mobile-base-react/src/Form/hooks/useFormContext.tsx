import {FormContext, FormContextProps} from "../context";
import React from "react";

export function useFormContext(): FormContextProps {
  return React.useContext(FormContext);
}

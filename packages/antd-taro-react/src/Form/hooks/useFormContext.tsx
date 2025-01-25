import {FormContext, FormContextProps} from "../context";
import React from "react";

export function useFormContext():FormContextProps {
  const  formContext = React.useContext(FormContext);
 return  formContext
}

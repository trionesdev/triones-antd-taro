import {
  Input as InternalInput,
  InputProps,
  InputOPTProps,
  InputPasswordProps,
  InputTextareaProps
} from "@trionesdev/antd-mobile-base-react"
import {InputDigit,InputDigitProps} from "./input-digit";

type CompoundedComponent = typeof InternalInput & {
  Digit: typeof InputDigit;
}

const Input = InternalInput as CompoundedComponent;
Input.Digit = InputDigit;

export type {
  InputOPTProps,
  InputPasswordProps,
  InputProps,
  InputTextareaProps,
  InputDigitProps
};
export default Input;

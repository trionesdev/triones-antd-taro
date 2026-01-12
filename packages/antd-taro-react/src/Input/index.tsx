import {
  Input as InternalInput,
  InputProps,
  InputOPTProps,
  InputPasswordProps,
  InputTextareaProps
} from "@trionesdev/antd-mobile-base-react"
import {InputDigit, InputDigitProps} from "./input-digit";
import {InputNumber, InputNumberProps} from "./input-number";

type CompoundedComponent = typeof InternalInput & {
  Digit: typeof InputDigit;
  Number: typeof InputNumber;
}

const Input = InternalInput as CompoundedComponent;
Input.Digit = InputDigit;
Input.Number = InputNumber;

export type {
  InputOPTProps,
  InputPasswordProps,
  InputProps,
  InputTextareaProps,
  InputDigitProps,
  InputNumberProps
};
export default Input;

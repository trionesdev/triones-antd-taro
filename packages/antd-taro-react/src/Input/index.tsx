import { Input as InternalInput } from "./input";
import { InputDigit, InputDigitProps } from "./input-digit";
import { InputNumber, InputNumberProps } from "./input-number";
import { InputPassword, InputPasswordProps } from "./input-password";
import { Textarea, InputTextareaProps } from "./textarea";
import "./index.scss";
import { InputOPT, InputOPTProps } from "./input-opt";
import { InputProps } from "./types";

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  OPT: typeof InputOPT;
  Digit: typeof InputDigit;
  Number: typeof InputNumber;
  Textarea: typeof Textarea;
}

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;
Input.Digit = InputDigit;
Input.Number = InputNumber;
Input.Textarea = Textarea;

export type {
  InputOPTProps,
  InputPasswordProps,
  InputProps,
  InputTextareaProps,
  InputDigitProps,
  InputNumberProps
};
export default Input;

import { InputProps, Input as InternalInput } from './input';
import { InputOPT, InputOPTProps } from './input-opt';
import { InputPassword, InputPasswordProps } from './input-password';
import { InputTextareaProps, Textarea } from './textarea';

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  TextArea: typeof Textarea;
  OPT: typeof InputOPT;
};

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;
Input.TextArea = Textarea;

export type {
  InputOPTProps,
  InputPasswordProps,
  InputProps,
  InputTextareaProps,
};
export default Input;

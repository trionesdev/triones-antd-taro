import { InputPassword } from '@trionesdev/antd-taro-react/Input/input-password';
import { Input as InternalInput } from './input';
import { InputOPT } from './input-opt';

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  OPT: typeof InputOPT;
};

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;

export default Input;

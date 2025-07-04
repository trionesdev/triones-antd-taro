import {createContext} from 'react';

type RadioGroupContextType={
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  labelPosition?: 'left'|'right'
  handleCheck?: (v:any)=>void;
}

export const RadioGroupContext = createContext<RadioGroupContextType>({});

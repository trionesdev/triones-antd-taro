import {createContext} from 'react';

type RadioGroupContextType={
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  handleCheck?: (v:any)=>void;
}

export const RadioGroupContext = createContext<RadioGroupContextType>({});

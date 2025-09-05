import React, { ReactNode } from 'react';

export const cls = 'triones-antm-checkbox';

export type CheckboxGroupContextType={
  value?: any;
  handleCheck?: (v:any)=>void;
}

export type CheckboxGroupProps = {
  value?: any[];
  defaultValue?: any[];
  onChange?: (v:any[])=>void;
  children?: ReactNode;
}

export type CheckboxProps = {
  children?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: any;
  disabled?: boolean
  onChange?: (e:any)=>void;
}

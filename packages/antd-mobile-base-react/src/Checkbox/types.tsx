import React, {ReactNode} from 'react';
import {SpaceProps} from "../Space";

export const cls = 'triones-antm-checkbox';

export type CheckboxGroupContextType = {
  group?:boolean
  value?: any;
  onValueChange?: (v: any) => void;
}
export type Shape = 'button' | 'round'

export type CheckboxOptionProps = {
  label?: ReactNode;
  value?: any;
}

export type CheckboxGroupProps = {
  value?: any[];
  defaultValue?: any[];
  onChange?: (v: any[]) => void;
  children?: ReactNode;
  shape?: Shape
  options?:CheckboxOptionProps[]
  direction?: 'horizontal' | 'vertical'
}

export type CheckboxProps = {
  children?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: any;
  disabled?: boolean
  onChange?: (e: any) => void;
  shape?: Shape
}

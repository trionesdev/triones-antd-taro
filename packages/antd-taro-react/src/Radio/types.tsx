import React, {ReactNode} from "react";
import {NativeProps} from "../utils/native-props";
import {RadioValue} from "./radio";

export const classPrefix = `triones-antm-radio`;

export type RadioProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  value?: RadioValue;
  block?: boolean;
  shape?: 'button' | 'round'
  icon?: (checked: boolean) => ReactNode;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>;

export interface RadioGroupProps {
  value?: any;
  onChange?: (val: any) => void;
  defaultValue?: any;
  disabled?: boolean;
  children?: ReactNode;
  shape?: 'button' | 'round';

  items?: {
    label: React.ReactNode;
    value: any;
  }[];
}

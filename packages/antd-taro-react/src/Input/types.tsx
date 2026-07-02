import { AntSize } from "@trionesdev/antd-mobile-base-react";
import React from "react";

export const inputCls = 'triones-antm-input';
export const inputAffixWrapperCls = 'triones-antm-input-affix-wrapper';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  size?: AntSize
  disabled?: boolean;
  align?: 'start' | 'center' | 'end';
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?:VariantType
  defaultValue?: any;
  value?: any;
  onChange?: (e: any) => void;
};

export type VariantType = 'outlined' | 'borderless' | 'filled' | 'underlined' | undefined

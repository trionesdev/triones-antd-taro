import { SizeType } from "@trionesdev/antd-mobile-base-react";
import React from "react";

export const inputCls = 'triones-antm-input';
export const inputAffixWrapperCls = 'triones-antm-input-affix-wrapper';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  size?: SizeType
  disabled?: boolean;
  align?: 'left' | 'center' | 'right';
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?:variantType
  defaultValue?: any;
  value?: any;
  onChange?: (e: any) => void;
};

export type variantType = 'outlined' | 'borderless' | 'filled' | 'underlined' | undefined

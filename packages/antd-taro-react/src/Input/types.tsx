import { SizeType } from "@trionesdev/antd-mobile-base-react";

export const inputCls = 'triones-antm-input';
export const inputAffixWrapperCls = 'triones-antm-input-affix-wrapper';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  size?: SizeType
  disabled?: boolean;
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  defaultValue?: any;
  value?: any;
  onChange?: (e: any) => void;
};
import React from "react";

export type RequiredMark =
  | boolean
  | 'optional'
  | ((
  labelNode: React.ReactNode,
  info: { required: boolean },
) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';
export type FormHorizontalAlign = 'left' | 'right';
export type FormItemVerticalAlign = 'start' | 'center';

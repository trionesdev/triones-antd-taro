import React, { PropsWithChildren } from 'react';

export const cls = `triones-antm-descriptions`;

export type DescriptionsProps = {
  colon?: boolean;
  columns?: number;
  layout?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
  labelWidth?: number;
  items: DescriptionItemProps[];
};

export type DescriptionItemProps = PropsWithChildren<{
  label?: React.ReactNode;
  labelWidth?: number;
  span?: number;
  colon?: boolean;
}>;

export type DescriptionItemLabelProps = PropsWithChildren<{
  label?: React.ReactNode;
  labelWidth?: number;
  span?: number;
  colon?: boolean;
}>;

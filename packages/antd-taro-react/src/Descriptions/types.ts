import React, { PropsWithChildren } from 'react';

export const cls = `triones-antm-descriptions`;

export type DescriptionItemProps = PropsWithChildren<{
  label?: React.ReactNode;
  span?: number;
  colon?: boolean;
}>;

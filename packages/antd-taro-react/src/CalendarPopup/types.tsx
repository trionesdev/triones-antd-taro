import React from "react";

export const cls = 'triones-antm-calendar-popup';

export type CalendarPopupProps = {
  mouth?: Date;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: Date,
  onOk?: (value?: Date) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export type CalendarPopupRangeProps = {
  mouth?: Date;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: Date[],
  onOk?: (value?: Date[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

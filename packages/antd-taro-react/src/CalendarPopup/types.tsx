import React from "react";
import dayjs from "dayjs";

export const cls = 'triones-antm-calendar-popup';

export type CalendarPopupProps = {
  month?: dayjs.Dayjs;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: dayjs.Dayjs,
  onOk?: (value?: dayjs.Dayjs) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export type CalendarPopupRangeProps = {
  month?: dayjs.Dayjs;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: dayjs.Dayjs[],
  onOk?: (value?: dayjs.Dayjs[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

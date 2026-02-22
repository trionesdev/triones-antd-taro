import React from "react";
import dayjs from "dayjs";

export type CalendarPickerProps = {
  month?: Date | dayjs.Dayjs;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: Date | dayjs.Dayjs,
  onOk?: (value?: dayjs.Dayjs) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export type CalendarRangePickerProps = {
  month?: Date | dayjs.Dayjs;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: (Date | dayjs.Dayjs)[],
  onOk?: (value?: dayjs.Dayjs[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

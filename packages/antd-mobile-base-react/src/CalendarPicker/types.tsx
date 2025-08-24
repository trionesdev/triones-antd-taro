import React from "react";

export type CalendarPickerProps = {
  mouth?: Date;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: Date,
  onOk?: (value?: Date) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export type CalendarPickerRangeProps = {
  mouth?: Date;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: Date[],
  onOk?: (value?: Date[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

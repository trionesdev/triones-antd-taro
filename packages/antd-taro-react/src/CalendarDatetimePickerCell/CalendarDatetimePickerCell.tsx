import React, {FC, useEffect, useState} from 'react';
import CalendarDatetimePicker from "../CalendarDatetimePicker";
import dayjs from "dayjs";
import {isSame} from "../utils/dayjs";
import FormCell, {FormCellProps} from "../FormCell";


export type CalendarDatetimePickerCellProps = Omit<FormCellProps, 'value'> & {
  value?: dayjs.Dayjs | Date;
  format?: string;
  onChange?: (value?: dayjs.Dayjs) => void;
};

export const CalendarDatetimePickerCell: FC<CalendarDatetimePickerCellProps> = ({
                                                                                  value,
                                                                                  format = 'YYYY-MM-DD HH:mm',
                                                                                  onChange,
                                                                                  ...rest
                                                                                }) => {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const [internalValue, setInternalValue] = useState<dayjs.Dayjs | undefined>(value ? dayjs(value) : undefined)

  const handleValueRender = () => {
    if (internalValue) {
      return internalValue.format(format)
    }
    return null;
  }

  useEffect(() => {
    if (value === undefined) {
      return
    }
    if (!isSame(value, internalValue)) {
      setInternalValue(dayjs(value))
    }
  }, [value])

  return (
    <>
      <CalendarDatetimePicker open={innerOpen}
                              value={internalValue || dayjs()}
                              onClose={() => {
                                setInnerOpen(false)
                              }}
                              onOk={(date) => {
                                setInternalValue(date)
                                setInnerOpen(false)
                                onChange?.(date)
                              }}/>
      <FormCell {...rest} onClick={() => {
        setInnerOpen(true)
      }}>{handleValueRender()}</FormCell>
    </>
  );
};

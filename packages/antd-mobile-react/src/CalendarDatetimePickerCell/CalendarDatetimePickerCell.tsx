import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import './style.scss';

import CalendarDatetimePicker from '../CalendarDatetimePicker';
import FormCell, { FormCellProps } from '../FormCell';

export type CalendarDatetimePickerCellProps = Omit<FormCellProps, 'value'> & {
  value?: dayjs.Dayjs | Date;
  format?: string;
  onChange?: (value?: dayjs.Dayjs) => void;
};

const CalendarDatetimePickerCell: FC<CalendarDatetimePickerCellProps> = ({
  value,
  format = 'YYYY-MM-DD HH:mm',
  onChange,
  ...rest
}) => {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const [internalValue, setInternalValue] = useState<any>(value);

  const handleValueRender = () => {
    if (internalValue) {
      return dayjs(internalValue).format(format);
    }
    return null;
  };

  useEffect(() => {
    if (value === undefined) {
      return;
    }
    if (value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);

  return (
    <>
      <CalendarDatetimePicker
        open={innerOpen}
        value={internalValue}
        onClose={() => {
          setInnerOpen(false);
        }}
        onOk={(date) => {
          setInternalValue(date);
          setInnerOpen(false);
          onChange?.(date);
        }}
      />
      <FormCell
        {...rest}
        onClick={() => {
          setInnerOpen(true);
        }}
      >
        {handleValueRender()}
      </FormCell>
    </>
  );
};
export default CalendarDatetimePickerCell;

import React, {FC, useEffect, useState} from 'react';
import './style.scss';
import dayjs from "dayjs";
import Cell, {CellProps} from "../Cell";
import CalendarDatetimePicker from "../CalendarDatetimePicker";

export type CalendarDatetimePickerCellProps = Omit<CellProps, 'value'> & {
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
  const [internalValue, setInternalValue] = useState<any>(value)

  const handleValueRender = () => {
    if (internalValue) {
      return dayjs(internalValue).format(format)
    }
    return null;
  }

  useEffect(() => {
    if (value === undefined) {
      return
    }
    if (value !== internalValue) {
      setInternalValue(value)
    }
  }, [value])

  return (
    <>
      <CalendarDatetimePicker open={innerOpen}
                             value={internalValue}
                             onClose={() => {
                               setInnerOpen(false)
                             }}
                             onOk={(date) => {
                               setInternalValue(date)
                               setInnerOpen(false)
                               onChange?.(date)
                             }}/>
      <Cell onClick={() => {
        setInnerOpen(true)
      }} {...rest}>{handleValueRender()}</Cell>
    </>
  );
};

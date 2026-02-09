import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { cls } from './types';
import CalendarDatetimePopup from "../CalendarDatetimePopup";
import dayjs from "dayjs";

export type CalendarDatetimePickerProps = {
  placeholder?: string;
  value?: dayjs.Dayjs;
  format?: string;
  onChange?: (value?: dayjs.Dayjs) => void;
  align?: 'left' | 'right' | 'center';
};

export const CalendarDatetimePicker: FC<CalendarDatetimePickerProps> = ({
  placeholder = '请选择',
  value,
  format = 'YYYY-MM-DD HH:mm',
  onChange,
  align = 'left'
}) => {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const [internalValue, setInternalValue] = useState<dayjs.Dayjs | undefined>(value)

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
    if (!value.isSame(internalValue)) {
      setInternalValue(value)
    }
  }, [value])

  return (
    <>
      <CalendarDatetimePopup open={innerOpen}
        value={internalValue}
        onClose={() => {
          setInnerOpen(false)
        }}
        onOk={(date) => {
          setInternalValue(date)
          setInnerOpen(false)
          onChange?.(date)
        }} />
      <div className={classNames(cls, { [`${cls}-${align}`]: true })} onClick={() => {
        setInnerOpen(true)
      }}>
        {!internalValue ? <div className={`${cls}-placeholder`}>{placeholder}</div> :
          <div>{handleValueRender()}</div>}
      </div>
    </>
  );
};

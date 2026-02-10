import classNames from 'classnames';
import React, {FC, useEffect, useState} from 'react';
import './style.scss';
import {cls} from './types';
import CalendarDatetimePopup from "../CalendarDatetimePopup";
import dayjs from "dayjs";
import {isSame} from "../utils/dayjs";

export type CalendarDatetimePickerProps = {
  placeholder?: string;
  value?: dayjs.Dayjs | Date;
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
      <CalendarDatetimePopup open={innerOpen}
                             value={internalValue || dayjs()}
                             onClose={() => {
                               setInnerOpen(false)
                             }}
                             onOk={(date) => {
                               setInternalValue(date)
                               setInnerOpen(false)
                               onChange?.(date)
                             }}/>
      <div className={classNames(cls, {[`${cls}-${align}`]: true})} onClick={() => {
        setInnerOpen(true)
      }}>
        {!internalValue ? <div className={`${cls}-placeholder`}>{placeholder}</div> :
          <div>{handleValueRender()}</div>}
      </div>
    </>
  );
};

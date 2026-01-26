import classNames from 'classnames';
import React, {FC, useEffect, useState} from 'react';
import './style.scss';
import {cls} from './types';
import CalendarDatetimePopup from "../CalendarDatetimePopup";
import dayjs from "dayjs";

export type CalendarDatetimePopupProps = {
  placeholder?: string;
  value?: Date;
  format?: string;
  onChange?: (value?: Date) => void;
};

export const CalendarDatetimePicker: FC<CalendarDatetimePopupProps> = ({
                                                                         placeholder = '请选择',
                                                                         value ,
                                                                          format = 'YYYY-MM-DD HH:mm',
                                                                         onChange
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
    if ( value === undefined){
      return
    }
    if (value !== internalValue) {
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
                             }}/>
      <div className={classNames(cls)} onClick={() => {
        setInnerOpen(true)
      }}>
        {!internalValue ? <div className={`${cls}-placeholder`}>{placeholder}</div> :
          <div>{handleValueRender()}</div>}
      </div>
    </>
  );
};

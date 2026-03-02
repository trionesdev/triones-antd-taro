import {CalendarGrid} from '@trionesdev/antd-taro-react';
import classNames from 'classnames';
import React, {forwardRef, memo, useEffect, useState} from 'react';
import {CalendarHeader} from './calendar-header';
import './style.scss';
import {TouchableCalendarGrid} from './touchable-calendar-grid';
import dayjs from "dayjs";
import {isSame} from "../utils/dayjs";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  month?: dayjs.Dayjs | Date;
  value?: dayjs.Dayjs | Date;
  onChange?: (date: dayjs.Dayjs) => void;
  onMonthChange?: (month: dayjs.Dayjs) => void;
  slideable?: boolean;
};

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>(
    (
      {month, value, onChange, onMonthChange, slideable = false},
      ref,
    ) => {
      const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs>(dayjs(month));

      const handleMonthChange = (newMonth: dayjs.Dayjs) => {
        if (isSame(currentMonth, newMonth, 'month')) {
          return;
        }
        setCurrentMonth(newMonth);
        onMonthChange?.(newMonth);
      };

      useEffect(() => {
        if (month == undefined) {
          return;
        }
        if (!isSame(month, currentMonth, 'month')) {
          setCurrentMonth(dayjs(month));
        }
      }, [month]);

      return (
        <div ref={ref} className={classNames(`${calendarCls}`)}>
          <CalendarHeader month={currentMonth} onChange={handleMonthChange}/>
          {slideable ? (
            <TouchableCalendarGrid
              month={currentMonth}
              value={value ? [dayjs(value)] : []}
              onMonthChange={handleMonthChange}
              onChange={(value) => {
                onChange?.(value?.[0]);
              }}
            />
          ) : (
            <CalendarGrid
              month={currentMonth}
              value={value ? [dayjs(value)] : []}
              onChange={(value) => {
                onChange?.(value?.[0]);
              }}
            />
          )}
        </div>
      );
    },
  ),
);

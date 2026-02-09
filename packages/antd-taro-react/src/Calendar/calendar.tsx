import {CalendarGrid} from '@trionesdev/antd-taro-react';
import classNames from 'classnames';
import React, {forwardRef, memo, useEffect, useState} from 'react';
import {CalendarHeader} from './calendar-header';
import './style.scss';
import {TouchableCalendarGrid} from './touchable-calendar-grid';
import {cloneDeep} from "lodash-es";
import dayjs from "dayjs";
import {isSame} from "../utils/dayjs";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  month?: dayjs.Dayjs;
  value?: dayjs.Dayjs;
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
      const [currentMonth, setCurrentMonth] = useState(month || dayjs());

      const handleMonthChange = (newMonth: dayjs.Dayjs) => {
        if (isSame(currentMonth,newMonth, 'month')) {
          return;
        }
        setCurrentMonth(newMonth);
        onMonthChange?.(newMonth);
      };

      useEffect(() => {
        if (month == undefined) {
          return;
        }
        if (!isSame(month,currentMonth, 'month')) {
          setCurrentMonth(month);
        }
      }, [month]);

      useEffect(() => {
        console.log('calendar value', value);
      }, [value]);

      return (
        <div ref={ref} className={classNames(`${calendarCls}`)}>
          <CalendarHeader month={currentMonth} onChange={handleMonthChange}/>
          {slideable ? (
            <TouchableCalendarGrid
              month={currentMonth}
              value={value ? [cloneDeep(value)] : []}
              onMonthChange={handleMonthChange}
              onChange={(value) => {
                onChange?.(value?.[0]);
              }}
            />
          ) : (
            <CalendarGrid
              month={currentMonth}
              value={value ? [cloneDeep(value)] : []}
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

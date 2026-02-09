import classNames from 'classnames';
import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {CalendarGrid} from './calendar-grid';
import {CalendarHeader} from './calendar-header';
import './style.scss';
import {TouchableCalendarGrid} from './touchable-calendar-grid';
import dayjs, {ConfigType} from "dayjs";
import {isSame} from "../utils/dayjs";

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  month?: dayjs.Dayjs;
  value?: dayjs.Dayjs[];
  onChange?: (date: dayjs.Dayjs[]) => void;
  slideable?: boolean;
};

export const CalendarRange: FC<CalendarProps> = memo(
  ({month, value, onChange, slideable}) => {
    const [currentMonth, setCurrentMonth] = useState(month || dayjs());
    const valueRef = useRef<dayjs.Dayjs[]>(value || []);

    useEffect(() => {
      if (value !== undefined) {
        if (!isSame(value?.[0],valueRef.current?.[0], 'day') || !isSame(value?.[1],valueRef.current?.[1], 'day')) {
          valueRef.current = value;
        }
      }
    }, [value]);

    return (
      <div className={classNames(`${calendarCls}`)}>
        <CalendarHeader month={currentMonth} onChange={setCurrentMonth}/>
        {slideable ? (
          <TouchableCalendarGrid
            month={currentMonth}
            value={value ?? valueRef.current ?? []}
            onMonthChange={setCurrentMonth}
            onChange={(value) => {
              valueRef.current = value;
              onChange?.(value);
            }}
            range={true}
          />
        ) : (
          <CalendarGrid
            month={currentMonth}
            value={value ?? valueRef.current ?? []}
            onChange={(value) => {
              valueRef.current = value;
              onChange?.(value);
            }}
            range={true}
          />
        )}
      </div>
    );
  },
);

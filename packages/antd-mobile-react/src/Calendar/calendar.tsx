import classNames from 'classnames';
import React, {forwardRef, memo, useState} from 'react';
import {CalendarHeader} from './calendar-header';
import './style.scss';
import {TouchableCalendarGrid} from './touchable-calendar-grid';
import {CalendarGrid} from "./calendar-grid";
import dayjs from "dayjs";
import {isSame} from "../utils/dayjs";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  month?: dayjs.Dayjs|Date;
  value?: dayjs.Dayjs|Date;
  onChange?: (date: dayjs.Dayjs) => void;
  onMonthChange?: (mouth: dayjs.Dayjs) => void;
  slideable?: boolean;
};

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>(
    (
      { month = dayjs(), value, onChange, onMonthChange, slideable = false },
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

      return (
        <div ref={ref} className={classNames(`${calendarCls}`)}>
          <CalendarHeader month={currentMonth} onChange={handleMonthChange} />
          {slideable ? (
            <TouchableCalendarGrid
              month={currentMonth}
              value={value ? [dayjs( value)] : []}
              onMouthChange={(newMouth) => {
                setCurrentMonth(newMouth);
                onMonthChange?.(newMouth);
              }}
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

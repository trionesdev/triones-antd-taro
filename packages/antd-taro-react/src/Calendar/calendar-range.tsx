import classNames from 'classnames';
import _ from 'lodash-es';
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { CalendarGrid } from './calendar-grid';
import { CalendarHeader } from './calendar-header';
import './style.scss';
import { TouchableCalendarGrid } from './touchable-calendar-grid';
import dayjs from "dayjs";

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  month?: dayjs.Dayjs;
  value?: dayjs.Dayjs[];
  onChange?: (date: dayjs.Dayjs[]) => void;
  slideable?: boolean;
};

export const CalendarRange: FC<CalendarProps> = memo(
  ({ month = dayjs(), value, onChange, slideable }) => {
    const [currentMonth, setCurrentMonth] = useState(month);
    const valueRef = useRef<any>();

    useEffect(() => {
      if (value !== undefined) {
        if (!_.isEqual(value, valueRef.current)) {
          valueRef.current = value;
        }
      }
    }, [value]);

    return (
      <div className={classNames(`${calendarCls}`)}>
        <CalendarHeader month={currentMonth} onChange={setCurrentMonth} />
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

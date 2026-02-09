import { CalendarGrid } from '@trionesdev/antd-taro-react';
import classNames from 'classnames';
import React, { forwardRef, memo, useState } from 'react';
import { CalendarHeader } from './calendar-header';
import './style.scss';
import { TouchableCalendarGrid } from './touchable-calendar-grid';
import {cloneDeep} from "lodash-es";
import dayjs from "dayjs";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  month?: dayjs.Dayjs;
  value?: dayjs.Dayjs;
  onChange?: (date: dayjs.Dayjs) => void;
  onMonthChange?: (mouth: dayjs.Dayjs) => void;
  slideable?: boolean;
};

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>(
    (
      { month, value, onChange, onMonthChange, slideable = false },
      ref,
    ) => {
      const [currentMonth, setCurrentMonth] = useState(month || dayjs());

      return (
        <div ref={ref} className={classNames(`${calendarCls}`)}>
          <CalendarHeader mouth={currentMonth} onChange={setCurrentMonth} />
          {slideable ? (
            <TouchableCalendarGrid
              month={currentMonth}
              value={value ? [cloneDeep( value)] : []}
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
              value={value ? [cloneDeep( value)] : []}
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

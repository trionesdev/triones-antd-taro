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
  mouth?: dayjs.Dayjs;
  value?: dayjs.Dayjs;
  onChange?: (date: dayjs.Dayjs) => void;
  onMouthChange?: (mouth: dayjs.Dayjs) => void;
  slideable?: boolean;
};

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>(
    (
      { mouth, value, onChange, onMouthChange, slideable = false },
      ref,
    ) => {
      const [currentMouth, setCurrentMouth] = useState(mouth || dayjs());

      return (
        <div ref={ref} className={classNames(`${calendarCls}`)}>
          <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth} />
          {slideable ? (
            <TouchableCalendarGrid
              mouth={currentMouth}
              value={value ? [cloneDeep( value)] : []}
              onMouthChange={(newMouth) => {
                setCurrentMouth(newMouth);
                onMouthChange?.(newMouth);
              }}
              onChange={(value) => {
                onChange?.(value?.[0]);
              }}
            />
          ) : (
            <CalendarGrid
              mouth={currentMouth}
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

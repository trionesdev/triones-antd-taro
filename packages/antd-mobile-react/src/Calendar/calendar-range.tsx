import classNames from 'classnames';
import {isEqual} from 'lodash-es';
import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {CalendarGrid} from './calendar-grid';
import {CalendarHeader} from './calendar-header';
import './style.scss';
import {TouchableCalendarGrid} from './touchable-calendar-grid';
import dayjs from "dayjs";
import {isSameArray, toDayjsArray} from "../utils/dayjs";

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  month?: dayjs.Dayjs | Date;
  value?: (dayjs.Dayjs | Date)[];
  onChange?: (date: dayjs.Dayjs[]) => void;
  slideable?: boolean;
};

export const CalendarRange: FC<CalendarProps> = memo(
  ({month = dayjs(), value, onChange, slideable}) => {
    const [currentMouth, setCurrentMouth] = useState<dayjs.Dayjs>(dayjs(month));
    const valueRef = useRef<dayjs.Dayjs[]>();

    useEffect(() => {
      if (value !== undefined) {
        if (!isSameArray(value, valueRef.current, 'day')) {
          valueRef.current = toDayjsArray( value);
        }
      }
    }, [value]);

    return (
      <div className={classNames(`${calendarCls}`)}>
        <CalendarHeader month={currentMouth} onChange={setCurrentMouth}/>
        {slideable ? (
          <TouchableCalendarGrid
            month={currentMouth}
            value={toDayjsArray(value) ?? valueRef.current ?? []}
            onMouthChange={setCurrentMouth}
            onChange={(value) => {
              valueRef.current = value;
              onChange?.(value);
            }}
            range={true}
          />
        ) : (
          <CalendarGrid
            month={currentMouth}
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

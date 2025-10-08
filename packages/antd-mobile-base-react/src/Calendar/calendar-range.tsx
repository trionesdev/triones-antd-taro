import classNames from 'classnames';
import {isEqual} from 'lodash';
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { CalendarGrid } from './calendar-grid';
import { CalendarHeader } from './calendar-header';
import './style.scss';
import { TouchableCalendarGrid } from './touchable-calendar-grid';

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  mouth?: Date;
  value?: Date[];
  onChange?: (date: Date[]) => void;
  slideable?: boolean;
};

export const CalendarRange: FC<CalendarProps> = memo(
  ({ mouth = new Date(), value, onChange, slideable }) => {
    const [currentMouth, setCurrentMouth] = useState(mouth);
    const valueRef = useRef<any>();

    useEffect(() => {
      if (value !== undefined) {
        if (!isEqual(value, valueRef.current)) {
          valueRef.current = value;
        }
      }
    }, [value]);

    return (
      <div className={classNames(`${calendarCls}`)}>
        <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth} />
        {slideable ? (
          <TouchableCalendarGrid
            mouth={currentMouth}
            value={value ?? valueRef.current ?? []}
            onMouthChange={setCurrentMouth}
            onChange={(value) => {
              valueRef.current = value;
              onChange?.(value);
            }}
            range={true}
          />
        ) : (
          <CalendarGrid
            mouth={currentMouth}
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

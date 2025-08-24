import classNames from 'classnames';
import React, { forwardRef, memo, useState } from 'react';
import { CalendarHeader } from './calendar-header';
import './style.scss';
import { TouchableCalendarGrid } from './touchable-calendar-grid';
import {CalendarGrid} from "./calendar-grid";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  mouth?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  onMouthChange?: (mouth: Date) => void;
  slideable?: boolean;
};

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>(
    (
      { mouth = new Date(), value, onChange, onMouthChange, slideable = false },
      ref,
    ) => {
      const [currentMouth, setCurrentMouth] = useState(mouth);

      return (
        <div ref={ref} className={classNames(`${calendarCls}`)}>
          <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth} />
          {slideable ? (
            <TouchableCalendarGrid
              mouth={currentMouth}
              value={value ? [value] : []}
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
              value={value ? [value] : []}
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

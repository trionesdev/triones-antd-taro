import classNames from 'classnames';
import React, {FC, ForwardedRef, forwardRef, memo, useEffect, useMemo, useRef, useState} from 'react';
import './style.scss';

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  mouth?: Date;
  selectedStart?: Date;
  selectedEnd?: Date;
  onSelect?: (date: Date) => void;
};

export type CalendarCellProps = {
  mouth?: Date;
  date?: Date;
  size?: number;
  selectedStart?: Date;
  selectedEnd?: Date;
  onSelect?: (date: Date) => void;
};

const CalendarCell: FC<CalendarCellProps> = memo(
  ({
    mouth = new Date(),
    date = new Date(),
    size,
    selectedStart,
    selectedEnd,
    onSelect,
  }) => {
    const disabled = useMemo(() => {
      return date.getMonth() !== mouth.getMonth();
    }, [date, mouth]);

    const selected = useMemo(() => {
      if (disabled){
        return false
      }
      date.setHours(0, 0, 0, 0);
      selectedStart?.setHours(0, 0, 0, 0);
      selectedEnd?.setHours(0, 0, 0, 0);
      return (
        date.getTime() === selectedStart?.getTime() ||
        date.getTime() === selectedEnd?.getTime()
      );
    }, [mouth, date, selectedStart, selectedEnd]);

    const selectedRange = useMemo(() => {
      if (disabled){
        return false
      }
      if (!selectedStart || !selectedEnd) {
        return false;
      }
      date.setHours(0, 0, 0, 0);
      selectedStart.setHours(0, 0, 0, 0);
      selectedEnd.setHours(0, 0, 0, 0);
      return (
        date.getTime() > selectedStart!.getTime() &&
        date.getTime() < selectedEnd!.getTime()
      );
    }, [mouth, date, selectedStart, selectedEnd]);

    return (
      <div
        className={classNames(`${calendarCls}-cell`, {
          [`${calendarCls}-cell-disabled`]: disabled,
          [`${calendarCls}-cell-selected`]: selected,
          [`${calendarCls}-cell-selected-range`]: selectedRange,
        })}
        style={{ width: size, height: size }}
        onClick={() => {
          onSelect?.(date);
        }}
      >
        {date.getDate()}
      </div>
    );
  },
);

export const Calendar: FC<CalendarProps> = memo(forwardRef(({ mouth = new Date(), selectedStart, selectedEnd,onSelect },ref:ForwardedRef<any>) => {
  const calendarRef = useRef<any>();
  const [cellSize, setCellSize] = useState<number>();

  const cells = useMemo(() => {
    const firstDate = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
    const lastDate = new Date(mouth.getFullYear(), mouth.getMonth() + 1, 0);
    const beforeDays = Array.from({ length: firstDate.getDay() }).map(
      (_, index): Date => {
        const date = new Date(firstDate);
        date.setDate(firstDate.getDate() - (firstDate.getDay()  - index));
        return date;
      },
    );

    const afterDays = Array.from({ length: 6 - lastDate.getDay() }).map(
      (_, index): Date => {
        const date = new Date(lastDate);
        date.setDate(lastDate.getDate() + index + 1);
        return date;
      },
    );
    const mouthDays = Array.from({ length: lastDate.getDate() }).map(
      (_, index): Date => {
        const date = new Date(firstDate);
        date.setDate(date.getDate()+index );
        return date;
      },
    );
    return [...beforeDays, ...mouthDays, ...afterDays];
  }, [mouth]);

  useEffect(() => {
    const width = calendarRef.current.clientWidth;
    console.log(width)
    setCellSize(width / 7);
  }, []);

  return (
    <div ref={ref}>
      <div ref={calendarRef} className={classNames(`${calendarCls}`)}>
        {cells.map((item, index) => {
          return (
            <CalendarCell
              key={index}
              mouth={mouth}
              date={item}
              size={cellSize}
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
}));

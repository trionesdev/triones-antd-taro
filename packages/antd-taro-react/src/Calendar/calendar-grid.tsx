import classNames from 'classnames';
import React, {FC, ForwardedRef, forwardRef, memo, useEffect, useMemo, useState} from 'react';
import './style.scss';
import _ from "lodash";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  mouth?: Date;
  /**
   * @description 值，如果是区间模式，则 0,1 索引的值有效，0是开始时间，1是结束时间
   */
  value?: Date[];
  /**
   * @description 默认值，如果是区间模式，则 0,1 索引的值有效，0是开始时间，1是结束时间
   */
  defaultValue?: Date[];
  onChange?: (value: Date[]) => void;
  /**
   * @description 是否为范围选择
   */
  range?: boolean
  onSelect?: (date: Date) => void;
};

export type CalendarCellProps = {
  mouth?: Date;
  date?: Date;
  value?: Date[];
  range?: boolean
  onSelect?: (date: Date) => void;
};

const CalendarCell: FC<CalendarCellProps> = memo(
  ({
     mouth = new Date(),
     date = new Date(),
     value,
     range,
     onSelect,
   }) => {
    const disabled = useMemo(() => {
      return date.getMonth() !== mouth.getMonth();
    }, [date, mouth]);

    const selected = useMemo(() => {
      if (disabled || _.isEmpty(value)) {
        return false
      }
      if (value?.[0]) {
        value?.[0]?.setHours(0, 0, 0, 0)
      }
      if (value?.[1]) {
        value?.[1]?.setHours(0, 0, 0, 0)
      }

      date.setHours(0, 0, 0, 0);
      if (range) {
        const startDate = value?.[0]
        const endDate = value?.[1]
        console.log('value', value)

        return date.getTime() === startDate?.getTime() || date.getTime() === endDate?.getTime();
      } else {
        return date.getTime() === value?.[0]?.getTime();
      }

    }, [mouth, date, value]);

    const selectedRange = useMemo(() => {
      if (disabled || !range) {
        return false
      }
      const startDate = value?.[0]
      const endDate = value?.[1]
      if (!startDate || !endDate) {
        return false
      }
      date.setHours(0, 0, 0, 0);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      return (
        date.getTime() > startDate!.getTime() &&
        date.getTime() < endDate!.getTime()
      );
    }, [mouth, date, value]);

    return (
      <div
        className={classNames(`${calendarCls}-cell`, {
          [`${calendarCls}-cell-disabled`]: disabled,
          [`${calendarCls}-cell-selected`]: selected,
          [`${calendarCls}-cell-selected-range`]: selectedRange,
        })}
        // style={{ width: size, height: size }}
        onClick={() => {
          onSelect?.(date);
        }}
      >
        <div className={classNames(`${calendarCls}-cell-date`)}>{date.getDate()}</div>
        {date.getDate()===1 && <div className={classNames(`${calendarCls}-cell-mouth`)}>{`${(date.getMonth()+1)}月`}</div>}
      </div>
    );
  },
);

export const CalendarGrid: FC<CalendarProps> = memo(forwardRef(({
                                                                  mouth = new Date(),
                                                                  value,
                                                                  defaultValue,
                                                                  range = false,
                                                                  onChange,
                                                                  onSelect
                                                                }, ref: ForwardedRef<any>) => {

  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? [])

  const handleSelect = (date: Date) => {
    date.setHours(0, 0, 0, 0)
    let _value: Date[] = innerValue
    if (range) {
      if (!_value[0]) {
        _value = [date]
      } else if (!_value[1]) {
        let startDate = _value[0]
        if (date.getTime() < startDate.getTime()) {
          _value = [date, startDate]
        } else {
          _value = [startDate, date]
        }
      }
    } else {
      _value = [date]
    }
    setInnerValue(_value)
    onSelect?.(date)
    onChange?.(_value)
  }

  const cells = useMemo(() => {
    const firstDate = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
    const lastDate = new Date(mouth.getFullYear(), mouth.getMonth() + 1, 0);
    const beforeDays = Array.from({length: firstDate.getDay()}).map(
      (_, index): Date => {
        const date = new Date(firstDate);
        date.setDate(firstDate.getDate() - (firstDate.getDay() - index));
        return date;
      },
    );

    const afterDays = Array.from({length: 6 - lastDate.getDay()}).map(
      (_, index): Date => {
        const date = new Date(lastDate);
        date.setDate(lastDate.getDate() + index + 1);
        return date;
      },
    );
    const mouthDays = Array.from({length: lastDate.getDate()}).map(
      (_, index): Date => {
        const date = new Date(firstDate);
        date.setDate(date.getDate() + index);
        return date;
      },
    );
    return [...beforeDays, ...mouthDays, ...afterDays];
  }, [mouth]);

  useEffect(() => {
    if (value !== undefined) {
      if (value !== innerValue) {
        setInnerValue(value)
      }
    }
  }, [value]);

  return (
    <div ref={ref} className={classNames(`${calendarCls}-grid`)}>
      {cells.map((item, index) => {
        return (
          <CalendarCell
            key={index}
            mouth={mouth}
            date={item}
            value={innerValue}
            range={range}
            onSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}));

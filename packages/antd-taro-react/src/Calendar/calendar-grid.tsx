import classNames from 'classnames';
import {isEmpty} from 'lodash-es';
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './style.scss';
import dayjs from "dayjs";

const calendarCls = 'triones-antm-calendar';

export type CalendarGridProps = {
  mouth?: dayjs.Dayjs;
  /**
   * @description 值，如果是区间模式，则 0,1 索引的值有效，0是开始时间，1是结束时间
   */
  value?: dayjs.Dayjs[];
  /**
   * @description 默认值，如果是区间模式，则 0,1 索引的值有效，0是开始时间，1是结束时间
   */
  defaultValue?: dayjs.Dayjs[];
  onChange?: (value: dayjs.Dayjs[]) => void;
  /**
   * @description 是否为范围选择
   */
  range?: boolean;
  onSelect?: (date: dayjs.Dayjs) => void;
};

export type CalendarCellProps = {
  mouth?: dayjs.Dayjs;
  date?: dayjs.Dayjs;
  value?: dayjs.Dayjs[];
  range?: boolean;
  onSelect?: (date: dayjs.Dayjs) => void;
};

const CalendarCell: FC<CalendarCellProps> = memo(
  ({ mouth = dayjs(), date = dayjs(), value, range, onSelect }) => {
    const disabled = useMemo(() => {
      return date.month() !== mouth.month();
    }, [date, mouth]);

    const selected = useMemo(() => {
      if (disabled || isEmpty(value)) {
        return false;
      }
      if (value?.[0]) {
        value?.[0]?.set('h',0);
      }
      if (value?.[1]) {
        value?.[1]?.set('h',0);
      }

      date.set('h',0);
      if (range) {
        const startDate = value?.[0];
        const endDate = value?.[1];

        return (
          date.isSame(startDate) ||
          date.isSame(endDate)
        );
      } else {
        return date.isSame(value?.[0]);
      }
    }, [mouth, date, value]);

    const selectedRange = useMemo(() => {
      if (disabled || !range) {
        return false;
      }
      const startDate = value?.[0];
      const endDate = value?.[1];
      if (!startDate || !endDate) {
        return false;
      }
      date.set('h',0);
      startDate.set('h',0);
      endDate.set('h',0);
      return (
        date.isAfter(startDate) &&
        date.isBefore(endDate)
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
        <div className={classNames(`${calendarCls}-cell-date`)}>
          {date.date()}
        </div>
        {date.date() === 1 && (
          <div
            className={classNames(`${calendarCls}-cell-mouth`)}
          >{`${date.month() + 1}月`}</div>
        )}
      </div>
    );
  },
);

export const CalendarGrid: FC<CalendarGridProps> = memo(
  forwardRef(
    (
      {
        mouth = dayjs(),
        value,
        defaultValue,
        range = false,
        onChange,
        onSelect,
      },
      ref: ForwardedRef<any>,
    ) => {
      const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? []);

      const handleSelect = (date: dayjs.Dayjs) => {
        date.set('h',0);
        let _value: dayjs.Dayjs[] = innerValue;
        if (range) {
          if (!_value[0]) {
            _value = [date];
          } else if (!_value[1]) {
            let startDate = _value[0];
            if (date.isBefore(startDate)) {
              _value = [date, startDate];
            } else {
              _value = [startDate, date];
            }
          } else if (_value[0] && _value[1]) {
            _value = [date];
          }
        } else {
          _value = [date];
        }
        setInnerValue(_value);
        onSelect?.(date);
        onChange?.(_value);
      };

      const cells = useMemo(() => {
        const firstDate = dayjs(new Date(mouth.year(), mouth.month(), 1));
        const lastDate = dayjs(new Date(mouth.year(), mouth.month() + 1, 0));
        const beforeDays = Array.from({ length: firstDate.day() }).map(
          (_, index): dayjs.Dayjs => {
            const date = dayjs(firstDate);
            date.set("date", firstDate.date() - (firstDate.day() - index));
            return date;
          },
        );

        const afterDays = Array.from({ length: 6 - lastDate.day() }).map(
          (_, index): dayjs.Dayjs => {
            const date = dayjs(lastDate);
            // date.setDate();
            date.set('date',lastDate.date() + index + 1)
            return date;
          },
        );
        const mouthDays = Array.from({ length: lastDate.date() }).map(
          (_, index): dayjs.Dayjs => {
            const date = dayjs(firstDate);
            date.set('date',date.date() + index);
            return date;
          },
        );
        return [...beforeDays, ...mouthDays, ...afterDays];
      }, [mouth]);

      useEffect(() => {
        if (value !== undefined) {
          if (value !== innerValue) {
            setInnerValue(value);
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
    },
  ),
);

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
import {isSame, toDayjsArray} from "../utils/dayjs";

const calendarCls = 'triones-antm-calendar';

export type CalendarGridProps = {
  month?: dayjs.Dayjs;
  /**
   * @description 值，如果是区间模式，则 0,1 索引的值有效，0是开始时间，1是结束时间
   */
  value?: (dayjs.Dayjs | Date)[];
  /**
   * @description 默认值，如果是区间模式，则 0,1 索引的值有效，0是开始时间，1是结束时间
   */
  defaultValue?: (dayjs.Dayjs | Date)[];
  onChange?: (value: dayjs.Dayjs[]) => void;
  /**
   * @description 是否为范围选择
   */
  range?: boolean;
  onSelect?: (date: dayjs.Dayjs) => void;
};

export type CalendarCellProps = {
  month?: dayjs.Dayjs;
  date?: dayjs.Dayjs;
  value?: dayjs.Dayjs[];
  range?: boolean;
  onSelect?: (date: dayjs.Dayjs) => void;
};

const CalendarCell: FC<CalendarCellProps> = memo(
  ({month = dayjs(), date = dayjs(), value, range, onSelect}) => {
    const disabled = useMemo(() => {
      return !isSame(date, month, 'month');
    }, [date, month]);

    const selected = useMemo(() => {

      if (disabled || isEmpty(value)) {
        return false;
      }
      if (range) {
        const startDate = value?.[0];
        const endDate = value?.[1];
        return (
          (isSame(date, startDate, 'date')) ||
          (isSame(date, endDate, 'date'))
        );
      } else {
        return isSame(date, value?.[0], 'date');
      }
    }, [month, date, value]);

    const selectedRange = useMemo(() => {
      if (disabled || !range) {
        return false;
      }
      const startDate = value?.[0];
      const endDate = value?.[1];
      if (!startDate || !endDate) {
        return false;
      }
      return (
        dayjs(date).isAfter(startDate, 'date') &&
        dayjs(date).isBefore(endDate, 'date')
      );
    }, [month, date, value]);

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
        month = dayjs(),
        value,
        defaultValue,
        range = false,
        onChange,
        onSelect,
      },
      ref: ForwardedRef<any>,
    ) => {
      const [innerValue, setInnerValue] = useState<dayjs.Dayjs[]>(toDayjsArray(value) ?? toDayjsArray(defaultValue) ?? []);

      const handleSelect = (date: dayjs.Dayjs) => {
        let _value: dayjs.Dayjs[] = innerValue;
        if (range) {
          if (!_value[0]) {
            _value = [date];
          } else if (!_value[1]) {
            let startDate = _value[0];
            if (dayjs(date).isBefore(startDate, 'date')) {
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
        const firstDate = dayjs(month).startOf('month');

        // 固定生成42天的日期网格（6行7列）
        const startDate = firstDate.subtract(firstDate.day(), 'day');
        const cells = Array.from({length: 42}, (_, index) => {
          return startDate.add(index, 'day');
        });

        return cells;
      }, [month]);

      useEffect(() => {
        if (value !== undefined) {
          if (range) {
            if (!isSame(value[0], innerValue[0], 'day') || !isSame(value[1], innerValue[1], 'day')) {
              setInnerValue(toDayjsArray(value) ?? []);
            }
          } else {
            if (!isSame(value[0], innerValue[0], 'day')) {
              setInnerValue(toDayjsArray(value) ?? []);
            }
          }
        }
      }, [value]);

      return (
        <div ref={ref} className={classNames(`${calendarCls}-grid`)}>
          {cells.map((item, index) => {
            return (
              <CalendarCell
                key={index}
                month={month}
                date={item}
                value={toDayjsArray(innerValue)}
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

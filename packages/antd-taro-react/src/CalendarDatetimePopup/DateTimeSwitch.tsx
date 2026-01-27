import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { DatetimeUtils } from '../utils/datetime-utils';
import './style.scss';
import { cls, Mode } from './types';

export interface DateTimeSwitchHandle {
  setDatetime: (datetime: Date) => void;
}

type DateTimeSwitchProps = {
  onDateTabTap?: () => void;
  onTimeTabTap?: () => void;
  mode?: Mode;
  value?: Date;
};

export const DateTimeSwitch = forwardRef<
  DateTimeSwitchHandle,
  DateTimeSwitchProps
>(({ onDateTabTap, onTimeTabTap, mode, value }, ref) => {
  const [datetime, setDatetime] = useState<Date | undefined>(value);

  useImperativeHandle(ref, () => ({
    setDatetime,
  }));

  return (
    <div className={classNames(`${cls}-header-display`)}>
      <div
        className={classNames(`${cls}-header-display-date`, {
          [`${cls}-header-display-active`]: mode === Mode.date,
        })}
        onClick={onDateTabTap}
      >
        {datetime
          ? `${datetime.getFullYear()}-${DatetimeUtils.twoDigits(datetime.getMonth() + 1)}-${DatetimeUtils.twoDigits(datetime.getDate())}`
          : ''}
      </div>
      <div
        className={classNames(`${cls}-header-display-time`, {
          [`${cls}-header-display-active`]: mode === Mode.time,
        })}
        onClick={onTimeTabTap}
      >
        {datetime ? `${DatetimeUtils.twoDigits(datetime.getHours()) }:${DatetimeUtils.twoDigits(datetime.getMinutes())}` : ''}
      </div>
    </div>
  );
});

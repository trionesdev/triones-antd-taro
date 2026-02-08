import classNames from 'classnames';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {DatetimeUtils} from '../utils/datetime-utils';
import './style.scss';
import {cls, Mode} from './types';
import dayjs from "dayjs";

export interface DateTimeSwitchHandle {
  setDatetime: (datetime: dayjs.Dayjs) => void;
}

type DateTimeSwitchProps = {
  onDateTabTap?: () => void;
  onTimeTabTap?: () => void;
  mode?: Mode;
  value?: dayjs.Dayjs;
};

export const DateTimeSwitch = forwardRef<
  DateTimeSwitchHandle,
  DateTimeSwitchProps
>(({onDateTabTap, onTimeTabTap, mode, value}, ref) => {
  const [datetime, setDatetime] = useState<dayjs.Dayjs | undefined>(value);

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
          ? `${datetime.year()}-${DatetimeUtils.twoDigits(datetime.month() + 1)}-${DatetimeUtils.twoDigits(datetime.date())}`
          : ''}
      </div>
      <div
        className={classNames(`${cls}-header-display-time`, {
          [`${cls}-header-display-active`]: mode === Mode.time,
        })}
        onClick={onTimeTabTap}
      >
        {datetime ? `${DatetimeUtils.twoDigits(datetime.hour())}:${DatetimeUtils.twoDigits(datetime.minute())}` : ''}
      </div>
    </div>
  );
});

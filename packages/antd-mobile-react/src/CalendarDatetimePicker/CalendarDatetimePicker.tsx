import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import Calendar from '../Calendar';
import ConfigProvider from '../ConfigProvider';
import PickerView from '../PickerView';
import Popup from '../Popup';
import { DatetimeUtils } from '../utils/datetime-utils';
import { DateTimeSwitch } from './DateTimeSwitch';
import './style.scss';
import { cls, Mode } from './types';
import dayjs from "dayjs";

export type CalendarDatetimePickerProps = {
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  value?: dayjs.Dayjs | Date;
  onOk?: (value?: dayjs.Dayjs) => void;
  onClose?: () => void;
};

export const CalendarDatetimePicker: FC<CalendarDatetimePickerProps> = ({
  open,
  afterOpenChange,
  value ,
  onOk,
  onClose,
}) => {
  const { locale } = ConfigProvider.useConfig();
  const [mode, setMode] = useState<Mode>(Mode.date);
  const valueRef = useRef<dayjs.Dayjs>(dayjs(value));
  const bodyRef = useRef<any>(null);
  const datetimeSwitchRef = useRef<any>();
  const [bodyHeight, setBodyHeight] = useState(300);

  const handleClose = () => {
    onClose?.();
  };

  const handleOk = () => {
    onOk?.(valueRef.current);
    handleClose();
  };

  const handleComputeBodyHeight = async (): Promise<number> => {
    return Promise.resolve(bodyRef.current!.offsetHeight);
  };

  useEffect(() => {
    if (open) {
      afterOpenChange?.(true);
    } else {
      afterOpenChange?.(false);
    }
  }, [open]);

  useEffect(() => {
    if (datetimeSwitchRef.current) {
      datetimeSwitchRef.current.setDatetime(valueRef.current);
    }
  }, []);

  const bodyRender = () => {
    return (
      <>
        {mode === Mode.date && (
          <div style={{}}>
            <Calendar
              month={value}
              value={value}
              onChange={(date) => {
                valueRef.current = dayjs(new Date(
                  date.year(),
                  date.month(),
                  date.date(),
                  valueRef.current.hour(),
                  valueRef.current.minute(),
                ));
                datetimeSwitchRef.current?.setDatetime(valueRef.current);
              }}
            />
          </div>
        )}
        {mode === Mode.time && (
          <div style={{ height: bodyHeight }}>
            <PickerView
              columns={[
                Array(24)
                  .fill(0)
                  .map((_, i) => {
                    return {
                      label: `${DatetimeUtils.twoDigits(i)}`,
                      value: `${i}`,
                    };
                  }),
                Array(60)
                  .fill(0)
                  .map((_, i) => {
                    return {
                      label: `${DatetimeUtils.twoDigits(i)}`,
                      value: `${i}`,
                    };
                  }),
              ]}
              labelInValue={false}
              value={[
                `${valueRef?.current.hour()}`,
                `${valueRef?.current.minute()}`,
              ]}
              onChange={(v) => {
                valueRef.current = dayjs(new Date(
                  valueRef.current.year(),
                  valueRef.current.month(),
                  valueRef.current.date(),
                  v[0],
                  v[1],
                ));
                datetimeSwitchRef.current?.setDatetime(valueRef.current);
              }}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <Popup open={open} onClose={onClose} round={true}>
      <div className={classNames(cls)}>
        <div className={`${cls}-header`}>
          <DateTimeSwitch
            ref={datetimeSwitchRef}
            mode={mode}
            value={valueRef.current}
            onDateTabTap={() => setMode(Mode.date)}
            onTimeTabTap={() => {
              handleComputeBodyHeight().then((height) => {
                setBodyHeight(height);
                setMode(Mode.time);
              });
            }}
          />
          <a
            className={classNames(
              `${cls}-header-button`,
              `${cls}-header-button-ok`,
            )}
            onClick={handleOk}
          >
            {locale.common.confirm}
          </a>
        </div>

        <div className={`${cls}-body`} ref={bodyRef} id={bodyRef.current?.uid}>
          {bodyRender()}
        </div>
      </div>
    </Popup>
  );
};

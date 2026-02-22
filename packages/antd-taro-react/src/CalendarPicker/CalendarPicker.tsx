import classNames from 'classnames';
import React, {FC, memo, useEffect, useRef} from 'react';
import Calendar from '../Calendar';
import ConfigProvider from '../ConfigProvider';
import Popup from '../Popup';
import './style.scss';
import {CalendarPickerProps, cls} from './types';
import dayjs from "dayjs";
import {isSame} from "../utils/dayjs";

export const CalendarPicker: FC<CalendarPickerProps> = memo(
  ({month, open, title, afterOpenChange, value = dayjs(), onOk, onCancel, onClose}) => {
    const {locale} = ConfigProvider.useConfig();
    const [innerOpen, setInnerOpen] = React.useState(open || false);
    const valueRef = useRef<any>();

    const handleClose = () => {
      setInnerOpen(false);
      onClose?.();
    };
    const handleOk = () => {
      onOk?.(valueRef.current);
      handleClose();
    };

    const handelCancel = () => {
      onCancel?.();
      handleClose();
    };

    useEffect(() => {
      afterOpenChange?.(innerOpen);
    }, [innerOpen]);

    useEffect(() => {
      if (value !== undefined) {
        if (!isSame(value, valueRef.current, 'day')) {
          valueRef.current = value;
        }
      }
    }, [value]);

    useEffect(() => {
      if (open === undefined) {
        return;
      }
      if (open === innerOpen) {
        return;
      }
      setInnerOpen(open);
    }, [open]);

    return (
      <Popup
        open={innerOpen}
        round={true}
        onClose={() => {
          setInnerOpen(false);
          onClose?.();
        }}
      >
        <div className={classNames(`${cls}`)}>
          <div className={classNames(`${cls}-header`)}>
            <a
              className={classNames(
                `${cls}-header-button`,
                `${cls}-header-button-cancel`,
              )}
              onClick={handelCancel}
            >
              {locale.common.cancel}
            </a>
            {title && (
              <div className={classNames(`${cls}-header-title`)}>{title}</div>
            )}
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
          <div className={classNames(`${cls}-body`)}>
            <Calendar
              month={month}
              value={value}
              onChange={(date) => {
                valueRef.current = date;
              }}
            />
          </div>
        </div>
      </Popup>
    );
  },
);

import classNames from 'classnames';
import React, { FC, memo, useEffect, useRef } from 'react';
import Calendar from '../Calendar';
import ConfigProvider from '../ConfigProvider';
import Popup from '../Popup';
import './style.scss';
import { CalendarPickerProps } from './types';

const cls = 'triones-antm-calendar-picker';

export const CalendarPicker: FC<CalendarPickerProps> = memo(
  ({ mouth, open, title, afterOpenChange, value, onOk, onCancel, onClose }) => {
    const { locale } = ConfigProvider.useConfig();
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
        if (value !== valueRef.current) {
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
                `${cls}-header-cancel`,
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
              mouth={mouth}
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

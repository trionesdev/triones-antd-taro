import React, {FC, memo, useEffect, useRef} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import Calendar from "../Calendar";
import "./style.scss"
import {CalendarPickerRangeProps} from "./types";
import ConfigProvider from "../ConfigProvider";

const cls = 'triones-antm-calendar-picker';

export const CalendarRangePicker: FC<CalendarPickerRangeProps> = memo(
  ({
     mouth,
     open,
     title,
     afterOpenChange,
     value,
     onOk,
     onCancel,
     onClose
   }) => {
    const {locale} = ConfigProvider.useConfig();
    const [innerOpen, setInnerOpen] = React.useState(open || false);
    const valueRef = useRef<any>();

    const handleClose = () => {
      setInnerOpen(false)
      onClose?.()
    }
    const handleOk = () => {
      onOk?.(valueRef.current)
      handleClose()
    }

    const handelCancel = () => {
      onCancel?.()
      handleClose()
    }

    useEffect(() => {
      afterOpenChange?.(innerOpen)
    }, [innerOpen]);

    useEffect(() => {
      if (value !== undefined) {
        if (value !== valueRef.current) {
          valueRef.current = value
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
      setInnerOpen(open)
    }, [open]);

    return <Popup
      open={innerOpen}
      onClose={() => {
        setInnerOpen(false);
        onClose?.();
      }}
    >
      <div className={classNames(`${cls}`)}>
        <div className={classNames(`${cls}-header`)}>
          <a className={classNames(`${cls}-header-button`)} onClick={handelCancel}>{locale.common.cancel}</a>
          {title && <div className={classNames(`${cls}-header-title`)}>{title}</div>}
          <a className={classNames(`${cls}-header-button`)} onClick={handleOk}>{locale.common.confirm}</a>
        </div>
        <div className={classNames(`${cls}-body`)}>
          <Calendar.Range mouth={mouth} value={value} onChange={(date) => {
            valueRef.current = date;
          }}/>
        </div>
      </div>
    </Popup>
  }
)

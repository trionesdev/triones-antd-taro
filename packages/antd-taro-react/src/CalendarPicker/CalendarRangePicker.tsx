import React, {FC, memo, useEffect, useRef} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import Calendar from "../Calendar";
import "./style.scss"
import {CalendarPickerRangeProps, cls} from "./types";
import ConfigProvider from "../ConfigProvider";
import dayjs from "dayjs";
import {isSameArray} from "../utils/dayjs";

export const CalendarRangePicker: FC<CalendarPickerRangeProps> = memo(
  ({
     month,
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
    const valueRef = useRef<dayjs.Dayjs[] | undefined>();

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
        if (!isSameArray(value, valueRef.current, 'day')) {
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
      round={true}
      onClose={() => {
        setInnerOpen(false);
        onClose?.();
      }}
    >
      <div className={classNames(`${cls}`)}>
        <div className={classNames(`${cls}-header`)}>
          <a className={classNames(`${cls}-header-button`, `${cls}-header-button-cancel`)}
             onClick={handelCancel}>{locale.common.cancel}</a>
          {title && <div className={classNames(`${cls}-header-title`)}>{title}</div>}
          <a className={classNames(`${cls}-header-button`, `${cls}-header-button-ok`)}
             onClick={handleOk}>{locale.common.confirm}</a>
        </div>
        <div className={classNames(`${cls}-body`)}>
          <Calendar.Range month={month} value={value} onChange={(date) => {
            valueRef.current = date;
          }}/>
        </div>
      </div>
    </Popup>
  }
)

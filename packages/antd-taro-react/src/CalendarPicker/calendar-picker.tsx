import React, {FC, memo, useEffect, useState} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import Calendar from "../Calendar";
import "./style.scss"


const cls = 'triones-antm-calendar-picker';

type CalendarPickerProps = {
  mouth?: Date;
  open?: boolean
  title?: React.ReactNode
  afterOpenChange?: (open: boolean) => void;
  value?: any,
  onOk?: (value?: any) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export const CalendarPicker: FC<CalendarPickerProps> = memo(
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
    const [innerOpen, setInnerOpen] = React.useState(open || false);
    const [internalValue, setInternalValue] = useState(value)

    const handleClose = () => {
      setInnerOpen(false)
      onClose?.()
    }
    const handleOk = () => {
      onOk?.(internalValue)
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
      if (open === undefined) {
        return;
      }
      if (open === innerOpen) {
        return;
      }
      setInnerOpen(open)
    }, [open]);

    return <Popup open={innerOpen} afterOpenChange={(o) => {
      setInnerOpen(o);
    }}>
      <div className={classNames(`${cls}`)}>
        <div className={classNames(`${cls}-header`)}>
          <a className={classNames(`${cls}-header-button`)} onClick={handelCancel}>取消</a>
          {title && <div className={classNames(`${cls}-header-title`)}>{title}</div>}
          <a className={classNames(`${cls}-header-button`)} onClick={handleOk}>确定</a>
        </div>
        <div className={classNames(`${cls}-body`)}>
          <Calendar mouth={mouth} onChange={(date) => setInternalValue(date)} />
        </div>
      </div>
    </Popup>
  }
)

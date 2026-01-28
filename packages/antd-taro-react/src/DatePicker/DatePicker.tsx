import React, {FC, useEffect, useMemo, useState} from "react"
import classNames from "classnames";
import {cls} from "../CalendarDatetimePicker/types";
import dayjs from "dayjs";
import DatePickerPopup from "./DatePickerPopup";
import {Mode} from "./types";

export type DatePickerPops = {
  placeholder?: string;
  value?: dayjs.Dayjs;
  format?: string;
  onChange?: (value?: dayjs.Dayjs) => void;
  align?: 'left' | 'right' | 'center';
  mode?: Mode
  showTime?: boolean
}

export const DatePicker: FC<DatePickerPops> = ({
                                                 placeholder,
                                                 value,
                                                 format,
                                                 onChange,
                                                 align = 'left',
                                                 mode = 'date',
                                                 showTime = false
                                               }) => {

  const [innerOpen, setInnerOpen] = React.useState(false);
  const [internalValue, setInternalValue] = useState<dayjs.Dayjs | undefined>(value)
  const renderFormat = useMemo(() => {
    if (format) {
      return format;
    }
    if (mode === 'date') {
      return showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
    } else if (mode === 'time') {
      return 'HH:mm:ss'
    }
    return 'YYYY-MM-DD'
  }, [mode, format, showTime])

  const handleValueRender = () => {
    if (internalValue) {
      return dayjs(internalValue).format(renderFormat)
    }
    return null;
  }

  useEffect(() => {
    if (value === undefined) {
      return
    }
    if (value !== internalValue) {
      setInternalValue(value)
    }
  }, [value])

  return <>
    <DatePickerPopup
      open={innerOpen}
      onClose={() => {
        setInnerOpen(false)
      }}
      mode={mode}
      format={format}
      showTime={showTime}
      value={internalValue}
      onOk={(value) => {
        setInternalValue(value)
        onChange?.(value)
      }}/>
    <div className={classNames(cls, {[`${cls}-${align}`]: true})} onClick={() => {
      setInnerOpen(true)
    }}>
      {!internalValue ? <div className={`${cls}-placeholder`}>{placeholder}</div> :
        <div>{handleValueRender()}</div>}
    </div>
  </>
}

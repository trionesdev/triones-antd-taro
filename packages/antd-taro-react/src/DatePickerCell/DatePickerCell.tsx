import React, {FC, useEffect, useMemo, useState} from "react"
import dayjs from "dayjs";
import DatePicker from "../DatePicker";
import {Mode} from "../DatePicker/types";
import Cell, {CellProps} from "../Cell";

export type DatePickerCellPops = Omit<CellProps, 'value'> & {
  value?: dayjs.Dayjs;
  format?: string;
  onChange?: (value?: dayjs.Dayjs) => void;
  mode?: Mode
  showTime?: boolean
  minDate?: dayjs.Dayjs,
  maxDate?: dayjs.Dayjs
}

export const DatePickerCell: FC<DatePickerCellPops> = ({
                                                     value,
                                                     format,
                                                     onChange,
                                                     mode = 'date',
                                                     showTime = false,
                                                     minDate,
                                                     maxDate,
                                                     ...rest
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
    <DatePicker
      open={innerOpen}
      onClose={() => {
        setInnerOpen(false)
      }}
      mode={mode}
      format={format}
      showTime={showTime}
      minDate={minDate}
      maxDate={maxDate}
      value={internalValue}
      onOk={(value) => {
        setInternalValue(value)
        onChange?.(value)
      }}/>
    <Cell onClick={() => {
      setInnerOpen(true)
    }} {...rest}>{handleValueRender()}</Cell>
  </>
}

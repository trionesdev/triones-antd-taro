import React, {useEffect, useState} from "react";
import {FC} from "react";
import dayjs from "dayjs";
import FormCell, {FormCellProps} from "../FormCell";
import CalendarPicker from "../CalendarPicker";
import {isSame} from "../utils/dayjs";

export type  CalendarPickerCellProps = Omit<FormCellProps, 'value'> & {
  month?: dayjs.Dayjs;
  title?: React.ReactNode
  value?: dayjs.Dayjs;
  onChange?: (date?: dayjs.Dayjs) => void;
}
export const CalendarPickerCell: FC<CalendarPickerCellProps> = ({
                                                                  month,
                                                                  title,
                                                                  value,
                                                                  onChange,
                                                                  ...rest
                                                                }) => {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const [internalValue, setInternalValue] = useState<dayjs.Dayjs | undefined>(value ? dayjs(value) : undefined)

  const handleValueRender = () => {
    if (internalValue) {
      return internalValue.format('YYYY-MM-DD')
    }
    return null
  }

  useEffect(() => {
    if (value == undefined) {
      return
    }
    if (!isSame(value, internalValue, 'day')) {
      setInternalValue(dayjs(value))
    }
  }, [value]);

  return <>
    <CalendarPicker month={month ?? internalValue} value={internalValue} open={innerOpen}
                    afterOpenChange={(o) => {
                      setInnerOpen(o)
                    }}
                    onClose={() => {
                      setInnerOpen(false)
                    }}
                    onOk={(date) => {
                      setInternalValue(date)
                      onChange?.(date)
                    }}
    />
    <FormCell  {...rest} onClick={() => {
      setInnerOpen(true)
    }}>{handleValueRender()}</FormCell>
  </>
}

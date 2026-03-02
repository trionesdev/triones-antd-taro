import React, {useState} from "react";
import {FC} from "react";
import dayjs from "dayjs";
import Cell, {CellProps} from "../Cell";
import CalendarPicker from "../CalendarPicker";

export type  CalendarPickerCellProps = Omit<CellProps, 'value'> & {
  month?: dayjs.Dayjs | Date;
  title?: React.ReactNode
  value?: dayjs.Dayjs | Date;
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

  return <>
    <CalendarPicker month={month} value={internalValue} open={innerOpen}
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
    <Cell onClick={() => {
      setInnerOpen(true)
    }} {...rest}>{handleValueRender()}</Cell>
  </>
}

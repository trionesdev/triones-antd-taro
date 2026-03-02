import React, {useState} from "react";
import {FC} from "react";
import dayjs from "dayjs";
import Cell, {CellProps} from "../Cell";
import CalendarPicker from "../CalendarPicker";
import {toDayjsArray} from "../utils/dayjs";

export type  CalendarRangePickerCellProps = Omit<CellProps, 'value'> & {
  month?: dayjs.Dayjs;
  title?: React.ReactNode
  value?: (dayjs.Dayjs | Date)[];
  onChange?: (date?: (dayjs.Dayjs | Date)[]) => void;
}
export const CalendarRangePickerCell: FC<CalendarRangePickerCellProps> = ({
                                                                  month,
                                                                  title,
                                                                  value,
                                                                  onChange,
                                                                  ...rest
                                                                }) => {

  const [innerOpen, setInnerOpen] = React.useState(false);
  const [internalValue, setInternalValue] = useState<dayjs.Dayjs[] | undefined>(toDayjsArray(value))

  const handleValueRender = () => {
    if (internalValue && internalValue.length > 1) {
      return internalValue.map(date => date.format('YYYY-MM-DD')).join(' ~ ')
    }
    return null
  }

  return <>
    <CalendarPicker.Range month={month} value={internalValue} open={innerOpen}
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

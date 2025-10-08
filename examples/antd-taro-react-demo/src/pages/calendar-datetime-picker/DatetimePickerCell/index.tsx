import { CalendarDatetimePicker, Cell } from "@trionesdev/antd-taro-react";
import { FC, useEffect, useState } from "react";

type DatetimePickerCellProps = {
  value?: Date
  onChange?: (value?: Date) => void
}

export const DatetimePickerCell: FC<DatetimePickerCellProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | undefined>(value)

  const handleEqual = (a?: Date, b?: Date) => {
    return a?.getFullYear() === b?.getFullYear() && a?.getMonth() === b?.getMonth() && a?.getDate() === b?.getDate() && a?.getHours() === b?.getHours() && a?.getMinutes() === b?.getMinutes();
  }

  useEffect(() => {
    if (value === undefined) {
      return
    }
    if (handleEqual(value, internalValue)) {
      return;
    }
    setInternalValue(value)
  }, [value])

  return <>
    <CalendarDatetimePicker open={open} onOk={(date) => {
      console.log(date)
      setInternalValue(date)
      onChange?.(date)
    }} afterOpenChange={(o) => {
      setOpen(o);
    }} />
    <Cell style={{ backgroundColor: 'white',minHeight:32 }} placeholder="请选择时间" onClick={() => {
      setOpen(true);
    }} >
      {internalValue && <div style={{ fontSize: 16, minHeight: 40, lineHeight: '40Px' }}>
        {`${internalValue!.getFullYear()}-${internalValue!.getMonth()  +1}-${internalValue!.getDate()} ${internalValue!.getHours()}:${internalValue!.getMinutes()}`}
      </div>}
    </Cell>
  </>
}

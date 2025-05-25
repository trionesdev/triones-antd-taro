import React, {FC, memo, useState} from "react"
import classNames from "classnames";
import "./style.scss"
import {TouchableCalendarGrid} from "./touchable-calendar-grid";
import {CalendarHeader} from "./calendar-header";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  mouth?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
}

export const Calendar: FC<CalendarProps> = memo(({mouth = new Date(), value, onChange}) => {
  const [currentMouth, setCurrentMouth] = useState(mouth)

  return <div className={classNames(`${calendarCls}`)}>
    <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth}/>
    <TouchableCalendarGrid mouth={currentMouth}
                           value={value ? [value] : []}
                           onMouthChange={setCurrentMouth}
                           onChange={(value) => {
                             onChange?.(value?.[0])
                           }}
    />
  </div>
})

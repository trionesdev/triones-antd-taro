import React, {FC, memo, useEffect, useRef, useState} from "react"
import classNames from "classnames";
import "./style.scss"
import {TouchableCalendarGrid} from "./touchable-calendar-grid";
import {CalendarHeader} from "./calendar-header";
import _ from "lodash";

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  mouth?: Date;
  value?: Date[];
  onChange?: (date: Date[]) => void;
}

export const CalendarRange: FC<CalendarProps> = memo(({mouth = new Date(), value, onChange}) => {
  const [currentMouth, setCurrentMouth] = useState(mouth)
  const valueRef = useRef<any>()

  useEffect(() => {
    if (value !== undefined) {
      if (!_.isEqual(value, valueRef.current)) {
        valueRef.current = value
      }
    }
  }, [value]);

  return <div className={classNames(`${calendarCls}`)}>
    <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth}/>
    <TouchableCalendarGrid mouth={currentMouth}
                           value={value ?? valueRef.current ?? []}
                           onMouthChange={setCurrentMouth}
                           onChange={(value) => {
                             valueRef.current = value
                             onChange?.(value)
                           }}
                           range={true}
    />
  </div>
})

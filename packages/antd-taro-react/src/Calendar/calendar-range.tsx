import React, {FC, memo, useState} from "react"
import classNames from "classnames";
import "./style.scss"
import {TouchableCalendarGrid} from "./touchable-calendar-grid";

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  mouth?: Date;
  value?: Date[];
  onChange?: (date: Date[]) => void;
}

export const CalendarRange: FC<CalendarProps> = memo(({mouth = new Date(), value, onChange}) => {
  const [currentMouth, setCurrentMouth] = useState(mouth)
  return <div className={classNames(`${calendarCls}`)}>
    <div className={classNames(`${calendarCls}-header`)}>
      <div
        className={classNames(`${calendarCls}-header-title`)}>{`${currentMouth.getFullYear()}年${currentMouth.getMonth() + 1}月`}</div>
    </div>
    <div
      className={classNames(`${calendarCls}-week`)}>{[`日`, `一`, `二`, `三`, `四`, `五`, `六`].map((item, index) => {
      return <div className={classNames(`${calendarCls}-week-cell`)} key={index}>{item}</div>
    })}</div>
    <TouchableCalendarGrid mouth={mouth}
                           value={value ?? []}
                           onMouthChange={setCurrentMouth}
                           onChange={(value) => {
                             onChange?.(value)
                           }}
                           range={true}
    />
  </div>
})

import React, {FC} from "react";
import classNames from "classnames";
import ConfigProvider from "../ConfigProvider";
import dayjs from "dayjs";

const calendarCls = 'triones-antm-calendar';
type CalendarHeaderProps = {
  month: dayjs.Dayjs;
  onChange: (mouth: dayjs.Dayjs) => void;
}
export const CalendarHeader: FC<CalendarHeaderProps> = ({month, onChange}) => {
  const {locale} = ConfigProvider.useConfig();
  if (!month) {
    return null
  }
  return (<>
    <div className={classNames(`${calendarCls}-header`)}>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(month.year() - 1, month.month(), 1)))
      }}>{`<<`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(month.year(), month.month() - 1, 1)))
      }}>{`<`}</div>
      <div
        className={classNames(`${calendarCls}-header-title`)}>{`${month.year()}年${month.month() + 1}月`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(month.year(), month.month() + 1, 1)))
      }}>{`>`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(month.year() + 1, month.month(), 1)))
      }}>{`>>`}</div>
    </div>
    <div
      className={classNames(`${calendarCls}-week`)}>{[`日`, `一`, `二`, `三`, `四`, `五`, `六`].map((item, index) => {
      return <div className={classNames(`${calendarCls}-week-cell`)} key={index}>{item}</div>
    })}</div>
  </>)
}

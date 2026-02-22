import React from "react";
import {FC} from "react";
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
  return (<>
    <div className={classNames(`${calendarCls}-header`)}>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(month.subtract(1, 'year'))
      }}>{`<<`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(month.subtract(1, 'month'))
      }}>{`<`}</div>
      <div
        className={classNames(`${calendarCls}-header-title`)}>{`${month.year()}年${month.month() + 1}月`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(month.add(1, 'month'))
      }}>{`>`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(month.add(1, 'year'))
      }}>{`>>`}</div>
    </div>
    <div
      className={classNames(`${calendarCls}-week`)}>{[`日`, `一`, `二`, `三`, `四`, `五`, `六`].map((item, index) => {
      return <div className={classNames(`${calendarCls}-week-cell`)} key={index}>{item}</div>
    })}</div>
  </>)
}

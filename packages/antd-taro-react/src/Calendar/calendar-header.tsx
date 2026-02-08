import React,{FC} from "react";
import classNames from "classnames";
import ConfigProvider from "../ConfigProvider";
import dayjs from "dayjs";

const calendarCls = 'triones-antm-calendar';
type CalendarHeaderProps={
  mouth: dayjs.Dayjs;
  onChange:(mouth:dayjs.Dayjs)=>void;
}
export const CalendarHeader:FC<CalendarHeaderProps> = ({mouth,onChange}) => {
  const { locale } = ConfigProvider.useConfig();
  return (<>
    <div className={classNames(`${calendarCls}-header`)}>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(mouth.year() - 1, mouth.month(), 1)))
      }}>{`<<`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(mouth.year(), mouth.month() - 1, 1)))
      }}>{`<`}</div>
      <div
        className={classNames(`${calendarCls}-header-title`)}>{`${mouth.year()}年${mouth.month() + 1}月`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(mouth.year(), mouth.month() + 1, 1)))
      }}>{`>`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(dayjs(new Date(mouth.year() + 1, mouth.month(), 1)))
      }}>{`>>`}</div>
    </div>
    <div
      className={classNames(`${calendarCls}-week`)}>{[`日`, `一`, `二`, `三`, `四`, `五`, `六`].map((item, index) => {
      return <div className={classNames(`${calendarCls}-week-cell`)} key={index}>{item}</div>
    })}</div>
  </>)
}

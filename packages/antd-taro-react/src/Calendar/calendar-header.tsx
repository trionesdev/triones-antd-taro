import React,{FC} from "react";
import classNames from "classnames";
import ConfigProvider from "../ConfigProvider";

const calendarCls = 'triones-antm-calendar';
type CalendarHeaderProps={
  mouth: Date;
  onChange:(mouth:Date)=>void;
}
export const CalendarHeader:FC<CalendarHeaderProps> = ({mouth,onChange}) => {
  const { locale } = ConfigProvider.useConfig();
  return (<>
    <div className={classNames(`${calendarCls}-header`)}>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(new Date(mouth.getFullYear() - 1, mouth.getMonth(), 1))
      }}>{`<<`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(new Date(mouth.getFullYear(), mouth.getMonth() - 1, 1))
      }}>{`<`}</div>
      <div
        className={classNames(`${calendarCls}-header-title`)}>{`${mouth.getFullYear()}年${mouth.getMonth() + 1}月`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(new Date(mouth.getFullYear(), mouth.getMonth() + 1, 1))
      }}>{`>`}</div>
      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {
        onChange(new Date(mouth.getFullYear() + 1, mouth.getMonth(), 1))
      }}>{`>>`}</div>
    </div>
    <div
      className={classNames(`${calendarCls}-week`)}>{[`日`, `一`, `二`, `三`, `四`, `五`, `六`].map((item, index) => {
      return <div className={classNames(`${calendarCls}-week-cell`)} key={index}>{item}</div>
    })}</div>
  </>)
}

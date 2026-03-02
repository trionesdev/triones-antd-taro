import React from 'react';
import {DemoBlock} from '../../DemoBlock';
import Button from "../../Button";
import CalendarPopup from "../index";
import Toast from "../../Toast";
import CalendarPickerCell from "../index";

export default () => {
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <DemoBlock title={`日历选择`}>
        <CalendarPickerCell label={`选谁日期`} wrapperAlign="right" placeholder="请选择日期"/>
      </DemoBlock>
      <DemoBlock title={`日历选择(区间)`}>
        <CalendarPickerCell.Range label={`选谁日期区间`} wrapperAlign="right" placeholder="请选择日期"/>
      </DemoBlock>
    </div>
  );
};

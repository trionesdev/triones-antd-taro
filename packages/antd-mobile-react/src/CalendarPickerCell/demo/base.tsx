import React from 'react';
import {DemoBlock} from '../../DemoBlock';
import CalendarPickerCell from "../index";

export default () => {
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <DemoBlock title={`日历选择`}>
        <CalendarPickerCell  align="end" placeholder="请选择日期"/>
      </DemoBlock>
      <DemoBlock title={`日历选择(区间)`}>
        <CalendarPickerCell.Range  align="end" placeholder="请选择日期"/>
      </DemoBlock>
    </div>
  );
};

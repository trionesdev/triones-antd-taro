import React from 'react';
import {DemoBlock} from '../../DemoBlock';
import Button from "../../Button";
import {CalendarPicker} from "../calendar-picker";

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <DemoBlock title={`日历选择器`}>
      <CalendarPicker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>
        日历选择器
      </Button>
    </DemoBlock>
  );
};

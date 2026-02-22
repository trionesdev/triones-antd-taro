import React from 'react';
import {DemoBlock} from '../../DemoBlock';
import Button from "../../Button";
import CalendarPopup from "../index";
import Toast from "../../Toast";

export default () => {
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <div ref={toastContainer}/>
      <DemoBlock title={`日期选择器`}>
        <CalendarPopup open={open} afterOpenChange={(o) => {
          setOpen(o);
        }} onOk={(date) => {
          Toast.show({
            getContainer: () => toastContainer.current,
            content: `${date!.year()}-${date!.month()  +1}-${date!.date()}`,
          })
        }}/>
        <Button block={true} onClick={() => {
          setOpen(true);
        }}>
          日历选择器
        </Button>
      </DemoBlock>
      <DemoBlock title={`日历选择器(区间)`}>
        <CalendarPopup.Range open={open2} afterOpenChange={(o) => {
          setOpen2(o);
        }} onOk={(date) => {
          Toast.show({
            getContainer: () => toastContainer.current,
            content: <div>
              <div>{`${date![0].year()}-${date![0].month() ?? +1}-${date![0].date()}`}</div>
              <div>{`${date![1].year()}-${date![1].month() ?? +1}-${date![1].date()}`}</div>
            </div>,
          })
        }}/>
        <Button block={true} onClick={() => {
          setOpen2(true);
        }}>
          日历选择器(区间)
        </Button>
      </DemoBlock>
    </div>
  );
};

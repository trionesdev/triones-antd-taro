import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import { CalendarDatetimePicker } from '../CalendarDatetimePicker';
import Button from '../../Button';
import Toast from "../../Toast";

export default ()=>{
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  return <div>
    <div ref={toastContainer}/>
    <DemoBlock title={`日期时间选择器`}>
      <CalendarDatetimePicker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} onOk={(date) => {
        Toast.show({
          getContainer: () => toastContainer.current,
          content: `${date!.getFullYear()}-${date!.getMonth()  +1}-${date!.getDate()} ${date!.getHours()}:${date!.getMinutes()}`,
        })
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>日期时间选择器</Button>
    </DemoBlock>
  </div>
}

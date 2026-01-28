import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import { CalendarDatetimePicker } from '../CalendarDatetimePicker';
import {Cell} from "@trionesdev/antd-mobile-base-react";

export default ()=>{
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  return <div>
    <div ref={toastContainer}/>
    <DemoBlock title={`日期时间选择器`}>
      <Cell label={'Label'} wrapperAlign={`right`}>
        <CalendarDatetimePicker/>
      </Cell>
    </DemoBlock>
  </div>
}

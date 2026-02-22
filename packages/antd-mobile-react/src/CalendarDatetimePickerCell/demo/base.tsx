import React from 'react';
import {DemoBlock} from '../../DemoBlock';
import {CalendarDatetimePickerCell} from '../CalendarDatetimePickerCell';

export default ()=>{
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  return <div>
    <div ref={toastContainer}/>
    <DemoBlock title={`日期时间选择器`}>
      <CalendarDatetimePickerCell label={'日期时间'} wrapperAlign={`right`}/>
    </DemoBlock>
  </div>
}

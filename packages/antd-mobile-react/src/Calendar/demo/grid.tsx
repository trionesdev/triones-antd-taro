import React from 'react';
import {CalendarGrid} from '../calendar-grid';
import {DemoBlock} from '../../DemoBlock';

export default ()=>{

  return <>
    <DemoBlock title="日历网格">
      <CalendarGrid/>
    </DemoBlock>
    <DemoBlock title="日历网格(区间选择)">
      <CalendarGrid range={true} />
    </DemoBlock>
  </>
}

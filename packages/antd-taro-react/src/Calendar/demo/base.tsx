import React, { useState } from 'react';
import { Calendar } from '../calendar';
import { DemoBlock } from '../../DemoBlock';

export default ()=>{

  const [selectedDate,setSelectedDate] = useState<Date>()
  const [selectedDateStart,setSelectedDateStart] = useState<Date>()
  const [selectedDateEnd,setSelectedDateEnd] = useState<Date>()

  return <>
    <DemoBlock title="基础用法">
      <Calendar/>
    </DemoBlock>
    <DemoBlock title="选择">
      <Calendar selectedStart={selectedDate} selectedEnd={selectedDate} onSelect={(date)=>{
        setSelectedDate(date)
      }} />
    </DemoBlock>
    <DemoBlock title="选择区间">
      <Calendar selectedStart={selectedDateStart} selectedEnd={selectedDateEnd} onSelect={(date)=>{
        debugger
        if (!selectedDateStart ){
          setSelectedDateStart(date)
        }else if (!selectedDateEnd){
          setSelectedDateEnd(date)
        }else if (selectedDateStart && selectedDateEnd){
          setSelectedDateStart(date)
          setSelectedDateEnd(undefined)
        }
      }} />
    </DemoBlock>
  </>
}

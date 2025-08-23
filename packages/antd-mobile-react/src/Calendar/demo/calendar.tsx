import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Calendar from "../index";

export default ()=>{
  return <div>
    <DemoBlock title={`基本使用`}>
      <Calendar/>
    </DemoBlock>
    <DemoBlock title={`基本使用（区间范围）`}>
      <Calendar.Range/>
    </DemoBlock>
  </div>
}

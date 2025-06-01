import React from "react";
import InputNumber from "../index";
import {DemoBlock} from "../../DemoBlock";

export default ()=>{
  return <div>
    <DemoBlock title={`基本使用`}>
      <InputNumber/>
    </DemoBlock>
    <DemoBlock title={`最大值最小值`}>
      <InputNumber min={0} max={10}/>
    </DemoBlock>
  </div>
}

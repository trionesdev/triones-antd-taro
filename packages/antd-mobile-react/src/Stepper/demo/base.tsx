import React from "react";
import Stepper from "../index";
import {DemoBlock} from "../../DemoBlock";

export default ()=>{
  return <div>
    <DemoBlock title={`基本使用`}>
      <Stepper/>
    </DemoBlock>
    <DemoBlock title={`最大值最小值`}>
      <Stepper min={0} max={10}/>
    </DemoBlock>
    <DemoBlock title={`基本使用`}>
      <Stepper  max={10} />
    </DemoBlock>
    <DemoBlock title={`占满`}>
      <Stepper block={true} min={0} max={10}/>
    </DemoBlock>
  </div>
}

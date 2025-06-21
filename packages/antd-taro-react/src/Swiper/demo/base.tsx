import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Swiper from "../index";

export default ()=>{
  return <>
    <DemoBlock title={`基本使用`}>
      <Swiper items={["s","d"]}/>
    </DemoBlock>
  </>
}

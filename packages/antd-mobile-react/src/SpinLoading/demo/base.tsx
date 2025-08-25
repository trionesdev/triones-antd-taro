import React from "react"
import {DemoBlock} from "../../DemoBlock";
import SpinLoading from "../index";
import Space from "../../Space";

export default () => {
  return <>
    <DemoBlock title={`基础使用`}>
      <SpinLoading/>
    </DemoBlock>
    <DemoBlock title={`颜色`}>
      <Space>
        <SpinLoading/>
        <SpinLoading color={`primary`}/>
        <SpinLoading color={`white`}/>
      </Space>
    </DemoBlock>

    <DemoBlock title={`大小`}>
      <Space>
        <SpinLoading size={`small`}/>
        <SpinLoading/>
        <SpinLoading size={`large`}/>
      </Space>
    </DemoBlock>
  </>
}

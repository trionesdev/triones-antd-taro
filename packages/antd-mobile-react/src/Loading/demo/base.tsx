import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Space from "../../Space";
import {SpinLoading} from "../../index";

export default () => {
  return <>
    <DemoBlock title={`基础使用`}>
      <SpinLoading/>
    </DemoBlock>
    <DemoBlock title={`颜色`}>
      <Space>
        <SpinLoading/>
        <SpinLoading color={`primary`}/>
        <div style={{backgroundColor: `#333`}}>
          <SpinLoading color={`white`}/>
        </div>
        <SpinLoading color={`red`}/>
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

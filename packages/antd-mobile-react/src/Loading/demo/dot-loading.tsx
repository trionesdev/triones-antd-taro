import {DemoBlock} from "../../DemoBlock";
import React from "react";
import {DotLoading} from "../../index";

export default () => {
  return <>
    <DemoBlock title={`基础使用`}>
      <DotLoading/>
    </DemoBlock>
    <DemoBlock title={`基础使用`}>
      <DotLoading color={`primary`}/>
    </DemoBlock>
    <DemoBlock title={`基础使用`}>
      <div style={{backgroundColor: '#0000004a', padding: '10px'}}>
        <DotLoading color={`white`} />
      </div>
    </DemoBlock>
    <DemoBlock title={`基础使用`}>
      <DotLoading color={`red`}/>
    </DemoBlock>
  </>
}

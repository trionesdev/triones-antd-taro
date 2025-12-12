import React from "react";
import {DemoBlock} from "../../DemoBlock";
import {Steps} from "@trionesdev/antd-mobile-react";

export default () => {
  return <>
    <DemoBlock title={`基础用法(不拉伸)`}>
      <Steps stretch={false} items={[{title: '步骤1'}, {title: '步骤2', description: '描述信息'}, {title: '步骤3'}]}/>
    </DemoBlock>
    <DemoBlock title={`基础用法(不拉伸)`}>
      <Steps items={[{title: '步骤1'}, {title: '步骤2', description: '描述信息'}, {title: '步骤3'}]}/>
    </DemoBlock>
    <DemoBlock title={`纵向步骤条`}>
      <Steps direction='vertical' items={[{title: '步骤1'}, {title: '步骤2', description: '描述信息'}, {
        title: '步骤3',
        description: '描述信息时候红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈'
      }, {title: '步骤4还是啥还是事实上事实上少时诵诗书少时诵诗书洒洒'}]}/>
    </DemoBlock>
  </>;
};

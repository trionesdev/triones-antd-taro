import React from "react"
import {DemoBlock} from '../../DemoBlock';
import { Progress, Space } from "@trionesdev/antd-mobile-react";

export default () => {
    return <>
          <DemoBlock title={`进度条`}>
        <Space direction={`vertical`} block={true}>
          <Progress percent={30}/>
          <Progress percent={50} status={`active`}/>
          <Progress percent={50} status={`exception`}/>
          <Progress percent={100}/>
          <Progress percent={50} showInfo={false}/>
        </Space>
      </DemoBlock>
      <DemoBlock title={`进度圈`}>
        <Space>
          <Progress percent={75} type={`circle`}/>
          <Progress percent={75} type={`circle`} status={`exception`}/>
          <Progress percent={100} type={`circle`}/>
        </Space>
      </DemoBlock>
      <DemoBlock title={`小型进度条`}>
        <Space direction={`vertical`} block={true}>
          <Progress percent={30} size={`small`}/>
          <Progress percent={50} size={`small`} status={`active`}/>
          <Progress percent={70} size={`small`} status={`exception`}/>
          <Progress percent={100} size={`small`}/>
          <Progress percent={50} size={`small`} showInfo={false}/>
        </Space>
      </DemoBlock>
      <DemoBlock title={`自定义文字格式`}>
        <Space>
          <Progress percent={75} type={`circle`} format={(percent) => `${percent}%`}/>
          <Progress percent={100} type={`circle`} format={() => `完成`}/>
        </Space>
      </DemoBlock>
    </>
}
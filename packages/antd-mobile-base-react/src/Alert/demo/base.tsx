import React from "react";
import {DemoBlock} from "../../DemoBlock";
import Alert from "../index";
import Space from "../../Space";

export default () => {
  return <div>
    <DemoBlock title={`基本使用`}>
      <Alert message={`Success Text`}/>
    </DemoBlock>
    <DemoBlock title={`四种样式`}>
      <Space direction={'vertical'} block={true}>
        <Alert message={`Success Text`}/>
        <Alert type={'info'} message={`Info Text`}/>
        <Alert type={`warning`} message={`Warring Text`}/>
        <Alert type={`error`} message={`Error Text`}/>
      </Space>
    </DemoBlock>
    <DemoBlock title={`可关闭的警告提示`}>
      <Space direction={`vertical`} block={true}>
        <Alert type={`warning`}
               message={`Warning Text Warning Text Warning Text Warning Text Warning Text Warning TextWarning Text`}
               closable/>
      </Space>
    </DemoBlock>
    <DemoBlock title={`图标`}>
      <Space direction={'vertical'} block={true}>
        <Alert showIcon={true} message={`Success Text`}/>
        <Alert showIcon={true} type={'info'} message={`Info Text`}/>
        <Alert showIcon={true} type={`warning`} message={`Warring Text`}/>
        <Alert showIcon={true} type={`error`} message={`Error Text`}/>
      </Space>
    </DemoBlock>
  </div>
}

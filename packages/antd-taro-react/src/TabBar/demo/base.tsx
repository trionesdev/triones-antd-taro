/**
 * compact: true
 */
import { TabBar } from "@trionesdev/antd-taro-react";
import React from "react";
import { FaceRecognitionOutline } from "@trionesdev/antd-taro-icons-react/dist/FaceRecognitionOutline";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";

export default () => {
  return <>
    <DemoBlock title="基础用法">
      <TabBar
        items={[{ key: 'home', label: '首页', icon: <FaceRecognitionOutline /> }, { key: 'save', label: '收藏' }, { key: 'my', label: '我的' }]}
      />
    </DemoBlock >
  </>
}

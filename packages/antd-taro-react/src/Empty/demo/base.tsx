/**
 * compact: true
 */
import { QuestionCircleOutline } from "@trionesdev/antd-taro-icons-react";
import { DemoBlock } from '../../DemoBlock';
import {Empty} from "@trionesdev/antd-taro-react";
import React from "react";

export default () => {
  return <>
    <DemoBlock title='基础用法'>
      <Empty />
    </DemoBlock>

    <DemoBlock title='描述文字'>
      <Empty description='暂无数据' />
    </DemoBlock>

    <DemoBlock title='自定义样式'>
      <Empty
        style={{ padding: '64px 0' }}
        imageStyle={{ width: 128 }}
        description='暂无数据'
      />
    </DemoBlock>

    <DemoBlock title='自定义图片'>
      <Empty
        style={{ padding: '64px 0' }}
        image={
          <QuestionCircleOutline
            style={{ color: '#ccc' }}
          />
        }
        description='暂无数据'
      />
    </DemoBlock>
  </>
}

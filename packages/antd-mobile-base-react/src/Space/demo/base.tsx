/**
 * compact: true
 */
import { DemoBlock } from '../../DemoBlock';
import React from 'react'
import {Space} from "../space";
import Button from "../../Button";

export default () => {
  return (
    <>
      <DemoBlock title='水平方向的间距'>
        <Space>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='换行'>
        <Space wrap>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
          <Button type='primary'>按钮4</Button>
          <Button type='primary'>按钮5</Button>
          <Button type='primary'>按钮6</Button>
          <Button type='primary'>按钮7</Button>
          <Button type='primary'>按钮8</Button>
          <Button type='primary'>按钮9</Button>
          <Button type='primary'>按钮10</Button>
          <Button type='primary'>按钮11</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='垂直方向的间距'>
        <Space direction='vertical'>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义间距大小'>
        <Space size={`small`}>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
        <Space size={`middle`}>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
        <Space size={`large`}>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
        <Space size={30}>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='渲染为块级元素'>
        <Space direction='vertical' block>
          <Button type='primary'>按钮1</Button>
          <Button type='primary'>按钮2</Button>
          <Button type='primary'>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='主轴对齐方式'>
        <Space justify='center' block>
          <Button type='primary'>1</Button>
          <Button type='primary'>
            2<br />2
          </Button>
          <Button type='primary'>
            3<br />3<br />3
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='交叉轴对齐方式'>
        <Space align='end'>
          <Button type='primary'>1</Button>
          <Button type='primary'>
            2<br />2
          </Button>
          <Button type='primary'>
            3<br />3<br />3
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}

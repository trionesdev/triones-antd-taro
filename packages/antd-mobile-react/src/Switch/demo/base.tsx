/**
 * compact: true
 */
import { CheckOutline, CloseOutline } from '../../../../antd-mobile-icons-react'
import { DemoBlock } from '../../DemoBlock';
import React, { useState } from 'react'
import Switch from "../index";
import Space from "../../Space";

export default () => {
  const [checked, setChecked] = useState(false)

  const mockRequest = (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <Switch />
      </DemoBlock>

      <DemoBlock title='有默认值'>
        <Switch defaultChecked />
      </DemoBlock>

      <DemoBlock title='文字和图标'>
        <Space wrap>
          <Switch uncheckedText='关' checkedText='开' />
          <Switch
            checkedText={<CheckOutline style={{ fontSize: 12 }} />}
            uncheckedText={<CloseOutline style={{ fontSize: 12 }} />}
          />
          <Switch uncheckedText='0' checkedText='1' />
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义样式'>
        <Switch
          defaultChecked
          style={{
            '--checked-color': '#00b578',
            '--height': '36px',
            '--width': '60px',
          }}
        />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Space>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </Space>
      </DemoBlock>

      <DemoBlock title='加载状态'>
        <Switch loading />
      </DemoBlock>

      <DemoBlock title='异步'>
        <Space wrap>
          <Switch
            checked={checked}
            onChange={async val => {
              await mockRequest()
              setChecked(val)
            }}
          />
        </Space>
      </DemoBlock>
    </>
  )
}

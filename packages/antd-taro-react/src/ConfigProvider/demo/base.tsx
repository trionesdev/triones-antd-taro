/**
 * compact: true
 */
import React from 'react'
import { ConfigProvider, ErrorBlock } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '../../DemoBlock';
import zhCN from '../../locales/zh-CN'
import enUS from '../../locales/en-US'

export default () => {
  return (
    <>
      <DemoBlock title='中文'>
        <ConfigProvider locale={zhCN}>
          <ErrorBlock status='disconnected' />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='英文'>
        <ConfigProvider locale={enUS}>
          <ErrorBlock status='disconnected' />
        </ConfigProvider>
      </DemoBlock>
    </>
  )
}

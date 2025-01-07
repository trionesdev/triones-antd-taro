/**
 * compact: true
 */
import React from 'react'
import { ConfigProvider, ErrorBlock } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
import zhCN from '@trionesdev/antd-taro-react/locales/zh-CN'
import enUS from '@trionesdev/antd-taro-react/locales/en-US'

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

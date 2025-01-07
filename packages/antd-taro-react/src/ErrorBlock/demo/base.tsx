/**
 * compact: true
 */
import { ErrorBlock } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
import Space from '@trionesdev/antd-taro-react/Space'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='四种状态'>
        <Space block direction='vertical' style={{ '--gap': '16px' }}>
          <ErrorBlock status='default' />
          <ErrorBlock status='disconnected' />
          <ErrorBlock status='empty' />
          <ErrorBlock status='busy' />
        </Space>
      </DemoBlock>
    </>
  )
}

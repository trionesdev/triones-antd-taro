/**
 * compact: true
 */
import { DemoBlock } from '../../DemoBlock';
import React from 'react'
import Space from "../../Space";
import ErrorBlock from "../index";

export default () => {
  return (
    <>
      <DemoBlock title='四种状态'>
        <Space block direction='vertical'>
          <ErrorBlock status='default' />
          <ErrorBlock status='disconnected' />
          <ErrorBlock status='empty' />
          <ErrorBlock status='busy' />
        </Space>
      </DemoBlock>
    </>
  )
}

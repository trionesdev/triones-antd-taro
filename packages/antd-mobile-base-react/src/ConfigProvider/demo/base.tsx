/**
 * compact: true
 */
import React from 'react'
import { DemoBlock } from '../../DemoBlock';
import zhCN from '../../locales/zh-CN'
import enUS from '../../locales/en-US'
import ConfigProvider from "../index";
import {ErrorBlock} from "../../index";

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

/**
 * compact: true
 */

import React from 'react'
import './base.scss'
import { DemoBlock } from '../../DemoBlock';
import Badge from "../index";

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <div className='badge-demo'>
          <Badge content='5'>
            <div className='badge-box' />
          </Badge>
          <Badge content='新'>
            <div className='badge-box' />
          </Badge>
          <Badge content={Badge.dot}>
            <div className='badge-box' />
          </Badge>
        </div>
      </DemoBlock>

      <DemoBlock title='带边框'>
        <Badge content='更新啦' bordered>
          <div className='badge-box dark' />
        </Badge>
      </DemoBlock>

      <DemoBlock title='独立使用'>
        <div className='badge-demo'>
          <Badge content='99+' />
          <Badge content='新消息!' />
        </div>
      </DemoBlock>

      <DemoBlock title='自定义颜色和偏移量'>
        <div className='badge-demo'>
          <Badge
            color='#108ee9'
            content={Badge.dot}
            style={{ '--right': '100%', '--top': '100%' }}
          >
            <div className='badge-box' />
          </Badge>
          <Badge
            color='#87d068'
            content={Badge.dot}
            style={{ '--right': '100%' }}
          >
            <div className='badge-box' />
          </Badge>
          <Badge content={Badge.dot}>
            <div className='badge-box' />
          </Badge>
          <Badge color='orange' content={Badge.dot} style={{ '--top': '100%' }}>
            <div className='badge-box' />
          </Badge>
        </div>
      </DemoBlock>
    </>
  )
}

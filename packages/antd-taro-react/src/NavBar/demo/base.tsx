import React from 'react'
import {Space} from '@trionesdev/antd-taro-react'
import { CloseOutline, MoreOutline } from '@trionesdev/antd-taro-icons-react'

import './base.scss'
import { DemoBlock } from '../../DemoBlock';
import { NavBar } from '@trionesdev/antd-taro-react'


export default () => {
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <MoreOutline />
      </Space>
    </div>
  )

  const back = () => { }

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <NavBar onBack={back}>标题</NavBar>
      </DemoBlock>

      <DemoBlock title='返回按钮显示文字' padding='0'>
        <NavBar back='返回' onBack={back}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='返回按钮不显示图标' padding='0'>
        <NavBar back='返回' onBack={back} backIcon={false}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义返回按钮图标' padding='0'>
        <NavBar back='返回' backIcon={<CloseOutline />} onBack={back}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义左侧区域' padding='0'>
        <NavBar back='返回' onBack={back} left='关闭'>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义右侧区域' padding='0'>
        <NavBar right={right} onBack={back}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义高度及边框' padding='0'>
        <NavBar
          style={{
            '--height': '36px',
            '--border-bottom': '1px #eee solid',
          }}
          onBack={back}
        >
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='标题超长' padding='0'>
        <NavBar onBack={back}>这是一条很长很长很长很长很长很长的标题</NavBar>
      </DemoBlock>

      <DemoBlock title='显示副标题' padding='0'>
        <NavBar onBack={back}>
          <div>
            <div>标题</div>
            <div className='my-nav-bar-subtitle'>副标题</div>
          </div>
        </NavBar>
      </DemoBlock>
    </>
  )
}

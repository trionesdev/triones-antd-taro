/**
 * compact: true
 */

import React from 'react'
import './base.scss'
import { DemoBlock } from '../../DemoBlock';
import Badge from "../index";
import Avatar from '../../Avatar';
import { UserOutline } from '@trionesdev/antd-taro-icons-react';

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Badge style={{ marginInlineEnd: '40px' }} value={8}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} value={76}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} dot top="2" right="4">
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
      </DemoBlock>

      <DemoBlock title='最大值'>
        <Badge style={{ marginInlineEnd: '40px' }} value={200} max={9}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} value={200} max={20}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} value={200} max={99}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
      </DemoBlock>

      <DemoBlock title='独立使用'>
        <Badge style={{ marginInlineEnd: '40px' }} value={8} />
        <Badge style={{ marginInlineEnd: '40px' }} value={76} />
        <Badge style={{ marginInlineEnd: '40px' }} value="NEW" />
      </DemoBlock>

      <DemoBlock title='自定义背景色'>
        <Badge
          style={{ marginInlineEnd: '40px' }}
          value={8}
          color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
        >
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge
          style={{ marginInlineEnd: '40px' }}
          value={76}
          color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
        >
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge
          style={{ marginInlineEnd: '40px' }}
          value="NEW"
          color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
        >
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge
          style={{ marginInlineEnd: '40px' }}
          top="2"
          right="4"
          dot
          color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
        >
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
      </DemoBlock>

      <DemoBlock title='自定义位置'>
        <Badge style={{ marginInlineEnd: '40px' }} dot top={4} right={4}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} value={8} top={7} right={7}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
        <Badge style={{ marginInlineEnd: '40px' }} value="内容" top={7} right={10}>
          <Avatar icon={<UserOutline />} shape="square" />
        </Badge>
      </DemoBlock>
    </>
  )
}

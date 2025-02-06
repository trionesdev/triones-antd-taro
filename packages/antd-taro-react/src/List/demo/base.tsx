/**
 * compact: true
 */
import { ArrowsAltOutline, PayCircleOutline, SetOutline, UnorderedListOutline } from '@trionesdev/antd-taro-icons-react'
import React from 'react'
import List from '..'
import { users } from './users'
import Switch from '../../Switch'
import Images from '../../Images'

export default () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <>
      <List header='基础用法'>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>3</List.Item>
      </List>
      <List header='可点击列表'>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => { }}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => { }}>
          设置
        </List.Item>
      </List>

      <List header='复杂列表'>
        <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item>
        <List.Item extra='未开启' clickable>
          大字号模式
        </List.Item>
        <List.Item description='管理已授权的产品和设备' clickable>
          授权管理
        </List.Item>
        <List.Item title='副标题信息A' description='副标题信息B' clickable>
          这里是主信息
        </List.Item>
      </List>

      <List header='禁用状态'>
        <List.Item disabled clickable prefix={<UnorderedListOutline />}>
          账单
        </List.Item>
        <List.Item disabled prefix={<PayCircleOutline />}>
          总资产
        </List.Item>
      </List>

      <List header='自定义箭头'>
        <List.Item
          prefix={<UnorderedListOutline />}
          description='不显示箭头'
          arrowIcon={false}
          onClick={() => { }}
        >
          账单
        </List.Item>
        <List.Item
          prefix={<PayCircleOutline />}
          description='自定义箭头'
          arrowIcon={<ArrowsAltOutline />}
          onClick={() => { }}
        >
          总资产
        </List.Item>
      </List>
      <List header='用户列表'>
        {users.map(user => (
          <List.Item
            key={user.name}
            prefix={
              <Images
                src={user.avatar}
                style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
      <List mode='card' header='卡片列表'>
        <List.Item extra='按照支付设置的顺序扣款' onClick={handleClick}>
          扣款方式
        </List.Item>
        <List.Item extra='200元' onClick={handleClick}>
          月限额
        </List.Item>
        <List.Item onClick={handleClick}>帮助中心</List.Item>
        <List.Item onClick={handleClick}>关闭服务</List.Item>
      </List>
    </>
  )
}

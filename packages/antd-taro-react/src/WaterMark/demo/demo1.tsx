/**
 * compact: true
 */
import React, { useState } from 'react'


import './demo1.scss'
import Button from '@trionesdev/antd-taro-react/Button'
import { WaterMark } from '@trionesdev/antd-taro-react'

const textProps = {
  content: 'Ant Taro Mobile',
}

const rowsTextProps = {
  content: ['Ant Taro Mobile', 'Ant Taro Mobile Pro'],
}

const imageProps = {
  image:
    'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
}

export default () => {
  const [props, setProps] = useState<{ [key: string]: any }>(textProps)

  return (
    <div className='water-mark-overlay'>
      <Button onClick={() => setProps(textProps)}>普通水印</Button>
      <br />
      <Button onClick={() => setProps(rowsTextProps)}>多行文字水印</Button>
      <br />
      <Button onClick={() => setProps(imageProps)}>图片水印</Button>
      <WaterMark {...props} />
    </div>
  )
}

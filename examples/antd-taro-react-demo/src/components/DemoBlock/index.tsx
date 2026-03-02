import type { FC, ReactNode } from 'react'
import './index.scss'
import {View} from "@tarojs/components";
import React from 'react';

interface Props {
  style?: React.CSSProperties
  title: string
  padding?: string
  background?: string
  children?: ReactNode
  styles?:{
    body?: React.CSSProperties
  }
}

export const DemoBlock: FC<Props> = props => {
  return (
    <View className='demoBlock' style={props.style}>
      <View className='demoTitle'>{props.title}</View>
      <View
        className='demoMain'
        style={{
          padding: '12px 12px',
          background: '#ffffff',
          ...props.styles?.body
        }}
      >
        {props.children}
      </View>
    </View>
  )
}

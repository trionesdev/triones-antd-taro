import type { FC, ReactNode } from 'react'
import './index.scss'
import {View} from "@tarojs/components";

interface Props {
  title: string
  padding?: string
  background?: string
  children?: ReactNode
}

export const DemoBlock: FC<Props> = props => {
  return (
    <View className='demoBlock'>
      <View className='demoTitle'>{props.title}</View>
      <View
        className='demoMain'
        style={{
          padding: '12px 12px',
          background: '#ffffff',
        }}
      >
        {props.children}
      </View>
    </View>
  )
}

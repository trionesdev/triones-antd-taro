import React from 'react'
import type { FC, ReactNode } from 'react'
import './index.scss'

interface Props {
  title: string
  padding?: string
  background?: string
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
  styles?:{
    body?: React.CSSProperties
  }
}

export const DemoBlock: FC<Props> = props => {
  return (
    <div className='demoBlock'>
      <div className='demoTitle'>{props.title}</div>
      <div
        className='demoMain'
        style={{
          padding: '12px 12px',
          background: '#ffffff',
          ...props.styles?.body
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

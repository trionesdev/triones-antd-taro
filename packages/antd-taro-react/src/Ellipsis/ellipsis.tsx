
import type { FC, ReactNode } from 'react'
import React from 'react'
import useMeasure from './useMeasure'
import { mergeProps, NativeProps, withNativeProps } from '../utils/native-props'
import { useResizeEffect } from '../utils/use-resize-effect'
import { PropagationEvent, withStopPropagation } from '../utils/with-stop-propagation'

import './style.scss'

const classPrefix = `triones-antm-ellipsis`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: ReactNode
  collapseText?: ReactNode
  stopPropagationForActionButtons?: PropagationEvent[]
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  defaultExpanded?: boolean
} & NativeProps

const defaultProps = {
  direction: 'end' as const,
  rows: 1,
  expandText: '',
  content: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
  onContentClick: () => { },
  defaultExpanded: false,
}

export const Ellipsis: FC<EllipsisProps> = p => {
  const props = mergeProps(defaultProps, p) as EllipsisProps

  const {
    content,
    direction = 'end',
    rows = 1,
    expandText,
    collapseText,
    stopPropagationForActionButtons = [],
    onContentClick = () => { },
    defaultExpanded = false,
  } = props

  // ============================ Refs ============================
  const rootRef = React.useRef<HTMLDivElement>(null)

  // ========================== Expanded ==========================
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded)

  const expandNode = expandText
    ? withStopPropagation(
      stopPropagationForActionButtons,
      <a
        onClick={() => {
          setExpanded(true)
        }}
      >
        {expandText}
      </a>
    )
    : null

  const collapseNode = collapseText
    ? withStopPropagation(
      stopPropagationForActionButtons,
      <a
        onClick={() => {
          setExpanded(false)
        }}
      >
        {collapseText}
      </a>
    )
    : null

  // ========================== Ellipsis ==========================
  const [measureNodes, forceResize] = useMeasure(
    rootRef,
    content,
    rows,
    direction,
    expanded,
    expandNode,
    collapseNode
  )

  useResizeEffect(forceResize, rootRef)

  // =========================== Render ===========================
  return withNativeProps(
    props,
    <div
      ref={rootRef}
      className={classPrefix}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onContentClick(e)
        }
      }}
    >
      {measureNodes}
    </div>
  )
}

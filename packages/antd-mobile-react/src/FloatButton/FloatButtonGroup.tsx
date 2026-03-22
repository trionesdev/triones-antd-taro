import classNames from 'classnames'
import {CloseOutline} from "@trionesdev/antd-mobile-icons-react"
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {FloatButton} from './FloatButton'
import {FloatButtonGroupContext} from './context'
import './style.scss'


export type FloatButtonGroupProps = {
  shape?: 'circle' | 'square'
  type?: 'primary' | 'default'
  /** 菜单模式下主按钮图标（收起态） */
  icon?: React.ReactNode
  trigger?: 'click' | 'hover'
  open?: boolean
  onOpenChange?: (open: boolean) => void
  closeIcon?: React.ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  onClick?: (e: React.MouseEvent) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  right?: number
  bottom?: number
  zIndex?: number
}

const groupCls = 'triones-antm-float-button-group'

export const FloatButtonGroup: FC<FloatButtonGroupProps> = ({
                                                              shape = 'circle',
                                                              type = 'default',
                                                              icon,
                                                              trigger,
                                                              open: openProp,
                                                              onOpenChange,
                                                              closeIcon,
                                                              placement = 'top',
                                                              onClick,
                                                              className,
                                                              style,
                                                              children,
                                                              right = 24,
                                                              bottom = 24,
                                                              zIndex = 100,
                                                            }) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const isMenu = trigger === 'click' || trigger === 'hover'
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const mergedOpen = openProp ?? uncontrolledOpen

  const setOpen = useCallback(
    (next: boolean) => {
      if (openProp === undefined) {
        setUncontrolledOpen(next)
      }
      onOpenChange?.(next)
    },
    [openProp, onOpenChange]
  )

  const triggerOpen = useCallback(
    (next: boolean) => {
      if (mergedOpen !== next) {
        setOpen(next)
      }
    },
    [mergedOpen, setOpen]
  )

  useEffect(() => {
    if (!isMenu || trigger !== 'click') return
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return
      triggerOpen(false)
    }
    document.addEventListener('click', onDoc, true)
    return () => document.removeEventListener('click', onDoc, true)
  }, [isMenu, trigger, triggerOpen])

  const onMouseEnter = () => {
    if (trigger === 'hover') triggerOpen(true)
  }
  const onMouseLeave = () => {
    if (trigger === 'hover') triggerOpen(false)
  }

  const onTriggerClick = (e: any) => {
    if (trigger === 'click') {
      triggerOpen(!mergedOpen)
    }
    onClick?.(e)
  }

  const mergedCloseIcon = closeIcon ?? <CloseOutline/>

  const listVisible = !isMenu || mergedOpen

  const listNode = (
    <div
      className={classNames(`${groupCls}-list`, {
        [`${groupCls}-list--hidden`]: !listVisible,
      })}
      aria-hidden={!listVisible}
    >
      {children}
    </div>
  )

  const triggerNode = (
    <FloatButton
      type={type}
      shape={shape}
      icon={mergedOpen ? mergedCloseIcon : icon}
      onClick={onTriggerClick}
    />
  )

  const ctxValue = useMemo(
    () => ({
      inGroup: true,
      shape,
      individual: shape === 'circle',
      right: right,
      bottom: bottom,
      zIndex
    }),
    [shape, right, bottom, zIndex]
  )

  const rootClass = classNames(
    groupCls,
    `${groupCls}--placement-${placement}`,
    {
      [`${groupCls}--menu`]: isMenu,
    },
    className
  )

  return (
    <div
      ref={rootRef}
      className={rootClass}
      style={{
        zIndex: zIndex,
        right: `${right}Px`,
        bottom: `calc(${bottom}Px + env(safe-area-inset-bottom, 0px))`, ...style
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FloatButtonGroupContext.Provider value={ctxValue}>
        {isMenu ? (
          <>
            {placement === 'bottom' ? (
              <>
                {triggerNode}
                {listNode}
              </>
            ) : placement === 'right' ? (
              <>
                {triggerNode}
                {listNode}
              </>
            ) : (
              <>
                {listNode}
                {triggerNode}
              </>
            )}
          </>
        ) : (
          children
        )}
      </FloatButtonGroupContext.Provider>
    </div>
  )
}

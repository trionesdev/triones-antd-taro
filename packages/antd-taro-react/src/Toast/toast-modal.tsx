import {FC, memo, useEffect, useMemo, useRef, useState} from "react";
import classNames from "classnames";
import React from "react";

import "./style.scss"
import Mask from "../Mask";
import {CheckOutline, CloseOutline} from "@trionesdev/antd-taro-icons-react";
import {SpinLoading} from "../index";

const toastCls = "triones-antm-toast";

export type ToastModalProps = {
  open?: boolean,
  maskClosable?: boolean
  content?: React.ReactNode
  duration?: number
  durationAble?: boolean
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode
  maskClassName?: string
  position?: 'top' | 'bottom' | 'center'
  destroyOnClose?: boolean
  afterClose?: () => void
  afterOpenChange?: (open: boolean) => void
  onDestroy?: () => void;
}
export const ToastModal: FC<ToastModalProps> = memo(({
                                                       open,
                                                       maskClosable = true,
                                                       content,
                                                       duration = 2000,
                                                       durationAble = true,
                                                       icon,
                                                       maskClassName,
                                                       position = 'center',
                                                       destroyOnClose,
                                                       afterClose,
                                                       afterOpenChange,
                                                       onDestroy
                                                     }) => {
  const [internalOpen, setInternalOpen] = useState(open || false);
  const time = useRef<any>()
  const handleIcon = () => {
    if (icon === 'success') {
      return <CheckOutline/>
    } else if (icon === 'fail') {
      return <CloseOutline/>
    } else if (icon === 'loading') {
      return <SpinLoading color={`white`}/>
    } else {
      return icon
    }
  }

  useEffect(() => {
    if (open === undefined) {
      return
    }
    if (open !== internalOpen) {
      setInternalOpen(open)
    }
  }, [open]);


  useEffect(() => {
    afterOpenChange?.(internalOpen);
    if (!internalOpen) {
      afterClose?.()
      if (destroyOnClose) {
        onDestroy?.()
      }
      clearTimeout(time.current)
    }
    if (durationAble && internalOpen && duration) {
      time.current = setTimeout(() => {
        setInternalOpen(false)
      }, duration)
    }
  }, [internalOpen]);

  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%'
      case 'bottom':
        return '80%'
      default:
        return '50%'
    }
  }, [position])


  return <Mask className={maskClassName} open={internalOpen} onMaskClick={() => {
    if (maskClosable) {
      setInternalOpen(false)
    }
  }}>
    <div className={classNames(toastCls)}>
      <div className={classNames(`${toastCls}-main`, {[`${toastCls}-main-icon`]: icon})}
           style={{top: top}}
           onClick={(e) => {
             e.stopPropagation()
           }}>
        <div className={classNames(`${toastCls}-center`)}>
          {icon && <div className={classNames(`${toastCls}-center-icon`)}>{handleIcon()}</div>}
          {content && <div className={classNames(`${toastCls}-center-content`)}>{content}</div>}
        </div>
      </div>
    </div>
  </Mask>
})

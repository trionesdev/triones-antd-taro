import React from 'react'
import { useConfig } from '../ConfigProvider'
import { CheckCircleOutline, CloseCircleOutline, InformationCircleOutline, ClockCircleOutline, ExclamationTriangleOutline } from '@trionesdev/antd-taro-icons-react'


export const useResultIcon = (
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
) => {
  const { result: componentConfig = {} } = useConfig()
  const {
    successIcon = <CheckCircleOutline style={{ fontSize: "48PX" }} />,
    errorIcon = <CloseCircleOutline style={{ fontSize: "48PX" }} />,
    infoIcon = <InformationCircleOutline style={{ fontSize: "48PX" }} />,
    waitingIcon = <ClockCircleOutline style={{ fontSize: "48PX" }} />,
    warningIcon = <ExclamationTriangleOutline style={{ fontSize: "48PX" }} />,
  } = componentConfig || {}
  switch (status) {
    case 'success':
      return successIcon
    case 'error':
      return errorIcon
    case 'info':
      return infoIcon
    case 'waiting':
      return waitingIcon
    case 'warning':
      return warningIcon
    default:
      return null
  }
}

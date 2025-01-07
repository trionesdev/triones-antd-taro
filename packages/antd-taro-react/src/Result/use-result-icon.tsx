import React from 'react'
import { useConfig } from '../ConfigProvider'
import { CheckCircleOutline, CloseCircleOutline, InformationCircleOutline } from '@trionesdev/antd-taro-icons-react'


export const useResultIcon = (
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
) => {
  const { result: componentConfig = {} } = useConfig()
  const {
    successIcon = <CheckCircleOutline />,
    errorIcon = <CloseCircleOutline />,
    infoIcon = <InformationCircleOutline />,
    waitingIcon = <InformationCircleOutline />,
    warningIcon = <InformationCircleOutline />,
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

import { InputProps } from "..";
import {FC, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import React from "react";
import Input from "../Input";
import "./style.scss"

type ValidationCodeInputProps = Omit<InputProps, 'suffix'> & {
  /**
   * @description 发送文本
   * @default 获取验证码
   */
  sendText?: string
  /**
   * @description 重新发送文本
   * @default 重新发送
   */
  resendText?: string
  /**
   * @description 等待时间
   */
  waitSeconds?: number
  /**
   * @description 发送事件
   */
  onSend?: () => Promise<boolean>
};

export const VerificationCodeInput:FC<ValidationCodeInputProps> = ({
                                                            sendText = '获取验证码',
                                                            resendText = "重新发送",
                                                            waitSeconds = 60,
                                                            onSend,
                                                            ...props
                                                          }) => {
  const [send, setSend] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<any>(0)
  const secondsRef = useRef<number>(0)
  const timer = useRef<any>(null)

  useEffect(() => {
    if (seconds < 1) {
      clearTimeout(timer.current)
      timer.current = null
    } else {
      setSend(true)
    }
  }, [seconds]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, []);

  const prefixCls = 'triones-antm-validation-code-input';

  const handleSuffix = () => {
    if (seconds > 0) {
      return <div className={classNames(`${prefixCls}-counting`)}>{seconds}s</div>
    }
    return <div className={classNames(`${prefixCls}-send`)} onClick={async () => {
      if (!timer.current) {
        if (await onSend?.()) {
          secondsRef.current = waitSeconds;
          timer.current = setInterval(() => {
            secondsRef.current = secondsRef.current - 1;
            setSeconds(secondsRef.current)
          }, 1000)
        }
      }
    }}>{send ? resendText : sendText}</div>
  }

  return <Input {...props} className={classNames(prefixCls,props.className)} suffix={handleSuffix()}/>
}

import {View} from "@tarojs/components";
import React, {FC, useEffect, useState} from "react";
import {DemoBlock} from "../../components";
import { Button, Space, Toast } from "@trionesdev/antd-taro-react";


const CountDownText: FC = () => {
  const [count, setCount] = useState(5)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(x => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <span>还剩 {count} 秒</span>
}

const ToastBase = () => {
  const toastContainer = React.useRef<any>()
  const toastContainer2 = React.useRef<any>()
  const toastContainer3 = React.useRef<any>()

  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基本使用`}>

    </DemoBlock>
  </View>
}
export default ToastBase;

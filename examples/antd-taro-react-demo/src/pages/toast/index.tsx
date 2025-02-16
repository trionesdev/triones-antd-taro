import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { Button, Space, Toast } from "@trionesdev/antd-taro-react";
import React, {FC, useEffect, useState} from "react";

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

const ToastBase = ()=>{
  const toastContainer = React.useRef<any>()
  const toastContainer2 = React.useRef<any>()
  const toastContainer3 = React.useRef<any>()

  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基础用法`}>
      <View ref={toastContainer}/>
      <Button onClick={() => {
        Toast.show({
          getContainer: () => toastContainer.current,
          content: 'Hello World, This is a long text',
        })
      }}>轻提示</Button>
    </DemoBlock>
    <DemoBlock title={`图标`}>
      <View ref={toastContainer2}/>
      <Space>
        <Button onClick={() => {
          Toast.show({
            getContainer: () => toastContainer2.current,
            icon: 'success',
            content: '保存成功'
          })
        }}>成功</Button>
        <Button onClick={() => {
          Toast.show({
            getContainer: () => toastContainer2.current,
            icon: 'fail',
            content: '保存失败'
          })
        }}>失败</Button>
        <Button onClick={() => {
          Toast.show({
            getContainer: () => toastContainer2.current,
            icon: 'loading',
            content: '加载中...'
          })
        }}>加载</Button>
      </Space>

    </DemoBlock>
    <DemoBlock title={`更多功能`}>
      <View ref={toastContainer3}/>
      <Space>
        <Button onClick={() => {
          Toast.show({
            getContainer: () => toastContainer3.current,
            content: 'Hello Word',
            position: 'top'
          })
        }}>顶部提示</Button>
        <Button onClick={() => {
          Toast.show({
            getContainer: () => toastContainer3.current,
            content: 'Hello Word',
            position: 'bottom',
          })
        }}>底部提示</Button>
        <Button onClick={() => {
          Toast.show({
            getContainer: () => toastContainer3.current,
            icon: 'loading',
            content: <CountDownText/>,
            duration: 5000
          })
        }}>动态内容</Button>
      </Space>
    </DemoBlock>
  </View>
}
export default ToastBase;

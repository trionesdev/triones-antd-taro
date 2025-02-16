import React, {FC, useEffect, useState} from "react"
import {DemoBlock} from "../../DemoBlock";
import Button from "../../Button";
import Toast from "../index";
import Space from "../../Space";

const CountDownText: FC = () => {
  const [count, setCount] = useState(5)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount(x => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      window.clearInterval(interval)
    }
  }, [])
  return <span>还剩 {count} 秒</span>
}

export default () => {
  const toastContainer = React.useRef<any>()
  const toastContainer2 = React.useRef<any>()
  const toastContainer3 = React.useRef<any>()
  return <>
    <DemoBlock title={`基础用法`}>
      <div ref={toastContainer}/>
      <Button onClick={() => {
        Toast.show({
          getContainer: () => toastContainer.current,
          content: 'Hello World, This is a long text',
        })
      }}>轻提示</Button>
    </DemoBlock>
    <DemoBlock title={`图标`}>
      <div ref={toastContainer2}/>
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
      <div ref={toastContainer3}/>
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
            duration:3333330
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
  </>
}

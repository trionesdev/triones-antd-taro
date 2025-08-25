import {View} from "@tarojs/components";
import React, {FC, useEffect, useState} from "react";
import {DemoBlock} from "../../components";
import {Button, Space, Toast} from "@trionesdev/antd-taro-react";


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
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [openDynamic, setOpenDynamic] = useState(false)

  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基本使用`}>
      <Space>
        <Toast
          open={open1}
          afterClose={() => {
            setOpen1(false)
          }}
          icon="success"
          content={'保存成功'}/>
        <Button onClick={() => {
          setOpen1(true)
        }}>成功</Button>
        <Toast
          open={open2}
          afterClose={() => {
            setOpen2(false)
          }}
          icon="fail"
          content={'失败'}/>
        <Button onClick={() => {
          setOpen2(true)
        }}>失败</Button>
      </Space>
    </DemoBlock>
    <DemoBlock title={`动态内容`}>
      <Space>
        <Toast
          open={openDynamic}
          afterClose={() => {
            setOpenDynamic(false)
          }}
          icon="loading"
          content={<CountDownText/>}/>
        <Button onClick={() => {
          setOpenDynamic(true)
        }}>动态内容</Button>
      </Space>
    </DemoBlock>
  </View>
}
export default ToastBase;

import React from "react"
import {DemoBlock} from "../../DemoBlock";
import CascaderView from "../index";

export default () => {
  const options = [
    {
      value: "jiangsu",
      label: "江苏",
      children: [
        {
          value: "nanjing",
          label: '南京',
        },
        {
          value: "wuxi",
          label: '无锡',
        }, {
          value: "changzhou",
          label: '常州',
        },
      ]
    },
    {
      value: "zhejiang",
      label: "浙江"
    },
    {
      value: "shanghai",
      label: "上海"
    }
  ]
  return <>
    <DemoBlock title={`基本使用`}>
      <CascaderView options={options}/>
    </DemoBlock>
  </>
}

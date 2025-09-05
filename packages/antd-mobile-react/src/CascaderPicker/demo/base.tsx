import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Button from "../../Button";
import CascaderPicker from "../index";

export default () => {
  const [open, setOpen] = React.useState(false);
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
        }, {
          value: "suzhou",
          label: '苏州',
          children: [
            {
              value: "gushu",
              label: '姑苏区'
            }
          ]
        },
      ]
    },
    {
      value: "zhejiang",
      label: "浙江",
      children: [
        {
          value: "hangzhou",
          label: '杭州',
        },
        {
          value: "wenzhou",
          label: '温州',
        }
      ]
    },
    {
      value: "shanghai",
      label: "上海"
    },
    {
      value: "shandong",
      label: '山东'
    },
    {
      value: "henan",
      label: '河南'
    },
    {
      value: "hebei",
      label: '河北'
    },
    {
      value: "hunan",
      label: '湖南'
    },
    {
      value: "hubei",
      label: '湖北'
    }
  ]
  return <>
    <DemoBlock title={`基本使用`}>
      <CascaderPicker open={open}
                      options={options} onOk={(value) => {
        console.log(value);
      }} style={{height: 300}} onClose={() => {
        setOpen(false)
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>
        级联选择
      </Button>
    </DemoBlock>
  </>
}

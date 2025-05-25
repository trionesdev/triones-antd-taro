import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { CascaderView } from "@trionesdev/antd-taro-react";

const CascaderViewBase = () => {
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

  return <View>
    <DemoBlock title={`基本使用`}>
      <CascaderView options={options} style={{height: 200}}/>
    </DemoBlock>
  </View>
}
export default CascaderViewBase

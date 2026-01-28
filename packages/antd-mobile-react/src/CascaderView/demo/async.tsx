import React from "react"
import {DemoBlock} from "../../DemoBlock";
import CascaderView from "../index";

export default () => {
  return <>
    <DemoBlock title={`设置值`}>
      <CascaderView options={[]} style={{height: 200}} value={['jiangsu','suzhou','gushu']} asyncRequest={()=>{
        return Promise.resolve([
          {
            value: "jiangsu",
            label: "江苏",
          },
          {
            value: "zhejiang",
            label: "浙江",
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
        ])
      }}/>
    </DemoBlock>
  </>
}

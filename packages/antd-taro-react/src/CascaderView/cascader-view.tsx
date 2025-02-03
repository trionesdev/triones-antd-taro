import React, {FC, useEffect, useState} from "react"
import classNames from "classnames";
import Tabs from "../Tabs";
import {CascaderColumn} from "./cascader-column";
import "./style.scss"
import _ from "lodash";

const cascaderViewCls = 'triones-antm-cascader-view'

type CascaderViewProps = {
  options: any[]
}
export const CascaderView: FC<CascaderViewProps> = ({
                                                      options
                                                    }) => {
  const [activeKey, setActiveKey] = useState<any>();
  const [columns, setColumns] = useState<any[]>([])
  const [tabItems, setTabItems] = useState<any>([])

  const handleSelect = (option: any, index: number) => {
    const newColumns:any[] = []
    Array.from({length:index+1}, (_, i) => i).forEach((i)=>{
      if (i == index){
        newColumns.push({value:option,options:columns[i].options})
      }else {
        newColumns.push(columns[i])
      }
    })
    debugger
    if (!_.isEmpty(option.children)){
      newColumns.push({options: option.children})
      setActiveKey(`${index+1}`)
    }
    console.log(newColumns)
    setColumns(newColumns)
  }

  useEffect(() => {
    const column = {
      value: null,
      options
    }
    setColumns([column])
  }, [options]);

  useEffect(() => {
    if (!_.isEmpty(columns)) {
      const items = columns.map((column, index: number) => {
        return {
          key: `${index}`,
          label: column.value?.label || '请选择',
          children: <CascaderColumn index={index} options={column.options} value={column.value} onSelect={handleSelect}/>
        }
      })
      console.log(items)
      setTabItems(items)
    }
  }, [columns]);

  return <div className={classNames(cascaderViewCls)}>
    <Tabs activeKey={activeKey} items={tabItems} stretch={false}/>
  </div>
}

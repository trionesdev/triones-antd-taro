import { Segmented } from "@trionesdev/antd-mobile-base-react"
import React from "react"
import { DemoBlock } from "src/DemoBlock"

export default () => {
    return (
        <DemoBlock title="基本使用">
            <Segmented options={
                [{label: '选项1', value: '1'}, 
                {label: '选项2', value: '2'}, 
                {label: '选项3', value: '3'}
                ]} />
        </DemoBlock>
    )
}
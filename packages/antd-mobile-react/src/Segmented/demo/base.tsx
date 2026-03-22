import { Segmented } from "@trionesdev/antd-mobile-base-react"
import React from "react"
import { DemoBlock } from '../../DemoBlock';

export default () => {
    return (
<div>
<DemoBlock title="基本使用">
            <Segmented options={
                [{label: '选项1', value: '1'}, 
                {label: '选项2', value: '2'}, 
                {label: '选项3', value: '3'}
                ]} />
        </DemoBlock>

                <DemoBlock title="block 属性使其适合父元素宽度">
            <Segmented block options={
                [{label: '选项1', value: '1'}, 
                {label: '选项2', value: '2'}, 
                {label: '选项3', value: '3'}
                ]} />
        </DemoBlock>
</div>
    )
}
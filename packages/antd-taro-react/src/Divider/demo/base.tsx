import { Divider } from "@trionesdev/antd-taro-react";
import React from "react";

export default () => {
    return <div>
        <div>
            <Divider>默认内容在中间</Divider>
            <Divider contentPosition='left'>左侧内容</Divider>
            <Divider contentPosition='right'>右侧内容</Divider>
        </div>
        <div>
            <Divider
                style={{
                    color: '#1677ff',
                    borderColor: '#1677ff',
                    borderStyle: 'dashed',
                }}
            >
                自定义样式
            </Divider>
        </div>
        <div style={{ fontSize: '14px' }}>
            <>
                Text
                <Divider direction='vertical' />
                <a href='#'>Link</a>
                <Divider direction='vertical' />
                <a href='#'>Link</a>
            </>
        </div>
    </div>
}

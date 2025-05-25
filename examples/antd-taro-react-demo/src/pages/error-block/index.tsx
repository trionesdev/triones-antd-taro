
import { View } from "@tarojs/components";
import { Space, ErrorBlock } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "../../components";

const ErrorBlockBase = () => {
  return <View>
    <DemoBlock title='四种状态'>
      <Space block direction='vertical' style={{ '--gap': '16px' }}>
        <ErrorBlock status='default' />
        <ErrorBlock status='disconnected' />
        <ErrorBlock status='empty' />
        <ErrorBlock status='busy' />
      </Space>
    </DemoBlock>
  </View>
}

export default ErrorBlockBase

import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {Space, SpinLoading } from "@trionesdev/antd-taro-react";

const SpinLoadingBase = ()=>{
  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基础使用`}>
      <SpinLoading/>
    </DemoBlock>
    <DemoBlock title={`颜色`}>
      <Space>
        <SpinLoading/>
        <SpinLoading color={`primary`}/>
        <SpinLoading color={`white`}/>
      </Space>
    </DemoBlock>

    <DemoBlock title={`大小`}>
      <Space>
        <SpinLoading size={`small`}/>
        <SpinLoading/>
        <SpinLoading size={`large`}/>
      </Space>
    </DemoBlock>
  </View>
}
export default SpinLoadingBase

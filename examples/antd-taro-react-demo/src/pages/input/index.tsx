import {View,Input as TaroInput} from "@tarojs/components";
import {Input} from "@trionesdev/antd-taro-react";
import {DemoBlock} from "../../components";


const InputBase = () => {
  return <View>
    <DemoBlock title="基础用法">
      <Input placeholder="请输入内容"/>
    </DemoBlock>
    <DemoBlock title="带清除按钮">
      <Input placeholder="请输入内容" allowClear={true}/>
    </DemoBlock>
    <DemoBlock title="密码模式">
      <Input.Password placeholder="请输入内容" allowClear={true}/>
    </DemoBlock>
    <DemoBlock title="OPT模式">
      <Input.OPT/>
    </DemoBlock>
    <DemoBlock title={`数字`}>
      <Input.Digit />
      <TaroInput type={`digit`} />
      <TaroInput type={`idcard`} />
    </DemoBlock>
  </View>
}
export default InputBase;

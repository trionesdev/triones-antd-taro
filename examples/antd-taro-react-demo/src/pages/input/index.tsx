import {View} from "@tarojs/components";
import {Input, Space} from "@trionesdev/antd-taro-react";
import {DemoBlock} from "../../components";

const InputBase = () => {
  return <View style={{backgroundColor: '#D5D5D5'}}>
    <DemoBlock title="基础用法" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input placeholder="请输入内容" value={'测试'}/>
      </View>
    </DemoBlock>
    <DemoBlock title="带清除按钮" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input placeholder="请输入内容" allowClear={true}/>
      </View>
    </DemoBlock>
    <DemoBlock title="密码模式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input.Password placeholder="请输入内容" allowClear={true}/>
      </View>
    </DemoBlock>
    <DemoBlock title="小数模式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input.Digit placeholder="请输入内容" allowClear={true}/>
      </View>
    </DemoBlock>
    <DemoBlock title="整数模式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input.Number placeholder="请输入内容" allowClear={true}/>
      </View>
    </DemoBlock>
    <DemoBlock title="对其方式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Space direction="vertical" block>
          <Input placeholder="文本内容对其"/>
          <Input placeholder="文本内容对其" align="end"/>
        </Space>
      </View>
    </DemoBlock>
    <DemoBlock title="OPT模式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input.OPT/>
      </View>
    </DemoBlock>
    <DemoBlock title="Textarea" styles={{body: {backgroundColor: '#D5D5D5'}}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Input.Textarea placeholder="请输入内容"/>
      </View>
    </DemoBlock>
    <DemoBlock title={`变体`}>
      <Space direction="vertical" block={true}>
        <Input variant="outlined" placeholder="outlined" value={'outlined'} allowClear={true}/>
        <Input variant="borderless" placeholder="borderless" value={'borderless'} allowClear={true}/>
        <Input variant="filled" placeholder="filled" value={'filled'} allowClear={true}/>
        <Input variant="underlined" placeholder="underlined" value={'underlined'} allowClear={true}/>
      </Space>
    </DemoBlock>
    <DemoBlock title={`TextArea变体`}>
      <Space direction="vertical" block={true}>
        <Input.Textarea variant="outlined" placeholder="outlined"/>
        <Input.Textarea variant="borderless" placeholder="borderless"/>
        <Input.Textarea variant="filled" placeholder="filled"/>
        <Input.Textarea variant="underlined" placeholder="underlined"/>
      </Space>
    </DemoBlock>
  </View>
}
export default InputBase;

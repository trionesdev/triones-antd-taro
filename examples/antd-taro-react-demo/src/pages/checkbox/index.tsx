import {  View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {Button, Checkbox} from "@trionesdev/antd-taro-react";
import {useState} from "react";

const CheckboxBase = () => {
  const [checked, setChecked] = useState(false)

  return <View>
    <DemoBlock title='基础用法'>
      <Checkbox checked={true}>苹果</Checkbox>
      <Checkbox checked={false}>香蕉</Checkbox>
    </DemoBlock>
    <DemoBlock title='默认选中'>
      <Checkbox checked={true}>苹果</Checkbox>
    </DemoBlock>
    <DemoBlock title='禁用'>
      <Checkbox checked={true} disabled={true}>苹果</Checkbox>
      <Checkbox checked={false} disabled={true}>香蕉</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox checked={true} shape={'button'}>苹果</Checkbox>
    </DemoBlock>

    <DemoBlock title='CheckboxGroup'>
      <Checkbox.Group defaultValue={['1']} options={[{label: '苹果', value: '1'}, {label: '香蕉', value: '2'}]}/>
    </DemoBlock>
    <DemoBlock title='CheckboxGroup'>
      <Checkbox.Group shape={'button'} defaultValue={['1']}
                      options={[{label: '苹果', value: '1'}, {label: '香蕉', value: '2'}]}/>
    </DemoBlock>
    <DemoBlock title='数据控制'>
      <Checkbox checked={checked}>香蕉</Checkbox>
      <Button onClick={() => setChecked(!checked)}>切换</Button>
    </DemoBlock>
  </View>
}
export default CheckboxBase

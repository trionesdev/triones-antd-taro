import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { Checkbox } from "@trionesdev/antd-taro-react";

const CheckboxBase = () => {
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
  </View>
}
export default CheckboxBase

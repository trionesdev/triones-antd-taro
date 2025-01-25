import {View} from "@tarojs/components";
import { Button } from "@trionesdev/antd-taro-react";

const ButtonBase = () => {
  return <View style={{padding: '8px'}}>
    <View>按钮类型</View>
    <View>
      <Button type={`primary`}>Primary</Button>
      <Button type={`default`}>Default</Button>
      <Button type={`dashed`}>Dashed</Button>
      <Button type={`text`}>Text</Button>
      <Button type={`link`}>Link</Button>
    </View>
  </View>
}
export default ButtonBase

import {View} from "@tarojs/components";
import {Button} from "@trionesdev/antd-taro-react";

const ButtonPage = () => {
  return <View>
    <View>按钮类型</View>
    <View>
      <Button block={true} type={`primary`} color={`primary`}>主要按钮</Button>
      <Button block={true} type={`default`}>次要按钮</Button>
      <Button block={true} type={`text`}>文本按钮</Button>
    </View>
    <View>带辅助文案按钮</View>
    <View>
      <Button block={true} type={`primary`} subText={`副标题`}>主要按钮</Button>
      <Button block={true} type={`default`} subText={`副标题`}>次要按钮</Button>
      <Button block={true} type={`text`} subText={`副标题`}>文本按钮</Button>
    </View>
    <View>禁用</View>
    <View>
      <Button block={true} type={`primary`} disabled={true}>主要按钮</Button>
      <Button block={true} type={`default`} disabled={true}>次要按钮</Button>
      <Button block={true} type={`text`} disabled={true}>文本按钮</Button>
    </View>
  </View>
}
export default ButtonPage

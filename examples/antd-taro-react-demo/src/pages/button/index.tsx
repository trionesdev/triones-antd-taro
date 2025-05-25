import {Button as TaroButton, View} from "@tarojs/components";
import {Button} from "@trionesdev/antd-taro-react";
import {DemoBlock} from "../../components";

const ButtonBase = () => {
  return <View style={{padding: '8px'}}>
    <DemoBlock title={`Taro`}>
      <TaroButton>按钮</TaroButton>
      <TaroButton size={`mini`}>按钮</TaroButton>
    </DemoBlock>
    <DemoBlock title={`按钮类型`}>
      <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button type={`primary`}>Primary</Button>
        <Button type={`default`}>Default</Button>
        <Button type={`dashed`}>Dashed</Button>
        <Button type={`text`}>Text</Button>
        <Button type={`link`}>Link</Button>
      </View>
    </DemoBlock>
    <DemoBlock title='颜色与变体'>
      <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
          <Button color={`default`} variant={`solid`}>Solid</Button>
          <Button color={`default`} variant={`outlined`}>Outlined</Button>
          <Button color={`default`} variant={`dashed`}>Dashed</Button>
          <Button color={`default`} variant={`filled`}>Filled</Button>
          <Button color={`default`} variant={`text`}>Text</Button>
          <Button color={`default`} variant={`link`}>Link</Button>
        </View>
        <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
          <Button color={`primary`} variant={`solid`}>Solid</Button>
          <Button color={`primary`} variant={`outlined`}>Outlined</Button>
          <Button color={`primary`} variant={`dashed`}>Dashed</Button>
          <Button color={`primary`} variant={`filled`}>Filled</Button>
          <Button color={`primary`} variant={`text`}>Text</Button>
          <Button color={`primary`} variant={`link`}>Link</Button>
        </View>
        <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
          <Button color={`danger`} variant={`solid`}>Solid</Button>
          <Button color={`danger`} variant={`outlined`}>Outlined</Button>
          <Button color={`danger`} variant={`dashed`}>Dashed</Button>
          <Button color={`danger`} variant={`filled`}>Filled</Button>
          <Button color={`danger`} variant={`text`}>Text</Button>
          <Button color={`danger`} variant={`link`}>Link</Button>
        </View>
      </View>
    </DemoBlock>
    <DemoBlock title='块级按钮'>
      <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button block={true} type='primary'>按钮</Button>
        <Button block={true} color='primary'>按钮</Button>
      </View>
    </DemoBlock>
    <DemoBlock title='禁用'>
      <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button type={`primary`} disabled>主要按钮</Button>
        <Button type={`default`} disabled>次要按钮</Button>
        <Button type={`text`} disabled>文本按钮</Button>
      </View>
    </DemoBlock>
    <DemoBlock title='危险'>
      <View style={{gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap'}}>
        <Button type={`primary`} danger>主要按钮</Button>
        <Button type={`default`} danger>次要按钮</Button>
        <Button type={`text`} danger>文本按钮</Button>
      </View>
    </DemoBlock>
  </View>
}
export default ButtonBase

import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {FloatButton} from "@trionesdev/antd-taro-react";

const FloatButtonPage =()=>{
  return <View>
    <DemoBlock title={`基础用法`}>
      <FloatButton type="primary" />
    </DemoBlock>
    <DemoBlock title="方形与描述">
      <FloatButton right={100} type="primary" shape="square" content="帮助" />
    </DemoBlock>
    <DemoBlock title="按钮组（菜单）">
      <FloatButton.Group right={200} trigger="click" type="primary" placement="top">
        <FloatButton icon={<span aria-label="search">🔍</span>} />
        <FloatButton icon={<span aria-label="edit">✎</span>} />
      </FloatButton.Group>
    </DemoBlock>
  </View>
}
export default FloatButtonPage

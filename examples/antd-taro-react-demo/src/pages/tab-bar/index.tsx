import {View} from "@tarojs/components";
import {FaceRecognitionOutline} from "@trionesdev/antd-taro-icons-react";
import {DemoBlock} from "../../components";
import { TabBar } from "@trionesdev/antd-taro-react";

const TabBarBase = ()=>{
  return <View>
    <DemoBlock title="基础用法">
      <TabBar
        items={[{ key: 'home', label: '首页', icon: <FaceRecognitionOutline /> }, { key: 'save', label: '收藏' }, { key: 'user-center', label: '我的' }]}
      />
    </DemoBlock >
  </View>
}
export default TabBarBase;

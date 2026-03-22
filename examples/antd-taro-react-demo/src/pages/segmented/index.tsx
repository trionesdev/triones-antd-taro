import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {Segmented} from "@trionesdev/antd-taro-react";

const SegmentedPage = () => {
  return (
    <View>
      <DemoBlock title={`基础用法`}>
        <Segmented
          options={[{label: '选项1', value: '1'}, {label: '选项2', value: '2'}, {label: '选项3', value: '3'}]}/>
      </DemoBlock>
      <DemoBlock title={`block 属性使其适合父元素宽度`}>
        <Segmented block
          options={[{label: '选项1', value: '1'}, {label: '选项2', value: '2'}, {label: '选项3', value: '3'}]}/>
      </DemoBlock>
    </View>
  )
}

export default SegmentedPage;

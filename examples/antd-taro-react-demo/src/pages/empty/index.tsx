
import { View } from "@tarojs/components";
import { Empty } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "../../components";
import { QuestionCircleOutline } from "@trionesdev/antd-taro-icons-react";

const DividerBase = () => {
  return <View>
    <DemoBlock title='基础用法'>
      <Empty />
    </DemoBlock>

    <DemoBlock title='描述文字'>
      <Empty description='暂无数据' />
    </DemoBlock>

    <DemoBlock title='自定义样式'>
      <Empty
        style={{ padding: '64px 0' }}
        imageStyle={{ width: 128 }}
        description='暂无数据'
      />
    </DemoBlock>

    <DemoBlock title='自定义图片'>
      <Empty
        style={{ padding: '64px 0' }}
        image={
          <QuestionCircleOutline
            style={{ color: '#ccc' }}
          />
        }
        description='暂无数据'
      />
    </DemoBlock>
  </View>
}
export default DividerBase

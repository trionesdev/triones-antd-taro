import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {Space, Tag} from "@trionesdev/antd-taro-react";
import {CheckOutline, CloseCircleOutline, DeleteOutline} from "@trionesdev/antd-mobile-icons-react";

const TagBase = () => {
  return <View>
    <DemoBlock title={`基本使用`}>
      <Space wrap>
        <Tag>Tag1</Tag>
        <Tag closeIcon>Prevent Default</Tag>
        <Tag closeIcon={<CloseCircleOutline/>}>Tag2</Tag>
        <Tag closeIcon={<DeleteOutline/>}>Tag3</Tag>
      </Space>
    </DemoBlock>
    <DemoBlock title="线框标签">
      <Space>
        <Tag fill="outline" color="default">
          Default
        </Tag>
        <Tag fill="outline" color="primary">
          Primary
        </Tag>
        <Tag fill="outline" color="success" icon={<CheckOutline/>}>
          Success
        </Tag>
        <Tag fill="outline" color="warning">
          Warning
        </Tag>
        <Tag fill="outline" color="danger">
          Danger
        </Tag>
      </Space>
    </DemoBlock>
    <DemoBlock title="语义标签">
      <Space>
        <Tag color="default">Default</Tag>
        <Tag color="primary">Primary</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="danger">Danger</Tag>
      </Space>
    </DemoBlock>
    <DemoBlock title="圆角标签">
      <Space>
        <Tag color="default" round>
          Default
        </Tag>
      </Space>
    </DemoBlock>
    <DemoBlock title="自定义颜色">
      <Space>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </Space>
    </DemoBlock>
  </View>
}
export default TagBase

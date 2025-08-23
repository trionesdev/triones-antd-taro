import { View } from "@tarojs/components";
import { DemoBlock } from "../../components";
import { NoticeBar, Space } from "@trionesdev/antd-taro-react";
import { CloseCircleOutline, SetOutline } from "packages/antd-mobile-icons-react";

const TabBarBase = () => {
  return <View>
    <DemoBlock title='通告栏语义' padding='0' background='transparent'>
        <Space block direction='vertical'>
          <NoticeBar content='默认' color='default' />
          <NoticeBar content='成功' color='success' />
          <NoticeBar content='警告' color='alert' />
          <NoticeBar content='错误' color='error' />
          <NoticeBar content='信息' color='info' />
        </Space>
      </DemoBlock>

      <DemoBlock title='可关闭' padding='0'>
        <NoticeBar content='这条通知可以关闭' color='alert' closeable />
      </DemoBlock>

      <DemoBlock title='多行展示' padding='0'>
        <NoticeBar
          content='适用于当前页面内信息的通知，是一种较醒目的页面内通知方式'
          wrap
          color='alert'
        />
      </DemoBlock>

      <DemoBlock title='自定义' padding='0' background='transparent'>
        <Space block direction='vertical'>
          <NoticeBar
            extra={<CloseCircleOutline style={{ fontSize: 18 }} />}
            icon={<SetOutline style={{ fontSize: 18 }} />}
            content={'自定义图标'}
          />
          <NoticeBar
            extra={
              <Space style={{ '--gap': '12px' }}>
                <span>查看详情</span>
                <span>关闭</span>
              </Space>
            }
            content={'自定义右侧功能区'}
            color='alert'
          />
          <div style={{ paddingInline: 12 }}>
            <NoticeBar
              color='info'
              shape='neutral'
              bordered
              content={'圆角+全边框'}
            />
          </div>
          <div style={{ paddingInline: 12 }}>
            <NoticeBar
              color='success'
              shape='rounded'
              bordered={false}
              content={'圆形+无边框'}
            />
          </div>
        </Space>
      </DemoBlock>
  </View>
}
export default TabBarBase;

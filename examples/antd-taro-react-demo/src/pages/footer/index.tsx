
import { View } from "@tarojs/components";
import { Footer, } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "../../components";

const FooterBase = () => {
  const links: any[] = [
    {
      text: '阿里云',
      href: 'https://www.aliyun.com/',
    },
    {
      text: '支付宝',
      href: 'https://www.antgroup.com/',
    },
  ]
  const chips: any[] = [
    {
      text: '蚂蚁借呗',
    },
    {
      text: '备用金',
    },
    {
      text: '蚂蚁花呗',
    },
  ]
  const chipsLinkData: any[] = [
    {
      text: '蚂蚁借呗',
      type: 'link',
    },
    {
      text: '备用金',
      type: 'link',
    },
    {
      text: '蚂蚁花呗',
      type: 'link',
    },
  ]

  const onChipClick = (item: any, index: number) => {
    console.log(item, index)
    alert(`${item?.text}被点击了`)
  }
  const onLinkClick = (item: any, index: number) => {
    console.log(item, index)
    alert(`跳转到${item?.href}`)
  }

  return <View>
    <DemoBlock title='基础页脚'>
      <Footer label='没有更多了'></Footer>
    </DemoBlock>
    <DemoBlock title='自定义 label'>
      <Footer
        label={
          <div>
            蚂蚁财富
          </div>
        }
      ></Footer>
    </DemoBlock>
    <DemoBlock title='带内容的页脚'>
      <Footer content='@ 2004-2020 Alipay.com All rights reserved'></Footer>
    </DemoBlock>
    <DemoBlock title='带链接的页脚'>
      <Footer
        links={[
          {
            text: '阿里云',
            href: 'https://www.aliyun.com/',
          },
        ]}
      ></Footer>
    </DemoBlock>
    <DemoBlock title='通过点击事件跳转'>
      <Footer links={links} onLinkClick={onLinkClick}></Footer>
    </DemoBlock>
    <DemoBlock title='带标签的页脚'>
      <Footer chips={chips}></Footer>
    </DemoBlock>
    <DemoBlock title='标签可点击'>
      <Footer chips={chipsLinkData} onChipClick={onChipClick}></Footer>
    </DemoBlock>
    <DemoBlock title='组合使用'>
      <Footer
        label='没有更多了'
        content='@ 2004-2020 Alipay.com All rights reserved'
        links={links}
        chips={chips}
      ></Footer>
    </DemoBlock>
  </View>
}

export default FooterBase

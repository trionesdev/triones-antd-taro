import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { Tabs } from "@trionesdev/antd-taro-react";

const TabsBase = () => {

  const items = [
    {
      key: '1',
      label: 'Tab1',
      children: <>1</>
    },
    {
      key: '2',
      label: 'Tab2',
      children: <>2</>
    }
  ]

  const items2 = [
    {
      key: '1',
      label: 'Tab1-测试',
      children: <>1</>
    },
    {
      key: '2',
      label: 'Tab2-测试',
      children: <>2</>
    },
    {
      key: '3',
      label: 'Tab3-测试',
      children: <>2</>
    },
    {
      key: '4',
      label: 'Tab4-测试',
      children: <>2</>
    },
    {
      key: '5',
      label: 'Tab5-测试',
      children: <>2</>
    },
    {
      key: '6',
      label: 'Tab6-测试',
      children: <>2</>
    }
  ]

  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基本使用`}>
      <Tabs items={items}/>
    </DemoBlock>
    <DemoBlock title={`滚动`}>
      <Tabs items={items2} stretch={false} />
    </DemoBlock>
    <DemoBlock title={`Tab`}>
      <Tabs stretch={false} >
        <Tabs.Tab key={`1`} label={`Tab1`}>
          <div>1</div>
        </Tabs.Tab>
        <Tabs.Tab key={`2`} label={`Tab2`}>
          <div>2</div>
        </Tabs.Tab>
      </Tabs>
    </DemoBlock>
  </View>
}
export default TabsBase

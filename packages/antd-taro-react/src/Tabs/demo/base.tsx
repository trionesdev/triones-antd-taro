import React from "react"
import {Tabs} from "../tabs";
import {DemoBlock} from "../../DemoBlock";

export default () => {
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
  return <>
    <DemoBlock title={`基本使用`}>
      <Tabs items={items}/>
    </DemoBlock>
    <DemoBlock title={`Size`}>
      <Tabs size={`small`} items={items} stretch={false} />
    </DemoBlock>
    <DemoBlock title={`滚动`}>
      <Tabs items={items2} stretch={false} />
    </DemoBlock>
  </>
}

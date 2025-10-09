import {View} from "@tarojs/components";
import {useState} from "react";
import {DemoBlock} from "../../components";
import {Space, Switch} from "@trionesdev/antd-taro-react";
import {CheckOutline, CloseOutline} from "@trionesdev/antd-mobile-icons-react";

const SwitchBase = () => {
  const [checked, setChecked] = useState(false)
  return <View>
    <DemoBlock title='基础用法'>
      <Switch/>
    </DemoBlock>

    <DemoBlock title='有默认值'>
      <Switch defaultChecked/>
    </DemoBlock>

    <DemoBlock title='文字和图标'>
      <Space wrap>
        <Switch uncheckedText='关' checkedText='开'/>
        <Switch
          checkedText={<CheckOutline style={{fontSize: 12}}/>}
          uncheckedText={<CloseOutline style={{fontSize: 12}}/>}
        />
        <Switch uncheckedText='0' checkedText='1'/>
      </Space>
    </DemoBlock>

    <DemoBlock title='自定义样式'>
      <Switch
        defaultChecked
        style={{}}
      />
    </DemoBlock>

    <DemoBlock title='禁用状态'>
      <Space>
        <Switch disabled/>
        <Switch disabled defaultChecked/>
      </Space>
    </DemoBlock>

    <DemoBlock title='加载状态'>
      <Switch loading/>
    </DemoBlock>

    <DemoBlock title='异步'>
      <Space wrap>
        <Switch
          checked={checked}
          onChange={async val => {
            await mockRequest()
            setChecked(val)
          }}
        />
      </Space>
    </DemoBlock>
  </View>
}
export default SwitchBase;

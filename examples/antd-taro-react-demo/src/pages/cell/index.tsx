import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {Cell} from "@trionesdev/antd-taro-react";
import {RightOutline} from "@trionesdev/antd-mobile-icons-react";

const CellBase = () => {
  return <View>
    <DemoBlock title='基础用法'>
      <Cell label={'Label'}>描述文字</Cell>
    </DemoBlock>
    <DemoBlock title='基础用法,占位'>
      <Cell label={'Label'} placeholder={'描述文字'}></Cell>
    </DemoBlock>
    <DemoBlock title='基础用法,Align'>
      <Cell label={'Label'} labelAlign={`left`} wrapperAlign={`right`}>描述文字</Cell>
    </DemoBlock>
    <DemoBlock title='基础用法,Group'>
      <Cell.Group wrapperAlign={`right`}>
        <Cell label={'Label'}>描述文字1</Cell>
        <Cell label={'Label'}>描述文字2</Cell>
      </Cell.Group>
    </DemoBlock>
    <DemoBlock title='基础用法,Group'>
      <Cell.Group wrapperAlign={`right`} extra={<View style={{fontSize: 14, color: '#999'}}><RightOutline/></View>}>
        <Cell label={'Label'}>描述文字1</Cell>
        <Cell label={'Label'}>描述文字2</Cell>
      </Cell.Group>
    </DemoBlock>
  </View>
}

export default CellBase;

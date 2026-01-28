import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {DatePicker} from "@trionesdev/antd-taro-react";

const DatePickerPage = ()=>{
  return <View>
    <DemoBlock title='基础用法'>
      <DatePicker placeholder='请选择日期' />
    </DemoBlock>
    <DemoBlock title='基础用法'>
      <DatePicker placeholder='请选择日期' showTime={true}/>
    </DemoBlock>
  </View>
}
export default DatePickerPage

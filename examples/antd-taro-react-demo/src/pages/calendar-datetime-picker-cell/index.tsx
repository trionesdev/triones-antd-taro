import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {CalendarDatetimePickerCell} from "@trionesdev/antd-taro-react";

const CalendarDatetimePickerCellBase = () => {

  return <View>
    <DemoBlock title={`基础用法`}>
      <CalendarDatetimePickerCell placeholder={'日历时间选择'} arrow={true}/>
    </DemoBlock>

  </View>
}
export default CalendarDatetimePickerCellBase;

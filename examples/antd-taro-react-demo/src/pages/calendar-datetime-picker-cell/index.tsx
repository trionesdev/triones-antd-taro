import { View } from "@tarojs/components";
import { DemoBlock } from "../../components";
import { CalendarDatetimePickerCell } from "@trionesdev/antd-taro-react";

const CalendarDatetimePickerCellBase = () => {

  return <View>
    <DemoBlock title={`基础用法`}>
      <CalendarDatetimePickerCell label={'日历时间选择'} wrapperAlign="right" />
    </DemoBlock>

  </View>
}
export default CalendarDatetimePickerCellBase;

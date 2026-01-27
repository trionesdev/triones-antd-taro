import { View } from "@tarojs/components";
import { DemoBlock } from "../../components";
import { CalendarDatetimePicker, Cell } from "@trionesdev/antd-taro-react";

const CalendarDatetimePickerBase = () => {

  return <View>
    <DemoBlock title={`基础用法`}>
      <Cell label={'日历时间选择'} wrapperAlign="right">
        <CalendarDatetimePicker align="right" />
      </Cell>
    </DemoBlock>

  </View>
}
export default CalendarDatetimePickerBase;

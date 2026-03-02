import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {CalendarPickerCell} from "@trionesdev/antd-taro-react";

const CalendarPickerCellPage = () => {
  return <View>
    <DemoBlock title={`日历选择`}>
      <CalendarPickerCell label={`选谁日期`} wrapperAlign="right"/>
    </DemoBlock>
    <DemoBlock title={`日历选择(区间)`}>
      <CalendarPickerCell.Range label={`选谁日期区间`} wrapperAlign="right"/>
    </DemoBlock>
  </View>
}
export default CalendarPickerCellPage;

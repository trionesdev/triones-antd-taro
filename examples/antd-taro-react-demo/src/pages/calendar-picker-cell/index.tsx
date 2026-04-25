import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {CalendarPickerCell} from "@trionesdev/antd-taro-react";

const CalendarPickerCellPage = () => {
  return <View>
    <DemoBlock title={`日历选择`}>
      <CalendarPickerCell placeholder={`选谁日期`} arrow={true}/>
    </DemoBlock>
    <DemoBlock title={`日历选择(区间)`}>
      <CalendarPickerCell.Range placeholder={`选谁日期区间`} arrow={true}/>
    </DemoBlock>
  </View>
}
export default CalendarPickerCellPage;

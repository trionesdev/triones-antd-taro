import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {CalendarPickerCell} from "@trionesdev/antd-taro-react";
import dayjs from "dayjs";
import {Button} from "@trionesdev/antd-taro-react";
import {useState} from "react";

const CalendarPickerCellPage = () => {
  const [value, setValue] = useState(dayjs('2021-01-01'));
  const [value2, setValue2] = useState([dayjs('2021-01-01'), dayjs('2021-01-02')]);
  return <View>
    <DemoBlock title={`日历选择`}>
      <CalendarPickerCell placeholder={`选谁日期`} arrow={true}/>
    </DemoBlock>
    <DemoBlock title={`日历选择(区间)`}>
      <CalendarPickerCell.Range placeholder={`选谁日期区间`} arrow={true}/>
    </DemoBlock>
    <DemoBlock title={`日历选择-设置值`}>
      <CalendarPickerCell value={value} placeholder={`选谁日期`} arrow={true}/>
      <>
        <Button block={true} type='primary' onClick={() => {
          setValue(dayjs('2022-01-01'));
        }}>设置值</Button></>
    </DemoBlock>
    <DemoBlock title={`日历选择(区间)-设置值`}>
      <CalendarPickerCell.Range placeholder={`选谁日期区间`} value={value2} arrow={true}/>
      <Button block={true} type='primary' onClick={() => {
        setValue2([dayjs('2021-01-01'), dayjs('2021-01-05')]);
      }}>设置值</Button>
    </DemoBlock>
  </View>
}
export default CalendarPickerCellPage;

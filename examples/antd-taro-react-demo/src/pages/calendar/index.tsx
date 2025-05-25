import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { Calendar,CalendarGrid,TouchableCalendarGrid } from "@trionesdev/antd-taro-react";

const CalendarBase = () => {
  return <View>
    <DemoBlock title={`基本使用`}>
      <Calendar/>
    </DemoBlock>
    <DemoBlock title="日历网格">
      <CalendarGrid/>
    </DemoBlock>
    <DemoBlock title="日历网格(区间选择)">
      <CalendarGrid range={true} />
    </DemoBlock>
    <DemoBlock title={`可手势上下滑动的日历网格(PC端鼠标按住上下拖拽)`}>
      <TouchableCalendarGrid/>
    </DemoBlock>
  </View>
}
export default CalendarBase;

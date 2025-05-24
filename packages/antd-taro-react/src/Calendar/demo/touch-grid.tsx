import React from "react";
import {DemoBlock} from "../../DemoBlock";
import {TouchableCalendarGrid} from "@trionesdev/antd-taro-react";


export default () => {
  return <DemoBlock title={`可手势上下滑动的日历网格(PC端鼠标按住上下拖拽)`}>
    <TouchableCalendarGrid/>
  </DemoBlock>
}

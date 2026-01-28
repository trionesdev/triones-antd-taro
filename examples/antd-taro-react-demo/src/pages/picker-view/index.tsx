import {DemoBlock} from "../../components";
import {PickerView} from "@trionesdev/antd-taro-react";

const PickerViewBase = () => {

  const basicColumns = [
    [
      {label: '周一', value: 'Mon'},
      {label: '周二', value: 'Tues'},
      {label: '周三', value: 'Wed'},
      {label: '周四', value: 'Thur'},
      {label: '周五', value: 'Fri'},
    ],
    [
      {label: '上午', value: 'am'},
      {label: '下午', value: 'pm'},
    ],
  ]
  return <>
    <DemoBlock title={`基本使用`}>
      <PickerView columns={basicColumns}    />
    </DemoBlock>
  </>
}
export default PickerViewBase;

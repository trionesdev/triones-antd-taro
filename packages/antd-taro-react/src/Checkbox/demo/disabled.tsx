import {Checkbox} from "@trionesdev/antd-taro-react";

export default () => {
  return <div>
    <div>
      <Checkbox checked={true} disabled={true}>苹果</Checkbox>
      <Checkbox checked={false} disabled={true}>香蕉</Checkbox>
    </div>
    <div>
      <Checkbox checked={true} shape={'button'} disabled={true}>苹果</Checkbox>
    </div>
  </div>
}

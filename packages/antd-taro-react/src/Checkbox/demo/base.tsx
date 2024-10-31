import {Checkbox} from "@trionesdev/antd-taro-react";
import React from "react";

export default () => {
  return <div>
    <div>
      <Checkbox checked={true}>苹果</Checkbox>
      <Checkbox checked={false}>香蕉</Checkbox>
    </div>
    <div>
      <Checkbox checked={true} shape={'button'}>苹果</Checkbox>
    </div>
  </div>
}

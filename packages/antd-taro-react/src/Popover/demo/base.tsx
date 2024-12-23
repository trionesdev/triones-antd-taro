import Popover from "@trionesdev/antd-taro-react/Popover";
import Button from "@trionesdev/antd-taro-react/Button";
import React from "react";

export default () => {

  const overlay = <div>
    tooltip的内容
    <Popover overlay={<div>test</div>} trigger="hover" placement="right">
      <Button>hover上来</Button>
    </Popover>
  </div>
  function onVisibleChange(vis: boolean){
    console.log('---onVisibleChange--', vis)
  }
  return <Popover classNames="test007" overlayClassName="test008" overlay={overlay} trigger="click" onVisibleChange={onVisibleChange}>
    <Button type="primary">嵌套的</Button>
  </Popover>
}
import Popover from "@trionesdev/antd-taro-react/Popover";
import React from "react";

export default () => {
  return <Popover overlay={<span>tooltip</span>}>
    <span>hover</span>
  </Popover>
}
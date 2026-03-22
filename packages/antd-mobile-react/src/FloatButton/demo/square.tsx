import React from "react"
import {DemoBlock} from "../../DemoBlock";
import FloatButton from "../index";

export default () => {
  return (
    <div>

      <DemoBlock title="方形与描述">
        <FloatButton type="primary" shape="square" content="帮助" />
      </DemoBlock>
    </div>
  )
}

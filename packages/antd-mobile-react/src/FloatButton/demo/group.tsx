import React from "react"
import {DemoBlock} from "../../DemoBlock";
import FloatButton from "../index";

export default () => {
  return (
    <div>
      <DemoBlock title="按钮组（菜单）">
        <FloatButton.Group trigger="click" type="primary" placement="top">
          <FloatButton icon={<span aria-label="search">🔍</span>} />
          <FloatButton icon={<span aria-label="edit">✎</span>} />
        </FloatButton.Group>
      </DemoBlock>
    </div>
  )
}

import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Button from "../../Button";
import Toast from "../index";

export default () => {
  return <>
    <DemoBlock title={`基础用法`}>
      <Button onClick={()=>{
        Toast.show({})
      }}>轻提示</Button>
    </DemoBlock>
  </>
}

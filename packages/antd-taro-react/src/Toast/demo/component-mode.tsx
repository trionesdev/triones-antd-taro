import React, {useEffect, useState} from "react"
import {DemoBlock} from "../../DemoBlock";
import Toast from "../index";
import {Button} from "../../index";

export default () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log('open', open)
  }, [open]);

  return <div>
    <DemoBlock title={`组件模式`}>
      <Toast open={open}
             afterOpenChange={(open) => setOpen(open)}
             content={'轻提示'}/>
      <Button onClick={() => setOpen(true)}>轻提示</Button>
    </DemoBlock>
  </div>
}

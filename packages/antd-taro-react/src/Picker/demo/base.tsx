import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {Picker} from "../picker";
import Button from "../../Button";

export default () => {
  const [open, setOpen] = React.useState(false);
  return <>
    <DemoBlock title={`基本使用`}>
      <Picker open={open}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>选择</Button>
    </DemoBlock>
  </>
}

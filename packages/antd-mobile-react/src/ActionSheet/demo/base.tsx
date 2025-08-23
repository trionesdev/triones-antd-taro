import React from "react";
import {DemoBlock} from "../../DemoBlock";
import ActionSheet from "../index";
import Button from "../../Button";

export default () => {
  const [open, setOpen] = React.useState(false);
  return <div>
    <DemoBlock title={`基本使用`}>
      <ActionSheet open={open} afterOpenChange={(o) => {
        setOpen(o)
      }}
                   title={`操作面板`}
                   actions={[{
        key: '1', children: <>操作A</>, onClick: () => {
        }
      },
        {
          key: '2', children: <>操作B</>, onClick: () => {
          }
        }
      ]}/>
      <Button block={true} onClick={() => {
        setOpen(true)
      }}>打开操作面板</Button>
    </DemoBlock>
  </div>
}

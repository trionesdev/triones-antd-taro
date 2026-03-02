import React, { useState } from 'react';
import { DemoBlock } from '../../DemoBlock';
import { Button, Overlay } from '../../index';

export default ()=>{
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DemoBlock title={`基本使用`}>
        <Button onClick={() => setOpen(true)}>点击按钮显示遮罩层</Button>
        <Overlay open={open} onClick={() => setOpen(false)} />
      </DemoBlock>
    </div>
  );
}

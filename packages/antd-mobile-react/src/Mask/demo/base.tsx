import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import { Button } from '../../index';
import Mask from '../index';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <DemoBlock title={`基本使用`}>
        <Mask
          open={open}
          maskClosable={true}
          onMaskClick={() => {
            setOpen(false);
          }}
        />
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          打开
        </Button>
      </DemoBlock>
    </>
  );
};

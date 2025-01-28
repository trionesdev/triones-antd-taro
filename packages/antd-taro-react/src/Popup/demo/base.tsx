/**
 * compact: true
 */
import {DemoBlock} from '../../DemoBlock';
import React from 'react';
import Button from "../../Button";
import Popup from "../index";

export default () => {
  const [topOpen, setTopOpen] = React.useState(false);
  return (
    <>
      <DemoBlock title="基础用法">
        <Popup open={topOpen} >
          顶部
        </Popup>
        <Button onClick={()=>{
          setTopOpen(true)
        }}>顶部弹出</Button>
      </DemoBlock>
    </>
  );
};

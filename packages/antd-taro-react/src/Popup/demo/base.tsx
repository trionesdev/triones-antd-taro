/**
 * compact: true
 */
import {DemoBlock} from '../../DemoBlock';
import React, {useEffect} from 'react';
import Button from "../../Button";
import Popup from "../index";

export default () => {
  const [topOpen, setTopOpen] = React.useState(false);

  useEffect(()=>{
    console.log("topOpen",topOpen)
  },[topOpen])
  return (
    <>
      <DemoBlock title="基础用法">
        <Popup open={topOpen} afterOpenChange={(o)=>{
          setTopOpen(o);
        }} >
          顶部
        </Popup>
        <Button onClick={()=>{
          setTopOpen(true)
        }}>顶部弹出</Button>
      </DemoBlock>
    </>
  );
};

/**
 * compact: true
 */
import {DemoBlock} from '../../DemoBlock';
import React, {useEffect} from 'react';
import Button from "../../Button";
import Popup from "../index";

export default () => {
  const [topOpen, setTopOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);

  useEffect(() => {
    console.log("topOpen", topOpen)
  }, [topOpen])
  return (
    <>
      <DemoBlock title="基础用法">
        <Popup open={topOpen} destroyOnClose={true} afterOpenChange={(o) => {
          setTopOpen(o);
        }}>
          顶部
        </Popup>
        <Button onClick={() => {
          setTopOpen(true)
        }}>顶部弹出</Button>

        <Popup open={bottomOpen} position={`bottom`} afterOpenChange={(o) => {
          setBottomOpen(o);
        }}>
          底部部
        </Popup>
        <Button onClick={() => {
          setBottomOpen(true)
        }}>底部部弹出</Button>
      </DemoBlock>
    </>
  );
};

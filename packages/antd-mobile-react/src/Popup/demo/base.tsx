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
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);

  useEffect(() => {
    console.log("topOpen", topOpen)
  }, [topOpen])
  return (
    <>
      <DemoBlock title="基础用法">
        <Popup open={topOpen}
               destroyOnClose={true}
               onClose={() => {
                 setTopOpen(false);
               }}

               maskClosable={true}>
          <div style={{minHeight: "200px"}}>
            顶部弹出
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setTopOpen(true)
        }}>顶部弹出</Button>

        <Popup open={bottomOpen} position={`bottom`} closable={true} onClose={() => {
          setBottomOpen(false);
        }}>
          <div style={{minHeight: "200px"}}>
            底部弹出
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setBottomOpen(true)
        }}
        >底部弹出</Button>

        <Popup open={leftOpen} position={`left`}
               onClose={() => {
                 setLeftOpen(false);
               }}
        >
          <div style={{minWidth: "200px"}}>
            左部弹出
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setLeftOpen(true)
        }}>左部弹出</Button>
        <Popup open={rightOpen} position={`right`} onClose={() => {
          setRightOpen(false);
        }}>
          <div style={{minWidth: "200px"}}>
            右部弹出
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setRightOpen(true)
        }}
        >右部弹出</Button>
      </DemoBlock>
    </>
  );
};

/**
 * compact: true
 */
import {DemoBlock} from '../../DemoBlock';
import React, {useEffect} from 'react';
import Button from "../../Button";
import Popup from "../index";

export default () => {
  const [defaultOpen, setDefaultOpen] = React.useState(false);
  const [topOpen, setTopOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);
  const [centerOpen, setCenterOpen] = React.useState(false);
  const [roundOpen, setRoundOpen] = React.useState(false);
  const [closeIconOpen, setCloseIconOpen] = React.useState(false);


  return (
    <>
      <DemoBlock title={`基本使用`}>
        <Popup
          open={defaultOpen}
          title="标题"
          closable={true}
          afterClose={() => {
            setDefaultOpen(false);
          }}
        >
          <div style={{ minHeight: '200px' }}>基础弹窗</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setDefaultOpen(true);
          }}
        >
          基础弹窗
        </Button>
      </DemoBlock>
      <DemoBlock title="弹出位置">
        <Popup
          open={topOpen}
          destroyOnHidden={true}
          position={`top`}
          afterClose={() => {
            setTopOpen(false);
          }}
        >
          <div style={{ minHeight: '200px' }}>顶部弹出</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setTopOpen(true);
          }}
        >
          顶部弹出
        </Button>

        <Popup
          open={bottomOpen}
          position={`bottom`}
          closable={true}
          afterClose={() => {
            setBottomOpen(false);
          }}
        >
          <div style={{ minHeight: '200px' }}>底部弹出</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setBottomOpen(true);
          }}
        >
          底部弹出
        </Button>

        <Popup
          open={leftOpen}
          position={`left`}
          afterClose={() => {
            setLeftOpen(false);
          }}
        >
          <div style={{ minWidth: '200px' }}>左部弹出</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setLeftOpen(true);
          }}
        >
          左部弹出
        </Button>
        <Popup
          open={rightOpen}
          position={`right`}
          afterClose={() => {
            setRightOpen(false);
          }}
        >
          <div style={{ minWidth: '200px' }}>右部弹出</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setRightOpen(true);
          }}
        >
          右部弹出
        </Button>
        <Popup
          open={centerOpen}
          position={`center`}
          afterClose={() => {
            setCenterOpen(false);
          }}
        >
          <div style={{ minWidth: '200px', minHeight: '200px' }}>
            居中弹出
          </div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setCenterOpen(true);
          }}
        >
          居中弹出
        </Button>
      </DemoBlock>
      <DemoBlock title={`圆角`}>
        <Popup
          open={roundOpen}
          round={true}
          afterClose={() => {
            setRoundOpen(false);
          }}
        >
          <div style={{ minHeight: '200px' }}>圆角弹窗</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setRoundOpen(true);
          }}
        >
          圆角弹窗
        </Button>
      </DemoBlock>
      <DemoBlock title={`关闭图标`}>
        <Popup
          open={closeIconOpen}
          round={true}
          closable={true}
          afterClose={() => {
            setCloseIconOpen(false);
          }}
        >
          <div style={{ minHeight: '200px' }}>圆角弹窗</div>
        </Popup>
        <Button
          block={true}
          onClick={() => {
            setCloseIconOpen(true);
          }}
        >
          关闭图标
        </Button>
      </DemoBlock>
    </>
  );
};

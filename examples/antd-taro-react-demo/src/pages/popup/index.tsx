import {View} from "@tarojs/components";
import {Button, Popup} from "@trionesdev/antd-taro-react";
import React from "react";
import {DemoBlock} from "../../components";

const PopupBase = () => {
  const [defaultOpen, setDefaultOpen] = React.useState(false);
  const [topOpen, setTopOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);
  const [centerOpen, setCenterOpen] = React.useState(false);
  const [roundOpen, setRoundOpen] = React.useState(false);
  const [closeIconOpen, setCloseIconOpen] = React.useState(false);
  const [heightOpen, setHeightOpen] = React.useState(false);


  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基本使用`}>
      <Popup open={defaultOpen}
             title="标题"
             closable={true}
             afterClose={() => {
               setDefaultOpen(false);
             }}
             onClose={() => {
               setDefaultOpen(false)
             }}
      >
        <View style={{minHeight: "200px"}}>
          基础弹窗
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setDefaultOpen(true)
      }}>基础弹窗</Button>
    </DemoBlock>
    <DemoBlock title="弹出位置">
      <Popup open={topOpen} destroyOnHidden={true} onClose={() => {
        setTopOpen(false);
      }}>
        <View style={{minHeight: "200px"}}>
          顶部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setTopOpen(true)
      }}>顶部弹出</Button>

      <Popup open={bottomOpen} position={`bottom`} closable={true} onClose={() => {
        setBottomOpen(false);
      }}>
        <View style={{minHeight: "200px"}}>
          底部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setBottomOpen(true)
      }}>底部弹出</Button>

      <Popup open={leftOpen} position={`left`} onClose={() => {
        setLeftOpen(false);
      }}>
        <View style={{minWidth: "200px"}}>
          左部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setLeftOpen(true)
      }}>左部弹出</Button>
      <Popup open={rightOpen} position={`right`} onClose={() => {
        setRightOpen(false);
      }}>
        <View style={{minWidth: "200px"}}>
          右部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setRightOpen(true)
      }}>右部弹出</Button>
      <Popup open={centerOpen} position={`center`} onClose={() => {
        setCenterOpen(false);
      }}>
        <View style={{minWidth: "200px", minHeight: "200px"}}>
          居中弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setCenterOpen(true)
      }}>居中弹出</Button>
    </DemoBlock>
    <DemoBlock title={`圆角`}>
      <Popup open={roundOpen} round={true} onClose={() => {
        setRoundOpen(false);
      }}>
        <View style={{minHeight: "200px"}}>
          圆角弹窗
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setRoundOpen(true)
      }}>圆角弹窗</Button>
    </DemoBlock>
    <DemoBlock title={`关闭图标`}>
      <Popup open={closeIconOpen} round={true} closable={true} onClose={() => {
        setCloseIconOpen(false);
      }}>
        <View style={{minHeight: "200px"}}>
          圆角弹窗
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setCloseIconOpen(true)
      }}>关闭图标</Button>
    </DemoBlock>
    <DemoBlock title={`带高度设置`}>
      <Popup open={heightOpen} round={true} height={300} closable={true} onClose={() => {
        setHeightOpen(false);
      }}>
        <View>
          高度300
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setHeightOpen(true)
      }}>带高度设置</Button>
    </DemoBlock>

  </View>
}
export default PopupBase

import {View} from "@tarojs/components";
import {Button, Popup} from "@trionesdev/antd-taro-react";
import React from "react";
import {DemoBlock} from "../../components";

const PopupBase = () => {
  const [topOpen, setTopOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);

  return <View style={{padding: '8px'}}>
    <DemoBlock title="基础用法">
      <Popup open={topOpen} destroyOnClose={true} afterOpenChange={(o) => {
        setTopOpen(o);
      }}>
        <View style={{minHeight: "200px"}}>
          顶部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setTopOpen(true)
      }}>顶部弹出</Button>

      <Popup open={bottomOpen} position={`bottom`} closable={true} afterOpenChange={(o) => {
        setBottomOpen(o);
      }}>
        <View style={{minHeight: "200px"}}>
          底部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setBottomOpen(true)
      }}>底部弹出</Button>

      <Popup open={leftOpen} position={`left`} afterOpenChange={(o) => {
        setLeftOpen(o);
      }}>
        <View style={{minWidth: "200px"}}>
          左部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setLeftOpen(true)
      }}>左部弹出</Button>
      <Popup open={rightOpen} position={`right`} afterOpenChange={(o) => {
        setRightOpen(o);
      }}>
        <View style={{minWidth: "200px"}}>
          右部弹出
        </View>
      </Popup>
      <Button block={true} onClick={() => {
        setRightOpen(true)
      }}>右部弹出</Button>
    </DemoBlock>
  </View>
}
export default PopupBase

import {View} from "@tarojs/components";
import {Button, Popup } from "@trionesdev/antd-taro-react";
import React from "react";

const PopupBase = () => {
  const [topOpen, setTopOpen] = React.useState(false);

  return <View style={{padding: '8px'}}>
    <View>弹框</View>
    <View>
      <Popup open={topOpen} afterOpenChange={(o)=>{
        setTopOpen(o);
      }} >
        顶部
      </Popup>
      <Button onClick={()=>{
        setTopOpen(true)
        console.log("body",document.body)
      }}>顶部弹出</Button>
    </View>
  </View>
}
export default PopupBase

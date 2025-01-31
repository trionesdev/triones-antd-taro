import {View} from "@tarojs/components";
import {Button, Popup} from "@trionesdev/antd-taro-react";
import React from "react";
import {DemoBlock} from "../../components";

const PopupBase = () => {
  const [topOpen, setTopOpen] = React.useState(false);

  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基本使用`}>
      <View>
        <Popup open={topOpen} destroyOnClose={true} afterOpenChange={(o) => {
          setTopOpen(o);
        }}>
          顶部
        </Popup>
        <Button onClick={() => {
          setTopOpen(true)
          console.log("body", document.body)
        }}>顶部弹出</Button>
      </View>
    </DemoBlock>
  </View>
}
export default PopupBase

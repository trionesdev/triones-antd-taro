import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { Button, Toast } from "@trionesdev/antd-taro-react";

const ToastBase = ()=>{

  return <View style={{padding: '8px'}}>
    <DemoBlock title={`基础用法`}>
      <Button onClick={()=>{
        Toast.show({})
        console.log(document.getElementsByTagName("page"))
      }}>轻提示</Button>
    </DemoBlock>
  </View>
}
export default ToastBase;

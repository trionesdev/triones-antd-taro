import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {ImagesWall} from "@trionesdev/antd-taro-react";


const ImagesWallBase = () => {
  return <View>
    <DemoBlock title={`基本用法`}>
      <ImagesWall/>
    </DemoBlock>
    <DemoBlock title={`基本用法（赋值）`}>
      <ImagesWall value={[
        {url:'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80'},
        {url:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
        {url:'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80'}
      ]} preview={true}/>
    </DemoBlock>
  </View>
}
export default ImagesWallBase;

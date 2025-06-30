import {View} from "@tarojs/components";
import { DemoBlock } from "src/components";
import {Swiper} from "@trionesdev/antd-taro-react";

const SwiperBase = ()=>{
  return <View>
    <DemoBlock title="基础用法">
      <Swiper height={150} items={[
        {content: <div style={{height:'100%',width:'100%',background:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>1</div>},
        {content: <div style={{height:'100%',width:'100%',background:'green',display:'flex',justifyContent:'center',alignItems:'center'}}>2</div>},
        {content: <div style={{height:'100%',width:'100%',background:'yellow',display:'flex',justifyContent:'center',alignItems:'center'}}>3</div>},
        {content: <div style={{height:'100%',width:'100%',background:'blue',display:'flex',justifyContent:'center',alignItems:'center'}}>4</div>},
      ]}/>
    </DemoBlock>
  </View>
}
export default SwiperBase;

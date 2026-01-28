import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Swiper from "../index";
import Image from "../../Image";

export default ()=>{
  return <>
    <DemoBlock title={`基本使用`}>
      <Swiper height={150} items={[
        {children: <div style={{height:'100%',width:'100%',background:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>1</div>},
        {children: <div style={{height:'100%',width:'100%',background:'green',display:'flex',justifyContent:'center',alignItems:'center'}}>2</div>},
        {children: <div style={{height:'100%',width:'100%',background:'yellow',display:'flex',justifyContent:'center',alignItems:'center'}}>3</div>},
        {children: <div style={{height:'100%',width:'100%',background:'blue',display:'flex',justifyContent:'center',alignItems:'center'}}>4</div>},
      ]}/>
    </DemoBlock>
    <DemoBlock title={`基本使用纵向`}>
      <Swiper height={150} direction={'vertical'} items={[
        {children: <div style={{height:'100%',width:'100%',background:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>1</div>},
        {children: <div style={{height:'100%',width:'100%',background:'green',display:'flex',justifyContent:'center',alignItems:'center'}}>2</div>},
        {children: <div style={{height:'100%',width:'100%',background:'yellow',display:'flex',justifyContent:'center',alignItems:'center'}}>3</div>},
        {children: <div style={{height:'100%',width:'100%',background:'blue',display:'flex',justifyContent:'center',alignItems:'center'}}>4</div>},
      ]}/>
    </DemoBlock>
    <DemoBlock title={`基本使用纵向`}>
      <Swiper height={150}>
        <Swiper.Item>
          <Image width={'100%'} height={`100%`} src={`https://storage.360buyimg.com/jdc-article/fristfabu.jpg`} />
        </Swiper.Item>
        <Swiper.Item>
          <Image width={'100%'} height={`100%`} src={`https://storage.360buyimg.com/jdc-article/welcomenutui.jpg`} />
        </Swiper.Item>
        <Swiper.Item>
          <Image width={'100%'} height={`100%`} src={`https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg`} />
        </Swiper.Item>
      </Swiper>
    </DemoBlock>
  </>
}

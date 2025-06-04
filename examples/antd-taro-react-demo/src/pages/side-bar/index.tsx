import {ScrollView, View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {SideBar} from "@trionesdev/antd-taro-react";
import {useEffect, useRef} from "react";
const taroExtend = require('@tarojs/extend');

const SideBarPage = () => {
  const scrollRef = useRef<any>();

  useEffect(() => {
    taroExtend.$(scrollRef.current).on('scroll',  (e) => {
      console.log('scroll', e);
    });
  }, []);


  return <View>
    <DemoBlock title='滚动模式'>
      <view style={{height: 300}}>
        <SideBar mode={'scroll'}
                 items={[
                   {key: '1', title: 'Tab 1', content: <div style={{height: 400}}>Tab 1 Content</div>},
                   {key: '2', title: 'Tab 2', content: <div style={{height: 500}}>Tab 2 Content</div>},
                   {key: '3', title: 'Tab 3', content: <div style={{height: 300}}>Tab 3 Content</div>},
                   {key: '4', title: 'Tab 4', content: <div style={{height: 600}}>Tab 4 Content</div>},
                   {key: '5', title: 'Tab 5', content: <div style={{height: 700}}>Tab 5 Content</div>},
                 ]}
        />
      </view>
    </DemoBlock>
    <View>sssssssssssssssss</View>
    <DemoBlock title={`scroll`}>
      <View ref={scrollRef} style={{height: 300,overflow: 'auto'}} >
        <View style={{height: 600}}>
          sssss
        </View>
      </View>
    </DemoBlock>
  </View>
}
export default SideBarPage;

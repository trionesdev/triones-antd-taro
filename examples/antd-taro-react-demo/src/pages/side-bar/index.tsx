import {ScrollView, View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {SideBar} from "@trionesdev/antd-taro-react";

const SideBarPage = () => {
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
    <DemoBlock title={`ss`}>
      <View  >
        <View style={{height: 600}}>
          sssss
        </View>
      </ScrollView>
    </DemoBlock>
    {/*<DemoBlock title={`ss`}>*/}
    {/*  <ScrollView style={{height: 300}} scrollY={true} showScrollbar={false} onScroll={(event) => {*/}
    {/*    console.log(event);*/}
    {/*  }}>*/}
    {/*    <View style={{height: 600}}>*/}
    {/*      sssss*/}
    {/*    </View>*/}
    {/*  </ScrollView>*/}
    {/*</DemoBlock>*/}
  </View>
}
export default SideBarPage;

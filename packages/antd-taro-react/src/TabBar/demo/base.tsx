import {TabBar} from "@trionesdev/antd-taro-react";

export default () => {
  return <div>
    <TabBar
      items={[{key: 'home', label: '首页', icon: 'home'}, {key: 'save', label: '收藏'}, {key: 'my', label: '我的'}]}/>
  </div>
}

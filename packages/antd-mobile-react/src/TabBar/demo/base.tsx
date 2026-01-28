/**
 * compact: true
 */
import React from "react";
import { FaceRecognitionOutline ,AppstoreOutline,UserOutline} from "../../../../antd-mobile-icons-react";
import { DemoBlock } from '../../DemoBlock';
import TabBar from "../index";

export default () => {
  return <>
    <DemoBlock title="基础用法">
      <TabBar
        items={[
          {key: 'home', label: '首页', icon: <FaceRecognitionOutline/>},
          {key: 'services', label: '全部服务', icon: <AppstoreOutline/>},
          {
            key: 'user-center',
            label: '我的',
            icon: <UserOutline/>
          }
        ]}
      />
    </DemoBlock >
  </>
}

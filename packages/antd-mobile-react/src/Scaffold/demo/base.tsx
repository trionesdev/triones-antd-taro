import { FaceRecognitionOutline } from '../../../../antd-mobile-icons-react';
import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import NavBar from '../../NavBar';
import TabBar from '../../TabBar';
import Scaffold from '../index';

export default () => {
  return (
    <div>
      <DemoBlock title={`基本用法`}>
        <div style={{ height: '60vh' }}>
          <Scaffold
            appBar={<NavBar>标题</NavBar>}
            bottomNavigationBar={
              <TabBar
                items={[
                  {
                    key: 'home',
                    label: '首页',
                    icon: <FaceRecognitionOutline />,
                  },
                  {
                    key: 'save',
                    label: '收藏',
                  },
                  { key: 'user-center', label: '我的' },
                ]}
              />
            }
          >
            <div></div>
          </Scaffold>
        </div>
      </DemoBlock>
    </div>
  );
};

import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import { SideBar } from '../side-bar';

export default () => {
  return (
    <DemoBlock title={`基本使用`}>
      <div style={{ height: 300 }}>
        <SideBar mode={'scroll'}
          items={[
            { key: '1', title: 'Tab 1', content: <div style={{height: 400}}>Tab 1 Content</div> },
            { key: '2', title: 'Tab 2', content: <div style={{height: 500}}>Tab 2 Content</div> },
            { key: '3', title: 'Tab 3', content: <div style={{height: 300}}>Tab 3 Content</div> },
            { key: '4', title: 'Tab 4', content: <div style={{height: 600}}>Tab 4 Content</div> },
            { key: '5', title: 'Tab 5', content: <div style={{height: 700}}>Tab 5 Content</div> },
          ]}
        />
      </div>
    </DemoBlock>
  );
};

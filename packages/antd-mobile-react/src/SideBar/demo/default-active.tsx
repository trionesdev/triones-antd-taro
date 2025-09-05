import { DemoBlock } from '../../DemoBlock';
import { SideBar } from '../side-bar';
import React from 'react';

export default ()=>{
  return (
    <DemoBlock title={`默认值`}>
      <div style={{ height: 300 }}>
        <SideBar
          items={[
            { key: '1', title: 'Tab 1', content: 'Tab 1 Content' },
            { key: '2', title: 'Tab 2', content: 'Tab 2 Content' },
            { key: '3', title: 'Tab 3', content: 'Tab 3 Content' },
            { key: '4', title: 'Tab 4', content: 'Tab 4 Content' },
            { key: '5', title: 'Tab 5', content: 'Tab 5 Content' },
          ]}
        />
      </div>
    </DemoBlock>
  )
}

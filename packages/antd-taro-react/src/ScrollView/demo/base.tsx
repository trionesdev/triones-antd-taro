import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import ScrollView from '../index';

export default () => {
  return (
    <div>
      <DemoBlock title={`一般使用`}>
        <ScrollView style={{ height: 300 }} scrollY={true}>
          <div>
            <div style={{ height: 100, backgroundColor: 'blue' }}>
              <div style={{ height: 100, backgroundColor: 'yellow' }} />
              <div style={{ height: 100, backgroundColor: 'gray' }} />
              <div style={{ height: 100, backgroundColor: 'green' }} />
              <div style={{ height: 100, backgroundColor: 'beige' }} />
              <div style={{ height: 100, backgroundColor: 'black' }} />
            </div>
          </div>
        </ScrollView>
      </DemoBlock>
    </div>
  );
};

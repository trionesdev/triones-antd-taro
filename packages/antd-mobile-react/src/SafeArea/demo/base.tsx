import React from 'react';
import SafeArea from '../index';

export default () => {
  return (
    <div>
      <div style={{ background: '#ace0ff' }}>
        <SafeArea position="top" />
      </div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  );
};

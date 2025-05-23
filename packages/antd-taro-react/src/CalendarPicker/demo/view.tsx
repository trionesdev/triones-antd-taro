import React from 'react';
import { CalendarPickerView } from '../calendar-picker-view';
import { DemoBlock } from '../../DemoBlock';

export default () => {
  return (
    <DemoBlock title={`日期选择器视图`}>
      <CalendarPickerView />
    </DemoBlock>
  );
};

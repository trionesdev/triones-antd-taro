import React, { FC, useMemo, useState } from 'react';
import Calendar from '../Calendar';

type CalendarPickerViewProps = {
  mouth?: Date;
};

export const CalendarPickerView: FC<CalendarPickerViewProps> = ({
  mouth = new Date(),
}) => {
  const [currentMouth, setCurrentMouth] = useState(mouth);

  const mouths = useMemo(() => {
    return [
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() - 1,1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth(),1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() + 1,1),
    ];
  }, [currentMouth]);

  return <div>{
    mouths.map((mouth, index) => (
      <Calendar
        key={index}
        mouth={mouth}
      />
    ))
  }</div>;
};

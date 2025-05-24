import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import Calendar from '../Calendar';
import _ from "lodash";

type CalendarPickerViewProps = {
  mouth?: Date;
};

export const CalendarPickerView: FC<CalendarPickerViewProps> = ({
                                                                  mouth = new Date(),
                                                                }) => {
  const wrapperRef = useRef<any>()
  const [currentMouth, setCurrentMouth] = useState(mouth);
  const [touching, setTouching] = useState<boolean>(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateY, setTranslateY] = useState(-233.5)
  const [mouths, setMouths] = useState([]);

  useEffect(() => {

  }, [mouths]);

  useEffect(() => {
    setMouths([
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() - 1, 1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth(), 1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() + 1, 1),
    ])
  }, [currentMouth]);

  return <div style={{height: 233.5, overflow: 'hidden'}}>
    <div ref={wrapperRef}
         style={{transform: `translate3d(0, ${translateY}px, 0)`}}
         onTouchStart={(event) => {
           setTouching(true);
           const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
           setTouchPoint(startPoint);
         }}
         onTouchMove={(event) => {
           if (touching) {
             const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
             setTouchPoint(movePoint);
             if (translateY>-150){
               let firstMouth = mouths[0];
               setMouths([new Date(firstMouth.getFullYear(), firstMouth.getMonth() - 1, 1),...mouths])
             debugger
             }
           }
         }}
         onTouchEnd={(event) => {
           setTouching(false);
         }}
    >{
      mouths.map((mouth, index) => (
        <Calendar
          key={index}
          // ref={index==1?currentMouthRef:null}
          mouth={mouth}
        />
      ))
    }</div>
  </div>;
};

import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {CalendarGrid} from '../Calendar';

type CalendarPickerViewProps = {
  mouth?: Date;
  value?: Date[];
  defaultValue?: Date[];
  onChange?: (value: Date[]) => void;
  onMouthChange?: (mouth: Date) => void;
};

/**
 * 可以手势滑动的日历组件
 */
export const TouchableCalendarGrid: FC<CalendarPickerViewProps> = memo(({
                                                                          mouth = new Date(),
                                                                          value,
                                                                          defaultValue,
                                                                          onChange,
                                                                          onMouthChange
                                                                        }) => {
  const wrapperRef = useRef<any>()
  const [currentMouth, setCurrentMouth] = useState(mouth);
  let waiting=false;
  const [mouthHeight, setMouthHeight] = useState(200)
  const [touching, setTouching] = useState<boolean>(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateY, setTranslateY] = useState(0)
  const [mouths, setMouths] = useState<Date[]>([]);

  /**
   * 计算出每个格子的大小
   */
  const cellSize = () => {
    return wrapperRef.current?.clientWidth / 7
  }
  /**
   * 计算出最大的translateY，默认为wrapperRef.current?.clientHeight
   */
  const minTranslateY = () => {
    return wrapperRef.current?.clientHeight
  }

  /**
   * 计算出该月的行数
   * @param mouth
   */
  const mouthLines = (mouth: Date) => {
    const firstDate = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
    const lastDate = new Date(mouth.getFullYear(), mouth.getMonth() + 1, 0);
    const beforeDays = firstDate.getDay()
    const afterDays = 6 - lastDate.getDay()
    const countDays = beforeDays + lastDate.getDate() + afterDays
    return Math.ceil(countDays / 7)
  }


  const handleInsertMouth = () => {
    if (waiting){
      return
    }
    debugger
    waiting = true
    const firstMouth = mouths[0];
    const insertMouth = new Date(firstMouth.getFullYear(), firstMouth.getMonth() - 1, 1);
    console.log(insertMouth)
    const newMouths = [insertMouth, ...mouths];
    setMouths(newMouths);
    const insertMouthLines = mouthLines(insertMouth)
    const insertMouthHeight = insertMouthLines * cellSize()
    setTranslateY(translateY - insertMouthHeight)
    waiting  = false
  }

  const handleAppendMouth = () => {
    if (waiting){
      return
    }
    waiting = true
    const lastMouth = mouths[mouths.length - 1];
    const appendMouth = new Date(lastMouth.getFullYear(), lastMouth.getMonth() + 1, 1);
    const newMouths = [...mouths, appendMouth];
    setMouths(newMouths)
    waiting = false
  }

  useEffect(() => {
    const initMouths = [
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() - 1, 1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth(), 1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() + 1, 1),
    ]
    setMouths(initMouths)
    setMouthHeight(mouthLines(currentMouth) * cellSize())
    const firstMouthHeight = mouthLines(initMouths[0]) * cellSize()
    setTranslateY(0 - firstMouthHeight)
  }, [currentMouth]);

  return <div style={{boxSizing: 'border-box', overflow: 'hidden', height: mouthHeight}}>
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
             if (translateY > 0 || translateY < (0 - minTranslateY())) {
               return
             }
             const newTranslateY = translateY + (movePoint.clientY - touchPoint.clientY);
             setTranslateY(newTranslateY);
             setTouchPoint(movePoint);
             if (newTranslateY > -10) {
               // handleInsertMouth()
             } else if (newTranslateY < minTranslateY() + 10) {
               // handleAppendMouth()
             }
           }
         }}
         onTouchEnd={(event) => {
           setTouching(false);
           console.log(mouths)
           const newMouth = mouths[mouths.length - 2]
           setCurrentMouth(newMouth)
           onMouthChange?.(newMouth)
         }}
    >
      {
        mouths.map((mouth, index) => (
          <CalendarGrid
            key={index}
            mouth={mouth}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}

          />
        ))
      }</div>
  </div>;
});

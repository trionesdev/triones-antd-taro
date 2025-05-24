import React, {FC, memo, useEffect, useRef, useState} from 'react';
import Taro from '@tarojs/taro'
import {CalendarGrid} from '../Calendar';
import {checkTaroEnv} from "../utils/taro-utils";

type CalendarPickerViewProps = {
  mouth?: Date;
  value?: Date[];
  defaultValue?: Date[];
  onChange?: (value: Date[]) => void;
  onMouthChange?: (mouth: Date) => void;
  range?: boolean
};

/**
 * 可以手势滑动的日历组件
 */
export const TouchableCalendarGrid: FC<CalendarPickerViewProps> = memo(({
                                                                          mouth = new Date(),
                                                                          value,
                                                                          defaultValue,
                                                                          onChange,
                                                                          onMouthChange,
                                                                          range
                                                                        }) => {
  const isTaroEnv = checkTaroEnv();
  const wrapperRef = useRef<any>()
  const [currentMouth, setCurrentMouth] = useState(mouth);
  let waiting = false;
  const [mouthHeight, setMouthHeight] = useState(200) //当前选中的月份的展示高度
  const [touching, setTouching] = useState<boolean>(false); //是否正在滑动
  const [touchStartPoint, setTouchStartPoint] = React.useState<any>(); //触摸点
  const [touchPoint, setTouchPoint] = React.useState<any>(); //触摸点
  const [translateY, setTranslateY] = useState(0)
  const [mouths, setMouths] = useState<Date[]>([]);

  /**
   * 计算出每个格子的大小
   */
  const cellSize = async (): Promise<number> => {
    if (isTaroEnv) {
      return await new Promise(resolve => Taro.createSelectorQuery()
        .select(`#${wrapperRef.current?.uid}`).boundingClientRect().exec(res => resolve(res?.[0]?.width / 7)));

    }
    return Promise.resolve(wrapperRef.current?.clientWidth / 7)
  }
  /**
   * 计算出最大的translateY，默认为wrapperRef.current?.clientHeight
   */
  const minTranslateY = async (): Promise<number> => {
    if (isTaroEnv) {
      return await new Promise(resolve => Taro.createSelectorQuery()
        .select(`#${wrapperRef.current?.uid}`).boundingClientRect().exec(res => resolve(res?.[0]?.height)));

    }
    return Promise.resolve(wrapperRef.current?.clientHeight)
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


  const handleInsertMouth = async () => {
    // if (waiting){
    //   return
    // }
    // debugger
    // waiting = true
    const firstMouth = mouths[0];
    const insertMouth = new Date(firstMouth.getFullYear(), firstMouth.getMonth() - 1, 1);
    console.log(insertMouth)
    const newMouths = [insertMouth, ...mouths];
    setMouths(newMouths);
    const insertMouthLines = mouthLines(insertMouth)
    const insertMouthHeight = insertMouthLines * await cellSize()
    setTranslateY(translateY - insertMouthHeight)
    // waiting  = false
  }

  const handleAppendMouth = () => {
    // if (waiting){
    //   return
    // }
    // waiting = true
    const lastMouth = mouths[mouths.length - 1];
    const appendMouth = new Date(lastMouth.getFullYear(), lastMouth.getMonth() + 1, 1);
    const newMouths = [...mouths, appendMouth];
    setMouths(newMouths)
    // waiting = false
  }

  useEffect(() => {
    const initMouths = [
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() - 1, 1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth(), 1),
      new Date(currentMouth.getFullYear(), currentMouth.getMonth() + 1, 1),
    ]


    new Promise(async resolve => {
      setMouths(initMouths)
      debugger
      setMouthHeight(mouthLines(currentMouth) * await cellSize())
      const firstMouthHeight = mouthLines(initMouths[0]) * await cellSize()
      setTranslateY(0 - firstMouthHeight)
    })
  }, [currentMouth]);

  return <div style={{boxSizing: 'border-box', overflow: 'hidden', height: mouthHeight}}>
    <div ref={wrapperRef} id={wrapperRef.current?.uid}
         style={{transform: `translate3d(0, ${translateY}px, 0)`}}
         onTouchStart={(event) => {
           setTouching(true);
           const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
           setTouchStartPoint(startPoint)
           setTouchPoint(startPoint);
         }}
         onTouchMove={async (event) => {
           if (touching) {
             const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             if (translateY > 0 || translateY < (0 - await minTranslateY())) {
               return
             }
             console.log("move", movePoint.clientY - touchPoint.clientY)
             const newTranslateY = translateY + (movePoint.clientY - touchPoint.clientY);
             setTranslateY(newTranslateY);
             setTouchPoint(movePoint);
             // console.log(newTranslateY,minTranslateY())
             if (newTranslateY > -10) { //当向下滑动，顶部距离视窗顶部距离小于10，则插入上一个月份
               console.log("insert")
               await handleInsertMouth()
             } else if (newTranslateY < (0 - (await minTranslateY()) + 10)) { //当向下滑动，底部距离视窗底部距离小于10，则追加下一个月份
               console.log("append")
               handleAppendMouth()
             }
           }
         }}
         onTouchEnd={async (event) => {
           setTouching(false);
           if (Math.abs(Math.abs(touchStartPoint.clientY) - Math.abs(touchPoint.clientY)) < 5) {
             return
           }


           console.log(mouths)
           let displayMouth;
           //region 判断当前月份是否在视窗内
           let _mouthHeightSum = 0
           for (let i = 0; i < mouths.length; i++) {
             console.log("mouthHeight", mouthHeight)
             console.log("mouths[i]", mouths[i], i)
             const _mouthHeight = mouthLines(mouths[i]) * await cellSize()
             _mouthHeightSum += _mouthHeight
             console.log("_mouthHeightSum", _mouthHeightSum)
             console.log("translateY", translateY)
             const _topLineY = 0 - (_mouthHeightSum - _mouthHeight) //该月份区域顶部，对于顶点的偏移量
             console.log("_topLineY", _topLineY)
             if (_topLineY <= translateY && _topLineY >= (translateY - mouthHeight)) { //该月份区域的顶部在视窗内
               console.log("top_in")
               const _windowDisplayHeight = _mouthHeightSum - (0 - translateY) //该月份区域底部距离视窗顶部的距离
               console.log("_windowDisplayHeight——top", _windowDisplayHeight)
               if (_windowDisplayHeight >= (mouthHeight / 2)) {

                 console.log("displayMouth", mouths[i])
                 displayMouth = mouths[i]
                 break
               }
             }
             const _bottomLineY = 0 - _mouthHeightSum; //该月份区域底部，对于顶点的偏移量
             console.log("_bottomLineY", _bottomLineY)
             if (_bottomLineY <= translateY && _bottomLineY >= (translateY - mouthHeight)) {//该月份区域的底部在视窗内
               console.log("bottom_in")
               const _windowDisplayHeight = _mouthHeightSum - (0 - translateY) //该月份区域底部距离视窗顶部的距离
               console.log("_windowDisplayHeight-bottom", _windowDisplayHeight)
               if (_windowDisplayHeight >= (mouthHeight / 2)) {

                 console.log("displayMouth", mouths[i])
                 displayMouth = mouths[i]
                 break
               }
             }
           }
           //endregion
           if (displayMouth) {
             setCurrentMouth(displayMouth)
             onMouthChange?.(displayMouth)
           }
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
            range={range}
          />
        ))
      }</div>
  </div>;
});

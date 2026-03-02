import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {CalendarGrid} from '../Calendar';
import {RandomUtils} from "../utils/random-utils";
import classNames from "classnames";
import dayjs from "dayjs";

type CalendarPickerViewProps = {
  month?: dayjs.Dayjs;
  value?: dayjs.Dayjs[];
  defaultValue?: dayjs.Dayjs[];
  onChange?: (value: dayjs.Dayjs[]) => void;
  onMouthChange?: (mouth: dayjs.Dayjs) => void;
  range?: boolean
};

const monthLines = 6
/**
 * 可以手势滑动的日历组件
 */
export const TouchableCalendarGrid: FC<CalendarPickerViewProps> = memo(
  ({
    month = dayjs(),
    value,
    defaultValue,
    onChange,
    onMouthChange,
    range,
  }) => {
    const wrapperRef = useRef<any>();
    const wrapperUniqueRef = React.useRef<string>(RandomUtils.random())

    const [currentMonth, setCurrentMonth] = useState( dayjs(month));
    let waiting = false;
    const [mouthHeight, setMouthHeight] = useState(200); //当前选中的月份的展示高度
    const [touching, setTouching] = useState<boolean>(false); //是否正在滑动
    const [touchStartPoint, setTouchStartPoint] = React.useState<any>(); //触摸点
    const [touchPoint, setTouchPoint] = React.useState<any>(); //触摸点
    const [translateY, setTranslateY] = useState(0);
    const [months, setMonths] = useState<dayjs.Dayjs[]>([]);

    /**
     * 计算出每个格子的大小
     */
    const cellSize = async (): Promise<number> => {
      return Promise.resolve(wrapperRef.current?.clientWidth / 7);
    };
    /**
     * 计算出最大的translateY，默认为wrapperRef.current?.clientHeight
     */
    const minTranslateY = async (): Promise<number> => {
      return Promise.resolve(wrapperRef.current?.clientHeight);
    };

    /**
     * 计算出该月的行数
     * @param mouth
     */
    // const mouthLines = (mouth: Date) => {
    //   const firstDate = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
    //   const lastDate = new Date(mouth.getFullYear(), mouth.getMonth() + 1, 0);
    //   const beforeDays = firstDate.getDay();
    //   const afterDays = 6 - lastDate.getDay();
    //   const countDays = beforeDays + lastDate.getDate() + afterDays;
    //   return Math.ceil(countDays / 7);
    // };

    const handleInsertMouth = async () => {
      // if (waiting){
      //   return
      // }
      // debugger
      // waiting = true
      const firstMouth = months[0];
      const insertMouth = dayjs(new Date(
        firstMouth.year(),
        firstMouth.month() - 1,
        1,
      ));
      const newMouths = [insertMouth, ...months];
      setMonths(newMouths);
      // const insertMouthLines = mouthLines(insertMouth);
      const insertMouthHeight = monthLines * (await cellSize());
      setTranslateY(translateY - insertMouthHeight);
      // waiting  = false
    };

    const handleAppendMouth = () => {
      // if (waiting){
      //   return
      // }
      // waiting = true
      const lastMouth = months[months.length - 1];
      const appendMouth = lastMouth.add(1, 'month');
      const newMouths = [...months, appendMouth];
      setMonths(newMouths);
      // waiting = false
    };

    useEffect(() => {
      const initMonths = [
        currentMonth!.clone().subtract(1, 'month'),
        currentMonth!.clone(),
        currentMonth!.clone().add(1, 'month'),
      ];

      Promise.all([]).then(async () => {
        setMonths(initMonths);
        setMouthHeight(monthLines * (await cellSize()));
        const firstMouthHeight = monthLines * (await cellSize());
        setTranslateY(0 - firstMouthHeight);
      });
    }, [currentMonth]);

    useEffect(() => {
      if (month !== undefined) {
        const newMouth = dayjs(new Date(month.year(), month.month(), 1));
        if (
          currentMonth === null ||
          !(
            currentMonth?.isSame(newMouth, 'month')
          )
        ) {
          setCurrentMonth(newMouth);
        }
      }
    }, [month]);

    useEffect(() => {
      if (value !== undefined) {

      }
    }, [value]);

    return (
      <div
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          height: mouthHeight,
        }}
      >
        <div
          ref={wrapperRef}
          id={wrapperRef.current?.uid}
          className={classNames(`${wrapperUniqueRef.current}`)}
          style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
          onTouchStart={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setTouching(true);
            const startPoint = {
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
            };
            setTouchStartPoint(startPoint);
            setTouchPoint(startPoint);
          }}
          onTouchMove={async (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (touching) {
              const movePoint = {
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
              };
              if (translateY > 0 || translateY < 0 - (await minTranslateY())) {
                return;
              }
              console.log('move', movePoint.clientY - touchPoint.clientY);
              const newTranslateY =
                translateY + (movePoint.clientY - touchPoint.clientY);
              setTranslateY(newTranslateY);
              setTouchPoint(movePoint);
              // console.log(newTranslateY,minTranslateY())
              if (newTranslateY > -10) {
                //当向下滑动，顶部距离视窗顶部距离小于10，则插入上一个月份
                console.log('insert');
                await handleInsertMouth();
              } else if (newTranslateY < 0 - (await minTranslateY()) + 10) {
                //当向下滑动，底部距离视窗底部距离小于10，则追加下一个月份
                console.log('append');
                handleAppendMouth();
              }
            }
          }}
          onTouchEnd={async (event) => {
            setTouching(false);
            if (
              Math.abs(
                Math.abs(touchStartPoint.clientY) -
                  Math.abs(touchPoint.clientY),
              ) < 5
            ) {
              return;
            }

            console.log(months);
            let displayMouth;
            //region 判断当前月份是否在视窗内
            let _mouthHeightSum = 0;
            for (let i = 0; i < months.length; i++) {
              console.log('mouthHeight', mouthHeight);
              console.log('mouths[i]', months[i], i);
              const _mouthHeight = monthLines * (await cellSize());
              _mouthHeightSum += _mouthHeight;
              console.log('_mouthHeightSum', _mouthHeightSum);
              console.log('translateY', translateY);
              const _topLineY = 0 - (_mouthHeightSum - _mouthHeight); //该月份区域顶部，对于顶点的偏移量
              console.log('_topLineY', _topLineY);
              if (
                _topLineY <= translateY &&
                _topLineY >= translateY - mouthHeight
              ) {
                //该月份区域的顶部在视窗内
                console.log('top_in');
                const _windowDisplayHeight = _mouthHeightSum - (0 - translateY); //该月份区域底部距离视窗顶部的距离
                console.log('_windowDisplayHeight——top', _windowDisplayHeight);
                if (_windowDisplayHeight >= mouthHeight / 2) {
                  console.log('displayMouth', months[i]);
                  displayMouth = months[i];
                  break;
                }
              }
              const _bottomLineY = 0 - _mouthHeightSum; //该月份区域底部，对于顶点的偏移量
              console.log('_bottomLineY', _bottomLineY);
              if (
                _bottomLineY <= translateY &&
                _bottomLineY >= translateY - mouthHeight
              ) {
                //该月份区域的底部在视窗内
                console.log('bottom_in');
                const _windowDisplayHeight = _mouthHeightSum - (0 - translateY); //该月份区域底部距离视窗顶部的距离
                console.log(
                  '_windowDisplayHeight-bottom',
                  _windowDisplayHeight,
                );
                if (_windowDisplayHeight >= mouthHeight / 2) {
                  console.log('displayMouth', months[i]);
                  displayMouth = months[i];
                  break;
                }
              }
            }
            //endregion
            if (displayMouth) {
              setCurrentMonth(displayMouth);
              onMouthChange?.(displayMouth);
            }
          }}
        >
          {months.map((mouth, index) => (
            <CalendarGrid
              key={index}
              month={mouth}
              value={value}
              defaultValue={defaultValue}
              onChange={onChange}
              range={range}
            />
          ))}
        </div>
      </div>
    );
  },
);

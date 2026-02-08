import React, {FC, memo, useEffect, useRef, useState} from 'react';
import Taro from '@tarojs/taro'
import {CalendarGrid} from '../Calendar';
import { useTaro } from '../hooks';
import {RandomUtils} from "../utils/random-utils";
import classNames from "classnames";
import dayjs from "dayjs";

type CalendarPickerViewProps = {
  mouth?: dayjs.Dayjs;
  value?: dayjs.Dayjs[];
  defaultValue?: dayjs.Dayjs[];
  onChange?: (value: dayjs.Dayjs[]) => void;
  onMouthChange?: (mouth: dayjs.Dayjs) => void;
  range?: boolean
};

/**
 * 可以手势滑动的日历组件
 */
export const TouchableCalendarGrid: FC<CalendarPickerViewProps> = memo(
  ({
    mouth = dayjs(),
    value,
    defaultValue,
    onChange,
    onMouthChange,
    range,
  }) => {
    const { isTaroEnv,isTaroWeApp} = useTaro();
    const wrapperRef = useRef<any>();
    const wrapperUniqueRef = React.useRef<string>(RandomUtils.random())

    const [currentMouth, setCurrentMouth] = useState(mouth);
    let waiting = false;
    const [mouthHeight, setMouthHeight] = useState(200); //当前选中的月份的展示高度
    const [touching, setTouching] = useState<boolean>(false); //是否正在滑动
    const [touchStartPoint, setTouchStartPoint] = React.useState<any>(); //触摸点
    const [touchPoint, setTouchPoint] = React.useState<any>(); //触摸点
    const [translateY, setTranslateY] = useState(0);
    const [mouths, setMouths] = useState<dayjs.Dayjs[]>([]);

    /**
     * 计算出每个格子的大小
     */
    const cellSize = async (): Promise<number> => {
      if (isTaroWeApp) {

        return await new Promise((resolve) => {
          Taro.createSelectorQuery()
            .select(`.${wrapperUniqueRef.current}`)
            .boundingClientRect()
            .exec((res) => {
              resolve(res?.[0]?.width / 7)
            });
        });
        // return $(`.${wrapperUniqueRef.current}`).width()
      }
      return Promise.resolve(wrapperRef.current?.clientWidth / 7);
    };
    /**
     * 计算出最大的translateY，默认为wrapperRef.current?.clientHeight
     */
    const minTranslateY = async (): Promise<number> => {
      if (isTaroWeApp) {
        return await new Promise((resolve) => {
          Taro.createSelectorQuery()
              .select(`.${wrapperUniqueRef.current}`)
            .boundingClientRect()
            .exec((res) => resolve(res?.[0]?.height));
        });
        // return $(`.${wrapperUniqueRef.current}`).height()
      }
      return Promise.resolve(wrapperRef.current?.clientHeight);
    };

    /**
     * 计算出该月的行数
     * @param mouth
     */
    const mouthLines = (mouth: dayjs.Dayjs) => {
      const firstDate = dayjs(new Date(mouth.year(), mouth.month(), 1));
      const lastDate = dayjs(new Date(mouth.year(), mouth.month() + 1, 0));
      const beforeDays = firstDate.day();
      const afterDays = 6 - lastDate.day();
      const countDays = beforeDays + lastDate.date() + afterDays;
      return Math.ceil(countDays / 7);
    };

    const handleInsertMouth = async () => {
      // if (waiting){
      //   return
      // }
      // debugger
      // waiting = true
      const firstMouth = mouths[0];
      const insertMouth = dayjs(new Date(
        firstMouth.year(),
        firstMouth.month() - 1,
        1,
      ));
      const newMouths = [insertMouth, ...mouths];
      setMouths(newMouths);
      const insertMouthLines = mouthLines(insertMouth);
      const insertMouthHeight = insertMouthLines * (await cellSize());
      setTranslateY(translateY - insertMouthHeight);
      // waiting  = false
    };

    const handleAppendMouth = () => {
      // if (waiting){
      //   return
      // }
      // waiting = true
      const lastMouth = mouths[mouths.length - 1];
      const appendMouth = dayjs(new Date(
        lastMouth.year(),
        lastMouth.month() + 1,
        1,
      ));
      const newMouths = [...mouths, appendMouth];
      setMouths(newMouths);
      // waiting = false
    };

    useEffect(() => {
      const initMouths = [
        dayjs(new Date(currentMouth.year(), currentMouth.month() - 1, 1)),
        dayjs(new Date(currentMouth.year(), currentMouth.month(), 1)),
        dayjs(new Date(currentMouth.year(), currentMouth.month() + 1, 1)),
      ];

      Promise.all([]).then(async () => {
        setMouths(initMouths);
        setMouthHeight(mouthLines(currentMouth) * (await cellSize()));
        const firstMouthHeight = mouthLines(initMouths[0]) * (await cellSize());
        setTranslateY(0 - firstMouthHeight);
      });
    }, [currentMouth]);

    useEffect(() => {
      if (mouth !== undefined) {
        const newMouth = dayjs(new Date(mouth.year(), mouth.month(), 1));
        if (
          currentMouth === null ||
          !(
            currentMouth.year() === newMouth.year() &&
            currentMouth.month() === newMouth.month()
          )
        ) {
          setCurrentMouth(newMouth);
        }
      }
    }, [mouth]);

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

            console.log(mouths);
            let displayMouth;
            //region 判断当前月份是否在视窗内
            let _mouthHeightSum = 0;
            for (let i = 0; i < mouths.length; i++) {
              console.log('mouthHeight', mouthHeight);
              console.log('mouths[i]', mouths[i], i);
              const _mouthHeight = mouthLines(mouths[i]) * (await cellSize());
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
                  console.log('displayMouth', mouths[i]);
                  displayMouth = mouths[i];
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
                  console.log('displayMouth', mouths[i]);
                  displayMouth = mouths[i];
                  break;
                }
              }
            }
            //endregion
            if (displayMouth) {
              setCurrentMouth(displayMouth);
              onMouthChange?.(displayMouth);
            }
          }}
        >
          {mouths.map((mouth, index) => (
            <CalendarGrid
              key={index}
              mouth={mouth}
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

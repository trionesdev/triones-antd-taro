"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[7816],{29107:function(e,n){n.Z=`import classNames from 'classnames';
import {isEmpty} from 'lodash-es';
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './style.scss';

const calendarCls = 'triones-antm-calendar';

export type CalendarGridProps = {
  mouth?: Date;
  /**
   * @description \u503C\uFF0C\u5982\u679C\u662F\u533A\u95F4\u6A21\u5F0F\uFF0C\u5219 0,1 \u7D22\u5F15\u7684\u503C\u6709\u6548\uFF0C0\u662F\u5F00\u59CB\u65F6\u95F4\uFF0C1\u662F\u7ED3\u675F\u65F6\u95F4
   */
  value?: Date[];
  /**
   * @description \u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u662F\u533A\u95F4\u6A21\u5F0F\uFF0C\u5219 0,1 \u7D22\u5F15\u7684\u503C\u6709\u6548\uFF0C0\u662F\u5F00\u59CB\u65F6\u95F4\uFF0C1\u662F\u7ED3\u675F\u65F6\u95F4
   */
  defaultValue?: Date[];
  onChange?: (value: Date[]) => void;
  /**
   * @description \u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9
   */
  range?: boolean;
  onSelect?: (date: Date) => void;
};

export type CalendarCellProps = {
  mouth?: Date;
  date?: Date;
  value?: Date[];
  range?: boolean;
  onSelect?: (date: Date) => void;
};

const CalendarCell: FC<CalendarCellProps> = memo(
  ({ mouth = new Date(), date = new Date(), value, range, onSelect }) => {
    const disabled = useMemo(() => {
      return date.getMonth() !== mouth.getMonth();
    }, [date, mouth]);

    const selected = useMemo(() => {
      if (disabled || isEmpty(value)) {
        return false;
      }
      if (value?.[0]) {
        value?.[0]?.setHours(0, 0, 0, 0);
      }
      if (value?.[1]) {
        value?.[1]?.setHours(0, 0, 0, 0);
      }

      date.setHours(0, 0, 0, 0);
      if (range) {
        const startDate = value?.[0];
        const endDate = value?.[1];
        console.log('value', value);

        return (
          date.getTime() === startDate?.getTime() ||
          date.getTime() === endDate?.getTime()
        );
      } else {
        return date.getTime() === value?.[0]?.getTime();
      }
    }, [mouth, date, value]);

    const selectedRange = useMemo(() => {
      if (disabled || !range) {
        return false;
      }
      const startDate = value?.[0];
      const endDate = value?.[1];
      if (!startDate || !endDate) {
        return false;
      }
      date.setHours(0, 0, 0, 0);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      return (
        date.getTime() > startDate!.getTime() &&
        date.getTime() < endDate!.getTime()
      );
    }, [mouth, date, value]);

    return (
      <div
        className={classNames(\`\${calendarCls}-cell\`, {
          [\`\${calendarCls}-cell-disabled\`]: disabled,
          [\`\${calendarCls}-cell-selected\`]: selected,
          [\`\${calendarCls}-cell-selected-range\`]: selectedRange,
        })}
        // style={{ width: size, height: size }}
        onClick={() => {
          onSelect?.(date);
        }}
      >
        <div className={classNames(\`\${calendarCls}-cell-date\`)}>
          {date.getDate()}
        </div>
        {date.getDate() === 1 && (
          <div
            className={classNames(\`\${calendarCls}-cell-mouth\`)}
          >{\`\${date.getMonth() + 1}\u6708\`}</div>
        )}
      </div>
    );
  },
);

export const CalendarGrid: FC<CalendarGridProps> = memo(
  forwardRef(
    (
      {
        mouth = new Date(),
        value,
        defaultValue,
        range = false,
        onChange,
        onSelect,
      },
      ref: ForwardedRef<any>,
    ) => {
      const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? []);

      const handleSelect = (date: Date) => {
        date.setHours(0, 0, 0, 0);
        let _value: Date[] = innerValue;
        if (range) {
          if (!_value[0]) {
            _value = [date];
          } else if (!_value[1]) {
            let startDate = _value[0];
            if (date.getTime() < startDate.getTime()) {
              _value = [date, startDate];
            } else {
              _value = [startDate, date];
            }
          } else if (_value[0] && _value[1]) {
            _value = [date];
          }
        } else {
          _value = [date];
        }
        setInnerValue(_value);
        onSelect?.(date);
        onChange?.(_value);
      };

      const cells = useMemo(() => {
        const firstDate = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
        const lastDate = new Date(mouth.getFullYear(), mouth.getMonth() + 1, 0);
        const beforeDays = Array.from({ length: firstDate.getDay() }).map(
          (_, index): Date => {
            const date = new Date(firstDate);
            date.setDate(firstDate.getDate() - (firstDate.getDay() - index));
            return date;
          },
        );

        const afterDays = Array.from({ length: 6 - lastDate.getDay() }).map(
          (_, index): Date => {
            const date = new Date(lastDate);
            date.setDate(lastDate.getDate() + index + 1);
            return date;
          },
        );
        const mouthDays = Array.from({ length: lastDate.getDate() }).map(
          (_, index): Date => {
            const date = new Date(firstDate);
            date.setDate(date.getDate() + index);
            return date;
          },
        );
        return [...beforeDays, ...mouthDays, ...afterDays];
      }, [mouth]);

      useEffect(() => {
        if (value !== undefined) {
          if (value !== innerValue) {
            setInnerValue(value);
          }
        }
      }, [value]);

      return (
        <div ref={ref} className={classNames(\`\${calendarCls}-grid\`)}>
          {cells.map((item, index) => {
            return (
              <CalendarCell
                key={index}
                mouth={mouth}
                date={item}
                value={innerValue}
                range={range}
                onSelect={handleSelect}
              />
            );
          })}
        </div>
      );
    },
  ),
);
`},16169:function(e,n){n.Z='import React from "react";\nimport {FC} from "react";\nimport classNames from "classnames";\nimport ConfigProvider from "../ConfigProvider";\n\nconst calendarCls = \'triones-antm-calendar\';\ntype CalendarHeaderProps={\n  mouth: Date;\n  onChange:(mouth:Date)=>void;\n}\nexport const CalendarHeader:FC<CalendarHeaderProps> = ({mouth,onChange}) => {\n  const { locale } = ConfigProvider.useConfig();\n  return (<>\n    <div className={classNames(`${calendarCls}-header`)}>\n      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {\n        onChange(new Date(mouth.getFullYear() - 1, mouth.getMonth(), 1))\n      }}>{`<<`}</div>\n      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {\n        onChange(new Date(mouth.getFullYear(), mouth.getMonth() - 1, 1))\n      }}>{`<`}</div>\n      <div\n        className={classNames(`${calendarCls}-header-title`)}>{`${mouth.getFullYear()}\u5E74${mouth.getMonth() + 1}\u6708`}</div>\n      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {\n        onChange(new Date(mouth.getFullYear(), mouth.getMonth() + 1, 1))\n      }}>{`>`}</div>\n      <div className={classNames(`${calendarCls}-header-button`)} onClick={() => {\n        onChange(new Date(mouth.getFullYear() + 1, mouth.getMonth(), 1))\n      }}>{`>>`}</div>\n    </div>\n    <div\n      className={classNames(`${calendarCls}-week`)}>{[`\u65E5`, `\u4E00`, `\u4E8C`, `\u4E09`, `\u56DB`, `\u4E94`, `\u516D`].map((item, index) => {\n      return <div className={classNames(`${calendarCls}-week-cell`)} key={index}>{item}</div>\n    })}</div>\n  </>)\n}\n'},19599:function(e,n){n.Z=`import classNames from 'classnames';
import {isEqual} from 'lodash-es';
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { CalendarGrid } from './calendar-grid';
import { CalendarHeader } from './calendar-header';
import './style.scss';
import { TouchableCalendarGrid } from './touchable-calendar-grid';

const calendarCls = 'triones-antm-calendar';

type CalendarProps = {
  mouth?: Date;
  value?: Date[];
  onChange?: (date: Date[]) => void;
  slideable?: boolean;
};

export const CalendarRange: FC<CalendarProps> = memo(
  ({ mouth = new Date(), value, onChange, slideable }) => {
    const [currentMouth, setCurrentMouth] = useState(mouth);
    const valueRef = useRef<any>();

    useEffect(() => {
      if (value !== undefined) {
        if (!isEqual(value, valueRef.current)) {
          valueRef.current = value;
        }
      }
    }, [value]);

    return (
      <div className={classNames(\`\${calendarCls}\`)}>
        <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth} />
        {slideable ? (
          <TouchableCalendarGrid
            mouth={currentMouth}
            value={value ?? valueRef.current ?? []}
            onMouthChange={setCurrentMouth}
            onChange={(value) => {
              valueRef.current = value;
              onChange?.(value);
            }}
            range={true}
          />
        ) : (
          <CalendarGrid
            mouth={currentMouth}
            value={value ?? valueRef.current ?? []}
            onChange={(value) => {
              valueRef.current = value;
              onChange?.(value);
            }}
            range={true}
          />
        )}
      </div>
    );
  },
);
`},96529:function(e,n){n.Z=`import classNames from 'classnames';
import React, { forwardRef, memo, useState } from 'react';
import { CalendarHeader } from './calendar-header';
import './style.scss';
import { TouchableCalendarGrid } from './touchable-calendar-grid';
import {CalendarGrid} from "./calendar-grid";

const calendarCls = 'triones-antm-calendar';

export type CalendarProps = {
  mouth?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  onMouthChange?: (mouth: Date) => void;
  slideable?: boolean;
};

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>(
    (
      { mouth = new Date(), value, onChange, onMouthChange, slideable = false },
      ref,
    ) => {
      const [currentMouth, setCurrentMouth] = useState(mouth);

      return (
        <div ref={ref} className={classNames(\`\${calendarCls}\`)}>
          <CalendarHeader mouth={currentMouth} onChange={setCurrentMouth} />
          {slideable ? (
            <TouchableCalendarGrid
              mouth={currentMouth}
              value={value ? [value] : []}
              onMouthChange={(newMouth) => {
                setCurrentMouth(newMouth);
                onMouthChange?.(newMouth);
              }}
              onChange={(value) => {
                onChange?.(value?.[0]);
              }}
            />
          ) : (
            <CalendarGrid
              mouth={currentMouth}
              value={value ? [value] : []}
              onChange={(value) => {
                onChange?.(value?.[0]);
              }}
            />
          )}
        </div>
      );
    },
  ),
);
`},45067:function(e,n){n.Z=`import { Calendar as InternalCalendar, CalendarProps } from './calendar';
import { CalendarGrid, CalendarGridProps } from './calendar-grid';
import { TouchableCalendarGrid } from './touchable-calendar-grid';
import { CalendarRange } from './calendar-range';

export { CalendarGrid, TouchableCalendarGrid };

type CompoundedComponent = typeof InternalCalendar & {
  Range: typeof CalendarRange;
};
const Calendar = InternalCalendar as CompoundedComponent;
Calendar.Range = CalendarRange;

export type { CalendarProps, CalendarGridProps };

export default Calendar;
`},95247:function(e,n){n.Z=`import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {CalendarGrid} from '../Calendar';
import {RandomUtils} from "../utils/random-utils";
import classNames from "classnames";

type CalendarPickerViewProps = {
  mouth?: Date;
  value?: Date[];
  defaultValue?: Date[];
  onChange?: (value: Date[]) => void;
  onMouthChange?: (mouth: Date) => void;
  range?: boolean
};

/**
 * \u53EF\u4EE5\u624B\u52BF\u6ED1\u52A8\u7684\u65E5\u5386\u7EC4\u4EF6
 */
export const TouchableCalendarGrid: FC<CalendarPickerViewProps> = memo(
  ({
    mouth = new Date(),
    value,
    defaultValue,
    onChange,
    onMouthChange,
    range,
  }) => {
    const wrapperRef = useRef<any>();
    const wrapperUniqueRef = React.useRef<string>(RandomUtils.random())

    const [currentMouth, setCurrentMouth] = useState(mouth);
    let waiting = false;
    const [mouthHeight, setMouthHeight] = useState(200); //\u5F53\u524D\u9009\u4E2D\u7684\u6708\u4EFD\u7684\u5C55\u793A\u9AD8\u5EA6
    const [touching, setTouching] = useState<boolean>(false); //\u662F\u5426\u6B63\u5728\u6ED1\u52A8
    const [touchStartPoint, setTouchStartPoint] = React.useState<any>(); //\u89E6\u6478\u70B9
    const [touchPoint, setTouchPoint] = React.useState<any>(); //\u89E6\u6478\u70B9
    const [translateY, setTranslateY] = useState(0);
    const [mouths, setMouths] = useState<Date[]>([]);

    /**
     * \u8BA1\u7B97\u51FA\u6BCF\u4E2A\u683C\u5B50\u7684\u5927\u5C0F
     */
    const cellSize = async (): Promise<number> => {
      return Promise.resolve(wrapperRef.current?.clientWidth / 7);
    };
    /**
     * \u8BA1\u7B97\u51FA\u6700\u5927\u7684translateY\uFF0C\u9ED8\u8BA4\u4E3AwrapperRef.current?.clientHeight
     */
    const minTranslateY = async (): Promise<number> => {
      return Promise.resolve(wrapperRef.current?.clientHeight);
    };

    /**
     * \u8BA1\u7B97\u51FA\u8BE5\u6708\u7684\u884C\u6570
     * @param mouth
     */
    const mouthLines = (mouth: Date) => {
      const firstDate = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
      const lastDate = new Date(mouth.getFullYear(), mouth.getMonth() + 1, 0);
      const beforeDays = firstDate.getDay();
      const afterDays = 6 - lastDate.getDay();
      const countDays = beforeDays + lastDate.getDate() + afterDays;
      return Math.ceil(countDays / 7);
    };

    const handleInsertMouth = async () => {
      const firstMouth = mouths[0];
      const insertMouth = new Date(
        firstMouth.getFullYear(),
        firstMouth.getMonth() - 1,
        1,
      );
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
      const appendMouth = new Date(
        lastMouth.getFullYear(),
        lastMouth.getMonth() + 1,
        1,
      );
      const newMouths = [...mouths, appendMouth];
      setMouths(newMouths);
      // waiting = false
    };

    useEffect(() => {
      const initMouths = [
        new Date(currentMouth.getFullYear(), currentMouth.getMonth() - 1, 1),
        new Date(currentMouth.getFullYear(), currentMouth.getMonth(), 1),
        new Date(currentMouth.getFullYear(), currentMouth.getMonth() + 1, 1),
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
        const newMouth = new Date(mouth.getFullYear(), mouth.getMonth(), 1);
        if (
          currentMouth === null ||
          !(
            currentMouth.getFullYear() === newMouth.getFullYear() &&
            currentMouth.getMonth() === newMouth.getMonth()
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
          className={classNames(\`\${wrapperUniqueRef.current}\`)}
          style={{ transform: \`translate3d(0, \${translateY}px, 0)\` }}
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
                //\u5F53\u5411\u4E0B\u6ED1\u52A8\uFF0C\u9876\u90E8\u8DDD\u79BB\u89C6\u7A97\u9876\u90E8\u8DDD\u79BB\u5C0F\u4E8E10\uFF0C\u5219\u63D2\u5165\u4E0A\u4E00\u4E2A\u6708\u4EFD
                console.log('insert');
                await handleInsertMouth();
              } else if (newTranslateY < 0 - (await minTranslateY()) + 10) {
                //\u5F53\u5411\u4E0B\u6ED1\u52A8\uFF0C\u5E95\u90E8\u8DDD\u79BB\u89C6\u7A97\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E10\uFF0C\u5219\u8FFD\u52A0\u4E0B\u4E00\u4E2A\u6708\u4EFD
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
            //region \u5224\u65AD\u5F53\u524D\u6708\u4EFD\u662F\u5426\u5728\u89C6\u7A97\u5185
            let _mouthHeightSum = 0;
            for (let i = 0; i < mouths.length; i++) {
              console.log('mouthHeight', mouthHeight);
              console.log('mouths[i]', mouths[i], i);
              const _mouthHeight = mouthLines(mouths[i]) * (await cellSize());
              _mouthHeightSum += _mouthHeight;
              console.log('_mouthHeightSum', _mouthHeightSum);
              console.log('translateY', translateY);
              const _topLineY = 0 - (_mouthHeightSum - _mouthHeight); //\u8BE5\u6708\u4EFD\u533A\u57DF\u9876\u90E8\uFF0C\u5BF9\u4E8E\u9876\u70B9\u7684\u504F\u79FB\u91CF
              console.log('_topLineY', _topLineY);
              if (
                _topLineY <= translateY &&
                _topLineY >= translateY - mouthHeight
              ) {
                //\u8BE5\u6708\u4EFD\u533A\u57DF\u7684\u9876\u90E8\u5728\u89C6\u7A97\u5185
                console.log('top_in');
                const _windowDisplayHeight = _mouthHeightSum - (0 - translateY); //\u8BE5\u6708\u4EFD\u533A\u57DF\u5E95\u90E8\u8DDD\u79BB\u89C6\u7A97\u9876\u90E8\u7684\u8DDD\u79BB
                console.log('_windowDisplayHeight\u2014\u2014top', _windowDisplayHeight);
                if (_windowDisplayHeight >= mouthHeight / 2) {
                  console.log('displayMouth', mouths[i]);
                  displayMouth = mouths[i];
                  break;
                }
              }
              const _bottomLineY = 0 - _mouthHeightSum; //\u8BE5\u6708\u4EFD\u533A\u57DF\u5E95\u90E8\uFF0C\u5BF9\u4E8E\u9876\u70B9\u7684\u504F\u79FB\u91CF
              console.log('_bottomLineY', _bottomLineY);
              if (
                _bottomLineY <= translateY &&
                _bottomLineY >= translateY - mouthHeight
              ) {
                //\u8BE5\u6708\u4EFD\u533A\u57DF\u7684\u5E95\u90E8\u5728\u89C6\u7A97\u5185
                console.log('bottom_in');
                const _windowDisplayHeight = _mouthHeightSum - (0 - translateY); //\u8BE5\u6708\u4EFD\u533A\u57DF\u5E95\u90E8\u8DDD\u79BB\u89C6\u7A97\u9876\u90E8\u7684\u8DDD\u79BB
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
`},19323:function(e,n){n.Z=`import {
  ConfigProvider,
  ConfigProviderProps,
} from '@trionesdev/antd-mobile-base-react';

export type { ConfigProviderProps };

export default ConfigProvider;
`},15819:function(e,n){n.Z=`export class RandomUtils {
  static random = () => {
    return 'tr' + Math.random().toString(16).slice(2);
  };
}
`}}]);

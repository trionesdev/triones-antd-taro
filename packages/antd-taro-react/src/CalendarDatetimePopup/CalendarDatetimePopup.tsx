import {CustomWrapper, PickerView, PickerViewColumn, View} from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import React, {FC, useEffect, useRef, useState} from 'react';
import Calendar from '../Calendar';
import ConfigProvider from '../ConfigProvider';
import {useTaro} from '../hooks';
import Popup from '../Popup';
import {DateTimeSwitch} from './DateTimeSwitch';
import './style.scss';
import {cls, Mode} from './types';
import {DatetimeUtils} from "../utils/datetime-utils";


export type CalendarDatetimePopupProps = {
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  value?: Date;
  onOk?: (value?: Date) => void;
  onClose?: () => void;
};

export const CalendarDatetimePopup: FC<CalendarDatetimePopupProps> = ({
                                                                        open,
                                                                        afterOpenChange,
                                                                        value,
                                                                        onOk,
                                                                        onClose,
                                                                      }) => {
  const {locale} = ConfigProvider.useConfig();
  const {isTaroEnv, isTaroWeApp} = useTaro();
  const [mode, setMode] = useState<Mode>(Mode.date);
  const valueRef = useRef<any>(value || new Date());
  const bodyRef = useRef<any>(null);
  const datetimeSwitchRef = useRef<any>();
  const [bodyHeight, setBodyHeight] = useState(300);

  const handleClose = () => {
    onClose?.();
  };

  const handleOk = () => {
    onOk?.(valueRef.current);
    handleClose();
  };

  const handleComputeBodyHeight = async (): Promise<number> => {
    if (isTaroEnv && isTaroWeApp) {
      return new Promise((resolve) => {
        Taro.createSelectorQuery()
          .in(bodyRef.current.ctx)
          .select(`.${cls}-body`)
          .boundingClientRect()
          // .fields({ node: true, size: true })
          .exec((res) => {
            console.log(res);
            resolve(res?.[0]?.height);
          });
      });
    }
    return Promise.resolve(bodyRef.current!.offsetHeight);
  };

  useEffect(() => {
    if (datetimeSwitchRef.current) {
      datetimeSwitchRef.current.setDatetime(valueRef.current);
    }
  }, []);

  const bodyRender = () => {
    return (
      <>
        {mode === Mode.date && (
          <div style={{}}>
            <Calendar
              mouth={value}
              value={value}
              onChange={(date) => {
                valueRef.current = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  valueRef.current.getHours(),
                  valueRef.current.getMinutes(),
                );
                datetimeSwitchRef.current?.setDatetime(valueRef.current);
              }}
            />
          </div>
        )}
        {mode === Mode.time && (
          <div style={{height: bodyHeight}}>
            <PickerView className={`time-picker`} indicatorStyle='height: 32Px;'
                        style={{height: bodyHeight}}
                        value={[
                          valueRef?.current.getHours(),
                          valueRef?.current.getMinutes(),
                        ]}
                        onChange={(e) => {
                          const v = e.detail.value
                          valueRef.current = new Date(
                            valueRef.current.getFullYear(),
                            valueRef.current.getMonth(),
                            valueRef.current.getDate(),
                            v[0],
                            v[1],
                          );
                          datetimeSwitchRef.current?.setDatetime(valueRef.current);
                        }}>
              <PickerViewColumn>
                {Array(24)
                  .fill(0)
                  .map((_, i) => {
                    return <View key={`hour-${i}`} className={`time-item`}>{DatetimeUtils.twoDigits(i)}</View>;
                  })
                }
              </PickerViewColumn>
              <PickerViewColumn>
                {Array(60)
                  .fill(0)
                  .map((_, i) => {
                    return <View key={`minute-${i}`} className={`time-item`}>{DatetimeUtils.twoDigits(i)}</View>;
                  })
                }
              </PickerViewColumn>

            </PickerView>
          </div>
        )}
      </>
    );
  };

  return (
    <Popup
      open={open}
      onClose={() => {
        onClose?.();
      }}
    >
      <div className={classNames(cls)}>
        <div className={`${cls}-header`}>
          <DateTimeSwitch
            ref={datetimeSwitchRef}
            mode={mode}
            value={valueRef.current}
            onDateTabTap={() => setMode(Mode.date)}
            onTimeTabTap={() => {
              handleComputeBodyHeight().then((height) => {
                setBodyHeight(height);
                setMode(Mode.time);
              });
            }}
          />
          <a
            className={classNames(
              `${cls}-header-button`,
              `${cls}-header-button-ok`,
            )}
            onClick={handleOk}
          >
            {locale.common.confirm}
          </a>
        </div>

        {isTaroEnv ? (
          <CustomWrapper ref={bodyRef}>
            <div className={`${cls}-body`}>{bodyRender()}</div>
          </CustomWrapper>
        ) : (
          <div
            className={`${cls}-body`}
            ref={bodyRef}
            id={bodyRef.current?.uid}
          >
            {bodyRender()}
          </div>
        )}
      </div>
    </Popup>
  );
};

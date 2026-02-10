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
import dayjs from "dayjs";


export type CalendarDatetimePopupProps = {
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  value?: dayjs.Dayjs | Date;
  onOk?: (value?: dayjs.Dayjs) => void;
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
  const {isTaroWeApp} = useTaro();
  const [mode, setMode] = useState<Mode>(Mode.date);
  const valueRef = useRef<dayjs.Dayjs>( dayjs(value));
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
    if (isTaroWeApp) {
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
              month={value}
              value={value}
              onChange={(date) => {
                valueRef.current = dayjs(new Date(
                  date.year(),
                  date.month(),
                  date.date(),
                  valueRef.current.hour(),
                  valueRef.current.minute(),
                ));
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
                          valueRef?.current.hour(),
                          valueRef?.current.minute(),
                        ]}
                        onChange={(e) => {
                          const v = e.detail.value
                          valueRef.current = dayjs(new Date(
                            valueRef.current.year(),
                            valueRef.current.month(),
                            valueRef.current.date(),
                            v[0],
                            v[1],
                          ));
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
      round={true}
      afterOpenChange={(o) => {
        if (!o) {
          setMode(Mode.date)
        }
        afterOpenChange?.(o)
      }}
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

        <CustomWrapper ref={bodyRef}>
          <div className={`${cls}-body`}>{bodyRender()}</div>
        </CustomWrapper>
      </div>
    </Popup>
  );
};

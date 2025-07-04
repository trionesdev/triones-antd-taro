import {
  Swiper as TaroSwiper,
  SwiperItem as TaroSwiperItem,
} from '@tarojs/components';
import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import { useTaro } from '../hooks/useTaro';
import { SwiperCore, SwiperCoreProps } from './SwiperCore';

const cls = 'triones-antm-swiper';

type SwiperProps = SwiperCoreProps & {
  /**
   * @description 是否显示指示器
   * @default true
   */
  indicator?: boolean;
};
export const Swiper: FC<PropsWithChildren<SwiperProps>> = ({ ...props }) => {
  const { isTaroEnv } = useTaro();
  const style = { ...props.style };
  if (props.height) {
    style.height = props.height;
  }

  return (
    <div className={classNames(cls, props.className)} style={style}>
      {isTaroEnv ? (
        <TaroSwiper
          className={classNames(`${cls}-taro`)}
          current={props.activeIndex}
          onChange={(e) => {
            props.onChange?.(e.detail.current);
          }}
        >
          {props.items?.map((item, index) => {
            return (
              <TaroSwiperItem
                className={classNames(`${cls}-taro-item`)}
                style={{display: 'flex'}}
                key={index}
              >
                {item.content}
              </TaroSwiperItem>
            );
          })}
        </TaroSwiper>
      ) : (
        <SwiperCore {...props} />
      )}
    </div>
  );
};

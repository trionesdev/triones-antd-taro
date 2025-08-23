import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';
import {SwiperCore, SwiperCoreProps} from './SwiperCore';

const cls = 'triones-antm-swiper';

type SwiperProps = SwiperCoreProps & {
  /**
   * @description 是否显示指示器
   * @default true
   */
  indicator?: boolean;
};
export const Swiper: FC<PropsWithChildren<SwiperProps>> = ({ ...props }) => {
  const style = { ...props.style };
  if (props.height) {
    style.height = props.height;
  }

  return (
    <div className={classNames(cls, props.className)} style={style}>
      <SwiperCore {...props} />
    </div>
  );
};

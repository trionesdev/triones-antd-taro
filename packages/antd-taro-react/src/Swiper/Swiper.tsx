import React, {FC, PropsWithChildren} from "react"
import classNames from "classnames";
import {SwiperCore, SwiperCoreProps} from "./SwiperCore";

const cls = "triones-antm-swiper";

type SwiperProps = SwiperCoreProps&{
  /**
   * @description 高度
   */
  height?: number
  /**
   * @description 是否显示指示器
   * @default true
   */
  indicator?: boolean
}
export const Swiper: FC<PropsWithChildren<SwiperProps>> = ({height=150,...props}) => {

  return <div className={classNames(cls)} style={{height}}>
    <SwiperCore  {...props} />
  </div>
}

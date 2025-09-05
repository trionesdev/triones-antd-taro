import React, {FC} from "react"
import {Swiper as TaroSwiper, SwiperProps as TaroSwiperProps,SwiperItemProps as TaroSwiperItemProps,SwiperItem} from "@tarojs/components"

export type SwiperProps = Omit<TaroSwiperProps, 'style'> & {
  height?: number
  style?: React.CSSProperties
  items?: TaroSwiperItemProps[]
}

export const Swiper: FC<SwiperProps> = ({...rest}) => {
  return <TaroSwiper {...rest} style={{...rest.style, height: rest.height}}>
    {rest.children}
    {rest.items?.map((item, index) => {
      return <SwiperItem key={index} {...item}>
        {item.children}
      </SwiperItem>
    })}
  </TaroSwiper>
}

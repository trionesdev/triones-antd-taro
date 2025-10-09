import React, {FC} from "react"
import {Swiper as TaroSwiper, SwiperProps as TaroSwiperProps,SwiperItemProps as TaroSwiperItemProps,SwiperItem} from "@tarojs/components"

export type SwiperItemType = {
  children: React.ReactNode;
};

export type SwiperProps = Omit<TaroSwiperProps, 'style'> & {
  height?: number
  style?: React.CSSProperties
  items?: SwiperItemType[]
}

export const Swiper: FC<SwiperProps> = ({...rest}) => {
  const style =  rest.style ?? {};
  if (rest.height){
    style.height = rest.height;
  }
  return <TaroSwiper {...rest} style={{...style}}>
    {rest.children}
    {rest.items?.map((item, index) => {
      return <SwiperItem key={index} {...item}>
        {item.children}
      </SwiperItem>
    })}
  </TaroSwiper>
}

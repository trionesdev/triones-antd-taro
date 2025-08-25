import {Swiper as InternalSwiper,SwiperProps,SwiperItem,SwiperItemProps } from "@tarojs/components"


type CompoundedComponent = typeof InternalSwiper & {
  Item: typeof SwiperItem
}

const Swiper = InternalSwiper as CompoundedComponent
Swiper.Item = SwiperItem

export type {SwiperProps,SwiperItemProps}
export default Swiper

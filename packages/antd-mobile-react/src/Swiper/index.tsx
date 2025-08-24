import {Swiper as InternalSwiper,SwiperProps} from "./Swiper"
import {SwiperCoreItem} from "./SwiperCore";

type CompoundedComponent = typeof InternalSwiper & {
  Item: typeof SwiperCoreItem
}

const Swiper = InternalSwiper as CompoundedComponent
Swiper.Item = SwiperCoreItem

export type {SwiperProps}
export default Swiper

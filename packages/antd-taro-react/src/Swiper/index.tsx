import {Swiper as InternalSwiper} from "./Swiper"
import {SwiperCoreItem} from "./SwiperCore";

type CompoundedComponent = typeof InternalSwiper & {
  Item: typeof SwiperCoreItem
}

const Swiper = InternalSwiper as CompoundedComponent
Swiper.Item = SwiperCoreItem

export default Swiper

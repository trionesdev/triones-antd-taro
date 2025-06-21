import React, {FC, PropsWithChildren, useEffect, useState} from "react"

import "./style.scss"
import classNames from "classnames";

const cls = "triones-antm-swiper";

export type SwiperCoreProps = {
  direction?: 'horizontal' | 'vertical'
  items: any[]
}

export type SwiperCoreItemProps = {
  style?: React.CSSProperties
  item: any
}

export const SwiperCoreItem: FC<PropsWithChildren<SwiperCoreItemProps>> = ({children, style}) => {
  return <div className={classNames(`${cls}-core-item`)} style={style}>{children}</div>
}

export const SwiperCore: FC<PropsWithChildren<SwiperCoreProps>> = ({children, direction = 'horizontal', items}) => {
  const wrapperRef = React.createRef<HTMLDivElement>()
  const [itemWidth, setItemWidth] = useState<number>()
  const [wrapperWidth, setWrapperWidth] = useState<number>()

  const [touching, setTouching] = useState<boolean>(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)

  const computeItemWidth = async (): Promise<number> => {
    return Promise.resolve(wrapperRef.current?.clientWidth!)
  }

  useEffect(() => {
    if (itemWidth) {
      if (items?.length > 0) {
        setWrapperWidth(itemWidth * items.length)
      }
    }
  }, [children, items, itemWidth]);

  useEffect(() => {
    computeItemWidth().then((width) => {
      setItemWidth(width)
    })
  }, []);

  const handlerRender = () => {
    return <>{items.map((item, index) => {
      return <SwiperCoreItem item={item} key={index} style={{width: itemWidth}}>{item}</SwiperCoreItem>
    })}</>
  }

  return <div className={classNames(`${cls}-core`, `${cls}-core-${direction}`)}>
    <div ref={wrapperRef} className={classNames(`${cls}-core-wrapper`)} style={{width: wrapperWidth,transform: `translate3d(${translateX}Px, ${translateY}Px, 0)`}}
         onTouchStart={(event) => {
           setTouching(true)
           const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
           setTouchPoint(startPoint);
         }}
         onTouchMove={(event) => {
           if (touching) {
             const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}

             if (direction === 'vertical'){
               setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY))
             }else{
               setTranslateX(translateX + (movePoint.clientX - touchPoint.clientX));
             }
             setTouchPoint(movePoint);
           }
         }}
         onTouchEnd={(event) => {
           setTouching(false)
         }}
    >
      {handlerRender()}
    </div>
  </div>
}

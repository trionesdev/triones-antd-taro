import React, {FC, PropsWithChildren, useEffect, useRef, useState} from "react"

import "./style.scss"
import classNames from "classnames";

const cls = "triones-antm-swiper";

export type SwiperItemType = {
  content: React.ReactNode
}

export type SwiperCoreProps = {
  direction?: 'horizontal' | 'vertical'
  items?: SwiperItemType[]
}

export type SwiperCoreItemProps = {
  style?: React.CSSProperties
}

export const SwiperCoreItem: FC<PropsWithChildren<SwiperCoreItemProps>> = ({children, style}) => {
  return <div className={classNames(`${cls}-core-item`)} style={style}>{children}</div>
}

export const SwiperCore: FC<PropsWithChildren<SwiperCoreProps>> = ({children, direction = 'horizontal', items}) => {
  const wrapperRef = React.createRef<HTMLDivElement>()
  const [itemWidth, setItemWidth] = useState<number>()
  const [wrapperWidth, setWrapperWidth] = useState<number>()
  const [itemHeight, setItemHeight] = useState<number>()
  const [wrapperHeight, setWrapperHeight] = useState<number>()


  const [touching, setTouching] = useState<boolean>(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const max = 0;
  const minTranslateX = useRef<number>();
  const minTranslateY = useRef<number>();

  const computeItemWidth = async (): Promise<number> => {
    return Promise.resolve(wrapperRef.current?.clientWidth!)
  }

  const computeItemHeight = async (): Promise<number> => {
    return Promise.resolve(wrapperRef.current?.clientHeight!)
  }

  useEffect(() => {
    if (itemWidth) {
      if (items && items?.length > 0) {
        setWrapperWidth(itemWidth * items.length)
        minTranslateX.current = -(itemWidth * (items.length - 1))
      }else {
        if (children && React.Children.count(children) > 0){
          setWrapperWidth(itemWidth * React.Children.count(children))
          minTranslateX.current = -(itemWidth * (React.Children.count(children) - 1))
        }
      }
    }
    if (itemHeight) {
      if (items && items?.length > 0) {
        setWrapperHeight(itemHeight * items.length)
        minTranslateY.current = -(itemHeight * (items.length - 1))
      }else {
        if (children && React.Children.count(children) > 0){
          setWrapperHeight(itemHeight * React.Children.count(children))
          minTranslateY.current = -(itemHeight * (React.Children.count(children) - 1))
        }
      }
    }
  }, [children, items, itemWidth, itemWidth]);

  useEffect(() => {
    computeItemHeight().then((height) => {
      setItemHeight(height)
    })
    computeItemWidth().then((width) => {
      setItemWidth(width)
    })
  }, []);

  const handlerRender = () => {
    if (items?.length) {
      return <>{items.map((item, index) => {
        return <SwiperCoreItem  key={index}
                               style={{width: itemWidth, height: itemHeight}}>{item?.content}</SwiperCoreItem>
      })}</>
    } else {
      if (children && Array.isArray(children)) {
        return children.map((item, index) => {
          return React.cloneElement(item, {
            style: {...item.style, width: itemWidth, height: itemHeight}
          })
        })
      }
    }
    return null
  }

  return <div className={classNames(`${cls}-core`,)}>
    <div ref={wrapperRef} className={classNames(`${cls}-core-wrapper`, `${cls}-core-wrapper-${direction}`)}
         style={{
           width: direction === 'horizontal' ? wrapperWidth : undefined,
           height: direction === 'vertical' ? wrapperHeight : undefined,
           transform: `translate3d(${translateX}Px, ${translateY}Px, 0)`
         }}
         onTouchStart={(event) => {
           setTouching(true)
           const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
           setTouchPoint(startPoint);
         }}
         onTouchMove={(event) => {
           if (touching) {
             const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}

             if (direction === 'vertical') {
               setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY))
             } else {
               setTranslateX(translateX + (movePoint.clientX - touchPoint.clientX));
             }
             setTouchPoint(movePoint);
           }
         }}
         onTouchEnd={(event) => {
           setTouching(false)
           if (direction === 'vertical') {
             if (translateY > max) {
               setTranslateY(0)
             } else if (translateY < minTranslateY.current!) {
               setTranslateY(minTranslateY.current!)
             } else {
               const index = Math.round(Math.abs(translateY) / Math.abs(itemHeight!))
               setTranslateY(-(index * itemHeight!))
             }
           } else {
             if (translateX > max) {
               setTranslateX(0)
             } else if (translateX < minTranslateX.current!) {
               setTranslateX(minTranslateX.current!)
             } else {
               const index = Math.round(Math.abs(translateX) / Math.abs(itemWidth!))
               setTranslateX(-(index * itemWidth!))
             }
           }
         }}
    >
      {handlerRender()}
    </div>
  </div>
}

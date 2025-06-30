import React, {FC, PropsWithChildren, useEffect, useRef, useState} from "react"

import "./style.scss"
import classNames from "classnames";
import {useTaro} from "../hooks/useTaro";
import Taro from "@tarojs/taro";
import {$} from "@tarojs/extend"
import {RandomUtils} from '../utils/random-utils';

const cls = "triones-antm-swiper";

export type SwiperItemType = {
  content: React.ReactNode
}

export type SwiperCoreProps = {
  className?: string
  style?: React.CSSProperties
  direction?: 'horizontal' | 'vertical'
  /**
   * @description 高度
   */
  height?: number
  items?: SwiperItemType[]
  activeIndex?: number
  onChange?: (value: number) => void
}

export type SwiperCoreItemProps = {
  style?: React.CSSProperties
}

export const SwiperCoreItem: FC<PropsWithChildren<SwiperCoreItemProps>> = ({children, style}) => {
  return <div className={classNames(`${cls}-core-item`)} style={style}>
    {children}
  </div>
}

export const SwiperCore: FC<PropsWithChildren<SwiperCoreProps>> = ({
                                                                     children,
                                                                     direction = 'horizontal',
                                                                     height,
                                                                     items,
                                                                     activeIndex,
                                                                     onChange
                                                                   }) => {
  const {isTaroWeApp} = useTaro()
  const [innerActiveIndex, setInnerActiveIndex] = useState<number>(activeIndex || 0)
  const boxRef = React.createRef<any>()
  const boxUniqueRef = React.useRef<string>(RandomUtils.random())
  const wrapperRef = React.createRef<HTMLDivElement>()
  const [itemWidth, setItemWidth] = useState<number>()
  const [wrapperWidth, setWrapperWidth] = useState<number>()
  const [itemHeight, setItemHeight] = useState<number | undefined>(height)
  const [wrapperHeight, setWrapperHeight] = useState<number>()
  const [count, setCount] = useState<number>(0)


  const [touching, setTouching] = useState<boolean>(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const max = 0;
  const minTranslateX = useRef<number>();
  const minTranslateY = useRef<number>();

  const computeItemWidth = async (): Promise<number | undefined> => {
    if (isTaroWeApp) {
      // return await new Promise((resolve) => {
      //   console.log(boxRef.current?.uid);
      //   Taro.createSelectorQuery()
      //     .select(`.${boxUniqueRef.current}`)
      //     .boundingClientRect()
      //     .exec((res) => {
      //       console.log(res);
      //       resolve(res?.[0]?.width)
      //     });
      // })

      // console.log(boxRef.current);
      // console.log(boxRef.current?.uid);
      // const ss = $(`.${boxUniqueRef.current}`);
      // console.log(ss);
      // console.log(ss.width())
      // return $(`[data-sid='${boxRef.current.uid}']`).width()
      return $(`.${boxUniqueRef.current}`).width()
    }
    return Promise.resolve(boxRef.current?.clientWidth)
  }

  const computeItemHeight = async (): Promise<number | undefined> => {
    if (isTaroWeApp) {
      // return await new Promise((resolve) => {
      //   Taro.createSelectorQuery()
      //     .select(`.${boxUniqueRef.current}`)
      //     .boundingClientRect()
      //     .exec((res) => resolve(res?.[0]?.height));
      // })
      return $(`.${boxUniqueRef.current}`).height()
    }
    return Promise.resolve(boxRef.current?.clientHeight)
  }

  useEffect(() => {
    if (items?.length) {
      setCount(items.length)
    } else {
      setCount(React.Children.count(children))
    }
    if (itemWidth) {
      if (items && items?.length > 0) {
        setWrapperWidth(itemWidth * items.length)
        minTranslateX.current = -(itemWidth * (items.length - 1))
      } else {
        if (children && React.Children.count(children) > 0) {
          setWrapperWidth(itemWidth * React.Children.count(children))
          minTranslateX.current = -(itemWidth * (React.Children.count(children) - 1))
        }
      }
    }
    if (itemHeight) {
      if (items && items?.length > 0) {
        setWrapperHeight(itemHeight * items.length)
        minTranslateY.current = -(itemHeight * (items.length - 1))
      } else {
        if (children && React.Children.count(children) > 0) {
          setWrapperHeight(itemHeight * React.Children.count(children))
          minTranslateY.current = -(itemHeight * (React.Children.count(children) - 1))
        }
      }
    }
  }, [children, items, itemWidth, itemHeight]);

  useEffect(() => {
    if (activeIndex === undefined) {
      return
    }
    if (activeIndex === innerActiveIndex) {
      return;
    }
    setInnerActiveIndex(activeIndex)

  }, [activeIndex]);


  useEffect(() => {
    if (direction === 'vertical') {
      if (itemHeight) {
        setTranslateY(-(innerActiveIndex * itemHeight!))
      }

    } else {
      if (itemWidth) {
        setTranslateX(-(innerActiveIndex * itemWidth!))
      }
    }
  }, [innerActiveIndex, itemWidth, itemHeight]);


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
        return <SwiperCoreItem key={index}
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
    <div ref={boxRef} id={boxRef.current?.uid}
         className={classNames(`${cls}-core-box`,`${boxUniqueRef.current}`)}>
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
                 setInnerActiveIndex(0)
                 onChange?.(0)
               } else if (translateY < minTranslateY.current!) {
                 setTranslateY(minTranslateY.current!)
                 setInnerActiveIndex(count - 1)
                 onChange?.(count - 1)
               } else {
                 const index = Math.round(Math.abs(translateY) / Math.abs(itemHeight!))
                 setTranslateY(-(index * itemHeight!))
                 setInnerActiveIndex(index)
                 onChange?.(index)
               }
             } else {
               if (translateX > max) {
                 setTranslateX(0)
                 setInnerActiveIndex(0)
                 onChange?.(0)
               } else if (translateX < minTranslateX.current!) {
                 setTranslateX(minTranslateX.current!)
                 setInnerActiveIndex(count - 1)
                 onChange?.(count - 1)
               } else {
                 const index = Math.round(Math.abs(translateX) / Math.abs(itemWidth!))
                 setTranslateX(-(index * itemWidth!))
                 setInnerActiveIndex(index)
                 onChange?.(index)
               }
             }
           }}
      >
        {handlerRender()}
      </div>
    </div>
  </div>
}

import {ScrollView as TaroScrollView} from "@tarojs/components";
import {checkTaroEnv} from '../utils/taro-utils';
import React, {FC, ReactNode} from "react";
import classNames from "classnames";

type ScrollViewProps = {
  className?: string;
  children: ReactNode;
  onScroll: (e: any) => void
  showScrollbar?: boolean
  scrollX?: boolean
  scrollY?: boolean
}

export const ScrollView: FC<ScrollViewProps> = ({
                                                  className,
                                                  children,
                                                  onScroll,
                                                  showScrollbar = true,
                                                  scrollX,
                                                  scrollY,
                                                }) => {
  const trionesScrollViewCls = 'triones-antm-scroll-view';
  const isTaroEnv = checkTaroEnv();
  if (isTaroEnv) {
    return <TaroScrollView className={classNames(className)} onScroll={(e) => {

    }} showScrollbar={showScrollbar} scrollX={scrollX} scrollY={scrollY}>{children}</TaroScrollView>;
  } else {
    return <div className={classNames(`${trionesScrollViewCls}`, className,
      {
        [`${trionesScrollViewCls}-scroll-x`]: scrollX,
        [`${trionesScrollViewCls}-scroll-y`]: scrollY,
        [`${trionesScrollViewCls}-scroll-bar-hidden`]: !showScrollbar,
      })}
                onScroll={(e) => {
                }}>{children}</div>;
  }
}


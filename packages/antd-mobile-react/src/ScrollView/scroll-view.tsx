import classNames from 'classnames';
import React, {FC, forwardRef, useEffect, useRef,} from 'react';
import './style.scss';
import {ScrollViewProps} from "./types";


export const ScrollView: FC<ScrollViewProps> = forwardRef(
  (
    {
      className,
      style,
      children,
      onScroll,
      showScrollbar = true,
      scrollX,
      scrollY,
      scrollTop,
      upperThreshold = 50,
      lowerThreshold = 50,
      onScrollToUpper,
      onScrollToLower,
    },
    ref,
  ) => {

    const scrollRef = useRef<any>();
    const handleRef = (node: any) => {
      scrollRef.current = node;
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    };

    useEffect(() => {
      if (scrollTop !== undefined) {

      }
    }, [scrollTop]);

    const trionesScrollViewCls = 'triones-antm-scroll-view';

    return <div
      ref={handleRef}
      className={classNames(`${trionesScrollViewCls}`, className, {
        [`${trionesScrollViewCls}-scroll-x`]: scrollX,
        [`${trionesScrollViewCls}-scroll-y`]: scrollY,
        [`${trionesScrollViewCls}-scroll-bar-hidden`]: !showScrollbar,
      })}
      style={style}
      onScroll={(e: any) => {
        // console.log(e);
        onScroll?.({
          detail: {
            scrollLeft: e.target.scrollLeft,
            scrollTop: e.target.scrollTop,
            scrollHeight: e.target.scrollHeight,
            scrollWidth: e.target.scrollWidth,
          },
        });
      }}
    >
      {children}
    </div>
  },
);

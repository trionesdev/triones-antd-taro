import { ScrollView as TaroScrollView } from '@tarojs/components';
import classNames from 'classnames';
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import './style.scss';
import { useTaro } from '../hooks/useTaro';

export type ScrollEvent = {
  target?: any;
  detail: {
    deltaX?: number;
    deltaY?: number;
    scrollLeft?: number;
    scrollTop?: number;
    scrollHeight?: number;
    scrollWidth?: number;
  };
};

export type ScrollViewProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  onScroll?: (e: ScrollEvent) => void;
  showScrollbar?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  scrollTop?: number;
};

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
    },
    ref ,
  ) => {
    const {isTaroEnv} = useTaro()

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
        if (!isTaroEnv) {
          scrollRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth',
          });
        }
      }
    }, [scrollTop]);

    const trionesScrollViewCls = 'triones-antm-scroll-view';

    if (isTaroEnv) {
      return (
        <TaroScrollView
          ref={handleRef}
          className={classNames(className)}
          style={style}
          onScroll={(e) => {
            onScroll?.({
              detail: {
                deltaX: e.detail.deltaX,
                deltaY: e.detail.deltaY,
                scrollLeft: e.detail.scrollLeft,
                scrollTop: e.detail.scrollTop,
                scrollHeight: e.detail.scrollHeight,
                scrollWidth: e.detail.scrollWidth,
              },
            });
          }}
          showScrollbar={showScrollbar}
          scrollX={scrollX}
          scrollY={scrollY}
          scrollTop={scrollTop}
        >
          {children}
        </TaroScrollView>
      );
    } else {
      return (
        <div
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
      );
    }
  },
);

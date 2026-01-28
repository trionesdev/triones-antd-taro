import React, {ReactNode} from "react";
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
  upperThreshold?: number;
  lowerThreshold?: number;
  onScrollToUpper?: ()=>void;
  onScrollToLower?:()=>void;
};

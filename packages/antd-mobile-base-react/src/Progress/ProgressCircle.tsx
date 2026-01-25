import React, {CSSProperties, FC, memo, useMemo} from "react"
import {exceptionColor, ProgressStatus, Size, successColor} from "./types";
import classNames from "classnames";
import {CheckOutline, CloseOutline} from "@trionesdev/antd-mobile-icons-react";

type ProcessCircleProps = {
  format?: (percent: number) => string;
  percent?: number;
  strokeWidth?: number;
  size?: Size;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  strokeLineCap?: 'butt' | 'round' | 'square';
  status?: ProgressStatus;
}

export const ProgressCircle: FC<ProcessCircleProps> = memo(({
                                                              format,
                                                              percent = 0,
                                                              strokeWidth = 6,
                                                              size = 'middle',
                                                              showInfo = true,
                                                              railColor = '#E5E5E5',
                                                              strokeColor = '#1777FF',
                                                              strokeLineCap = 'round',
                                                              status
                                                            }) => {
  const clsPrefix = 'triones-antm-progress-circle';
  const computedDiameter = useMemo(() => {
    switch (size) {
      case 'small':
        return 50;
      case 'middle':
        return 100;
      case 'large':
        return 150;
      default:
        return size || 50;
    }
  }, [size])

  const style: CSSProperties = {width: computedDiameter, height: computedDiameter}

  const computedIconSize = () => {
    const iconSize = (computedDiameter - strokeWidth) / 2 / 3;
    if (iconSize < 24) {
      return 24;
    }
    return iconSize;
  }

  const computePercentSize = () => {
    const percentSize = (computedDiameter - strokeWidth) / 2 / 3;
    if (percentSize < 10) {
      return 10
    }
    return percentSize || 10;
  }

  const handleIndicator = () => {
    const iconSize = computedIconSize();
    const percentSize = computePercentSize()
    let indicatorColor = '#333';
    if (status === 'exception') {
      indicatorColor = exceptionColor;
    }
    if (percent >= 100) {
      indicatorColor = successColor;
    }
    if (format) {
      return <div style={{color: indicatorColor, fontSize: percentSize}}>{format(percent)}</div>
    }
    if (status === 'exception') {
      return <CloseOutline style={{color: indicatorColor, fontSize: iconSize}}/>
    }
    if (percent >= 100) {
      return <CheckOutline style={{color: indicatorColor, fontSize: iconSize}}/>
    }
    return <div style={{color: indicatorColor, fontSize: percentSize}}>{percent}%</div>
  }
  const radius = (computedDiameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; // 圆周长

  // 计算偏移量：(1 - 比例) * 周长
  const offset = circumference - (percent / 100) * circumference;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width="${computedDiameter}" height="${computedDiameter}">
        <circle
            cx="${computedDiameter / 2}"
            cy="${computedDiameter / 2}"
            r="${radius}"
            stroke="#e5e7eb"
            stroke-width="${strokeWidth}"
            fill="transparent"
        />
        <circle
          cx="${computedDiameter / 2}"
          cy="${computedDiameter / 2}"
          r="${radius}"
          stroke="${strokeColor}"
          stroke-width="${strokeWidth}"
          fill="transparent"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"
          stroke-linecap="${strokeLineCap}"
          transform="rotate(-90, ${computedDiameter / 2}, ${computedDiameter / 2})"
        />
</svg>`

  return <div className={classNames(`${clsPrefix}`)}
              style={{...style, backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`}}>
    {(showInfo && computedDiameter > 20) && <div className={`${clsPrefix}-indicator`}>{handleIndicator()}</div>}
  </div>
});

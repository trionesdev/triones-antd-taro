import React, {CSSProperties, FC, memo, useEffect, useRef} from "react"
import {Canvas} from "@tarojs/components";
import {Size} from "../types";
import {createCanvasContext} from "@tarojs/taro";
import classNames from "classnames";
import './style.scss';
import {CheckOutline, CloseOutline} from "@trionesdev/antd-mobile-icons-react";
import {useTaro} from "../hooks";

type ProcessCircleProps = {
  format?: (percent: number) => string;
  percent?: number;
  strokeWidth?: number;
  size?: Size;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  strokeLineCap?: 'butt' | 'round' | 'square';
  status?: 'normal' | 'active' | 'success' | 'exception';
}

export const ProgressCircle: FC<ProcessCircleProps> = memo(({
                                                              format,
                                                              percent = 0,
                                                              strokeWidth = 6,
                                                              size = 'middle',
                                                              showInfo = true,
                                                              railColor = '#eee',
                                                              strokeColor = '#1777FF',
                                                              strokeLineCap = 'round',
                                                              status
                                                            }) => {
  const clsPrefix = 'triones-antm-progress-circle';
  const canvasRef = useRef<any>("canvas_" + Math.random());
  const computedWidth = () => {
    switch (size) {
      case 'small':
        return 50;
      case 'middle':
        return 100;
      case 'large':
        return 150;
      default:
        return size;
    }
  }

  const computedHeight = () => {
    switch (size) {
      case 'small':
        return 50;
      case 'middle':
        return 100;
      case 'large':
        return 150;
      default:
        return size;
    }
  }

  const style: CSSProperties = {width: computedWidth(), height: computedHeight()}

  const computedSize = () => {
    const iconSize = (computedWidth()! - strokeWidth) / 2 / 3;
    if (iconSize < 24) {
      return 24;
    }
    return iconSize;
  }

  const handleIndicator = () => {
    const iconSize = computedSize();
    if (format) {
      return format(percent)
    }
    if (status === 'exception') {
      return <CloseOutline style={{color: 'red', fontSize: iconSize}}/>
    }
    if (percent >= 100) {
      return <CheckOutline style={{color: 'green', fontSize: iconSize}}/>
    }
    return <div style={{color: '#333', fontSize: iconSize}}>{percent}%</div>
  }

  const handleDraw = () => {
    const centerX = computedWidth()! / 2;
    const centerY = computedHeight()! / 2;
    const radius = (Math.min(computedWidth()!, computedHeight()!) - strokeWidth) / 2;

    const sweepAngle = (percent ? percent / 100 : 0) * 2 * Math.PI;

    const startAngle = -Math.PI / 2;  // 从顶部开始

    // 创建画布上下文，不能使用Taro.createCanvasContext(),否则h5下会报错
    const ctx =  createCanvasContext(canvasRef.current)
    ctx.clearRect(0, 0, computedWidth()!, computedHeight()!);

    //region 画背景圈
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = railColor;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    //endregion

    //region 画进度圈
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sweepAngle);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = strokeLineCap;
    ctx.stroke();
    //endregion

    ctx.draw()
  }

  useEffect(() => {
    handleDraw();
  }, [percent])


  return <div className={classNames(`${clsPrefix}`)} style={style}>
    <Canvas style={style} canvasId={canvasRef.current} id={canvasRef.current} />
    {(showInfo && computedWidth()! > 20) && <div className={`${clsPrefix}-indicator`}>{handleIndicator()}</div>}
  </div>
});

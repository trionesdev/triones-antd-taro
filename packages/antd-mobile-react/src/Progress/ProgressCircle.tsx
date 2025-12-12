import React, {CSSProperties, FC, memo, useEffect, useMemo, useRef} from "react"
import { Size } from "@trionesdev/antd-mobile-base-react";
import classNames from "classnames";
import './style.scss';
import { CheckOutline, CloseOutline } from "@trionesdev/antd-mobile-icons-react";
import { exceptionColor, ProgressStatus, successColor } from "./types";

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
  const canvasRef = useRef<any>();
  const computedWidth = useMemo(() => {
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
  },[size])

  const computedHeight = useMemo(() => {
    switch (size) {
      case 'small':
        return 50;
      case 'middle':
        return 100;
      case 'large':
        return 150;
      default:
        return 50;
    }
  },[size])

  const style: CSSProperties = { width: computedWidth, height: computedHeight }

  const computedSize = () => {
    const iconSize = (computedWidth - strokeWidth) / 2 / 3;
    if (iconSize < 24) {
      return 24;
    }
    return iconSize;
  }

  const handleIndicator = () => {
    const iconSize = computedSize();
    let indicatorColor = '#333';
    if (status === 'exception') {
      indicatorColor = exceptionColor;
    }
    if (percent >= 100) {
      indicatorColor = successColor;
    }
    if (format) {
      return <div style={{ color: indicatorColor, fontSize: iconSize }}>{format(percent)}</div>
    }
    if (status === 'exception') {
      return <CloseOutline style={{ color: indicatorColor, fontSize: iconSize }} />
    }
    if (percent >= 100) {
      return <CheckOutline style={{ color: indicatorColor, fontSize: iconSize }} />
    }
    return <div style={{ color: indicatorColor, fontSize: iconSize }}>{percent}%</div>
  }

  const handleDraw = () => {
    const width = computedWidth!;
    const height = computedHeight!;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = (Math.min(width, height) - strokeWidth) / 2;

    console.log(centerX, centerY, radius);

    const sweepAngle = (percent ? percent / 100 : 0) * 2 * Math.PI;

    const startAngle = -Math.PI / 2;  // 从顶部开始


    const ctx = canvasRef.current.getContext('2d');
    ctx.width = width;
    ctx.height = height;

    ctx.clearRect(0, 0, computedWidth, computedHeight);

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


  }

  useEffect(() => {
    console.log(canvasRef.current);
    if (canvasRef.current) {
      handleDraw();
    }
  }, [percent, canvasRef.current])


  return <div className={classNames(`${clsPrefix}`)} style={style}>
    <canvas ref={canvasRef} width={computedWidth} height={computedHeight} />
    {(showInfo && computedWidth > 20) && <div className={`${clsPrefix}-indicator`}>{handleIndicator()}</div>}
  </div>
});

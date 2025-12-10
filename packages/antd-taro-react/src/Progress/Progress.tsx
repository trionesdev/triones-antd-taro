import React, {FC} from "react"
import {ProgressCircle} from "./ProgressCircle";
import {Size} from "../types";
import "./style.scss"
import {ProgressLine} from "./ProgressLine";

export type ProgressProps = {
  format?: (percent: number) => string;
  type?: 'line' | 'circle'
  percent?: number;
  size?: Size;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  status?: 'normal' | 'active' | 'success' | 'exception';
}

export const Progress: FC<ProgressProps> = ({
                                              format,
                                              type = 'line', percent = 0,
                                              size = 'middle',
                                              showInfo = true,
                                              railColor = '#eee',
                                              strokeColor = '#1777FF', status
                                            }) => {

  const handleComputedStrokeColor = () => {
    if (status === 'exception') {
      return 'red'
    }
    if (percent >= 100) {
      return 'green'
    }
    return strokeColor
  }

  if (type === 'line') {
    return <ProgressLine percent={percent} size={size} strokeColor={handleComputedStrokeColor()} showInfo={showInfo}/>
  }
  return <ProgressCircle percent={percent} size={size} strokeColor={handleComputedStrokeColor()} showInfo={showInfo}
                         status={status}/>
}

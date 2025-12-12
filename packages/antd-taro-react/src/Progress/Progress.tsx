import React, {FC} from "react"
import {ProgressCircle} from "./ProgressCircle";
import {Size} from "../types";
import "./style.scss"
import {ProgressLine} from "./ProgressLine";
import {exceptionColor, PositionAlign, ProgressStatus, successColor} from "./types";

export type ProgressProps = {
  format?: (percent: number) => string;
  type?: 'line' | 'circle'
  percent?: number;
  size?: Size;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  status?: ProgressStatus;
  positionAlign?: PositionAlign;
}

export const Progress: FC<ProgressProps> = ({
                                              format,
                                              type = 'line', percent = 0,
                                              size = 'middle',
                                              showInfo = true,
                                              railColor = '#E5E5E5',
                                              strokeColor = '#1777FF', status,
                                              positionAlign
                                            }) => {

  const handleComputedStrokeColor = () => {
    if (status === 'exception') {
      return exceptionColor
    }
    if (percent >= 100) {
      return successColor
    }
    return strokeColor
  }

  if (type === 'line') {
    return <ProgressLine format={format} percent={percent} size={size} railColor={railColor}
                         strokeColor={handleComputedStrokeColor()}
                         status={status}
                         showInfo={showInfo} positionAlign={positionAlign}/>
  }
  return <ProgressCircle format={format} percent={percent} size={size} railColor={railColor}
                         strokeColor={handleComputedStrokeColor()}
                         showInfo={showInfo}
                         status={status}/>
}

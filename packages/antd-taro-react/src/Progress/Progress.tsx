import React, {FC} from "react"
import {ProgressCircle} from "./ProgressCircle";
import {Size} from "../types";
import "./style.scss"
import {ProgressLine} from "./ProgressLine";
import {exceptionColor, PercentPositionAlign, ProgressStatus, successColor} from "./types";

export type ProgressProps = {
  /**
   * @description 内容的模板函数
   * @default percent => `${percent}%`
   */
  format?: (percent: number) => string;
  type?: 'line' | 'circle'
  /**
   * @description 百分比
   * @default 0
   */
  percent?: number;
  size?: Size;
  /**
   * @description 是否显示进度数值或状态图标
   * @default true
   */
  showInfo?: boolean;
  /**
   * @description 未完成的分段的颜色
   */
  railColor?: string;
  /**
   * @description 进度条的色彩
   */
  strokeColor?: string;
  status?: ProgressStatus;
  /**
   * @description 进度数值位置
   */
  percentPositionAlign?: PercentPositionAlign;
}

export const Progress: FC<ProgressProps> = ({
                                              format,
                                              type = 'line', percent = 0,
                                              size = 'middle',
                                              showInfo = true,
                                              railColor = '#E5E5E5',
                                              strokeColor = '#1777FF', status,
                                              percentPositionAlign
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
                         showInfo={showInfo} percentPositionAlign={percentPositionAlign}/>
  }
  return <ProgressCircle format={format} percent={percent} size={size} railColor={railColor}
                         strokeColor={handleComputedStrokeColor()}
                         showInfo={showInfo}
                         status={status}/>
}

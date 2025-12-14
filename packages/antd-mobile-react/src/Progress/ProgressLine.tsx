import React from "react";
import { SizeType } from "@trionesdev/antd-mobile-base-react";
import {FC} from "react";
import classNames from "classnames";
import {exceptionColor, PercentPositionAlign, ProgressStatus, successColor} from "./types";
import {CloseCircleFill,CheckCircleFill} from "@trionesdev/antd-mobile-icons-react";

type ProgressLineProps = {
  format?: (percent: number) => string;
  percent?: number;
  size?: SizeType | number;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  status?: ProgressStatus;
  percentPositionAlign?: PercentPositionAlign;
}
export const ProgressLine: FC<ProgressLineProps> = ({
                                                      format,
                                                      percent = 0,
                                                      size = 'middle',
                                                      showInfo = true,
                                                      railColor = '#E5E5E5',
                                                      strokeColor = '#1777FF',
                                                      status,
                                                      percentPositionAlign = 'end'
                                                    }) => {
  const clsPrefix = 'triones-antm-progress-line';

  const handleComputeLineHeight = () => {
    switch (size) {
      case 'small':
        return 6;
      case 'middle':
        return 8;
      case 'large':
        return 12;
      default:
        return size || 8;
    }
  }

  const handleComputeInfoHeight = () => {
    const lineHeight = handleComputeLineHeight();
    if (lineHeight <= 8) {
      return 12;
    } else if (lineHeight <= 12) {
      return 14
    } else {
      return 16;
    }
  }

  const handleIndicator = () => {
    if (format) {
      return <div>{format(percent)}</div>
    }
    if (status === 'exception') {
      return <CloseCircleFill style={{color: exceptionColor, fontSize: handleComputeInfoHeight()}}/>
    }
    if (percent >= 100) {
      return <CheckCircleFill style={{color: successColor, fontSize: handleComputeInfoHeight()}}/>
    }
    return <div style={{fontSize: handleComputeInfoHeight()}}>{percent}%</div>
  }

  const info = <div className={classNames(`${clsPrefix}-indicator`)}>
    {handleIndicator()}
  </div>

  return <div className={classNames(clsPrefix)}>
    {showInfo && percentPositionAlign === 'start' && info}
    <div className={classNames(`${clsPrefix}-rail`)} style={{backgroundColor: railColor}}>
      <div className={classNames(`${clsPrefix}-track`)} style={{
        width: `${percent}%`,
        backgroundColor: strokeColor,
        height: handleComputeLineHeight(),
      }}/>
    </div>
    {showInfo && percentPositionAlign === 'end' && info}
  </div>
}

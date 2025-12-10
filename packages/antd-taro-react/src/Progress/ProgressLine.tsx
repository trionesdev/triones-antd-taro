import React from "react";
import {Size} from "../types";
import {FC} from "react";
import classNames from "classnames";

type ProgressLineProps = {
  format?: (percent: number) => string;
  percent?: number;
  strokeWidth?: number;
  size?: Size;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
}
export const ProgressLine: FC<ProgressLineProps> = ({
                                               format,
                                               percent = 0,
                                               strokeWidth = 6,
                                               size = 'middle',
                                               showInfo = true,
                                               railColor = '#eee',
                                               strokeColor = '#1777FF'
                                             }) => {
  const clsPrefix = 'triones-antm-progress-line';

  return <div className={classNames(clsPrefix)}>
    <div className={classNames(`${clsPrefix}-rail`)}></div>
    {showInfo && <div className={classNames(`${clsPrefix}-indicator`)}></div>}
  </div>
}

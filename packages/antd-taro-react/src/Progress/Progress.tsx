import React, {FC} from "react"
import {ProgressCircle} from "./ProgressCircle";

export type ProgressProps = {
  type?: 'line' | 'circle'
  percent?: number;
}

export const Progress: FC<ProgressProps> = ({type = 'line', percent}) => {
  if (type === 'line') {
    return <></>
  }
  return <ProgressCircle percent={percent}/>
}

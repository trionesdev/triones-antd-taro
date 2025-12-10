import React, {FC, useRef} from "react"

type ProcessCircleProps={
  percent?: number;
}

export const ProgressCircle:FC<ProcessCircleProps> = ({percent}) => {
  const processRef = useRef<any>(null);
  return <div ref={processRef}></div>
}

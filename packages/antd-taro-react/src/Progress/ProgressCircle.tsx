import React, {CSSProperties, FC, useRef} from "react"
import {Canvas} from "@tarojs/components";
import {Size} from "../types";
import {useReady} from "@tarojs/taro";
import Taro from "@tarojs/taro";

type ProcessCircleProps = {
  percent?: number;
  size?: Size;
  diameter?: number;
}

export const ProgressCircle: FC<ProcessCircleProps> = ({percent, size = 'middle', diameter}) => {
  const canvasRef = useRef<any>("canvas_"+Math.random());
  const computedWidth = () => {
    if (diameter) {
      return diameter;
    }
    switch (size) {
      case 'small':
        return 60;
      case 'middle':
        return 120;
      case 'large':
        return 160;

    }
  }

  const computedHeight = () => {
    if (diameter) {
      return diameter;
    }
    switch (size) {
      case 'small':
        return 60;
      case 'middle':
        return 120;
      case 'large':
        return 160;

    }
  }

  const style: CSSProperties = {width: computedWidth(), height: computedHeight()}

  useReady(() => {
    const context = Taro.createCanvasContext(canvasRef.current)
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  })


  return <Canvas style={style}   canvasId={canvasRef.current}/>
}

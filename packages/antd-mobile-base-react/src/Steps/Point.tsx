import React, {FC} from "react"

type PointProps = {
  color?: string
}

export const Point: FC<PointProps> = ({color = '#1777FF'}) => {
  return <div style={{width: 10, height: 10, borderRadius: 90, backgroundColor: color}}/>
}

import React, {FC} from "react"
import Mask from "../Mask";

type CameraPopupProps={
  open?:boolean
}

export const CameraModal:FC<CameraPopupProps> = ({open}) => {
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  return <Mask open={innerOpen}>
    <div style={{width: '100%', height: '100%'}}>
      sss
    </div>
  </Mask>
}

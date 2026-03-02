import React, {FC} from "react"
import Overlay from "../Overlay";

type CameraPopupProps={
  open?:boolean
}

export const CameraModal:FC<CameraPopupProps> = ({open}) => {
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  return <Overlay open={innerOpen}>
    <div style={{width: '100%', height: '100%'}}>
      sss
    </div>
  </Overlay>
}

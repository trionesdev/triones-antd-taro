import {PopupModal, PopupProps} from "@trionesdev/antd-mobile-base-react";
import React, {PropsWithChildren, useEffect} from "react";
import {RootPortal} from "@tarojs/components";

export const Popup: React.FC<PropsWithChildren<PopupProps>> = ({open, ...rest}) => {
  const [rendered, setRendered] = React.useState(false);
  useEffect(() => {
    if (open) {
      setRendered(true);
    }
  }, [open]);
  return rendered && <RootPortal>
    <PopupModal {...rest} open={open}/>
  </RootPortal>;
}


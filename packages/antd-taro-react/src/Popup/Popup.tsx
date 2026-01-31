import React, {PropsWithChildren, useEffect} from "react";
import {RootPortal} from "@tarojs/components";
import Overlay from "../Overlay";

const cls = 'triones-antm-popup'

type  PopupProps = {
  open?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

export const Popup: React.FC<PropsWithChildren<PopupProps>> = ({open = false, position = 'botton'}) => {
  const [rendered, setRendered] = React.useState(false);
  useEffect(() => {
    if (open) {
      setRendered(true);
    }
  }, [open]);
  return rendered && <RootPortal>
    <Overlay open={open} className={cls}>

    </Overlay>
  </RootPortal>;
}


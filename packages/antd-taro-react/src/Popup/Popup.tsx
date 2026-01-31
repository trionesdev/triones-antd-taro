import React, {PropsWithChildren, useEffect} from "react";
import {RootPortal, View} from "@tarojs/components";
import Overlay from "../Overlay";
import classNames from "classnames";

const cls = 'triones-antm-popup'

export type  PopupProps = {
  open?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  closable?: boolean
  destroyOnHidden?: boolean;
  afterClose?: () => void;
}

export const Popup: React.FC<PropsWithChildren<PopupProps>> = ({
                                                                 open = false,
                                                                 position = 'botton',
                                                                 closable = true,
                                                                 destroyOnHidden = false,
                                                                 afterClose
                                                               }) => {
  const [rendered, setRendered] = React.useState(false);
  useEffect(() => {
    if (open) {
      setRendered(true);
    }
  }, [open]);

  return rendered && <RootPortal>
    <Overlay open={open} className={classNames(cls, `${cls}-${position}`)}>
      <View></View>
    </Overlay>
  </RootPortal>;
}


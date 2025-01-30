import React, {FC, PropsWithChildren, useEffect} from "react";
import {createPortal} from "react-dom";
import {PopupModal, PopupModalProps} from "./popup-modal";


type PopupProps = Omit<PopupModalProps, 'onDestroy'> & {
  container?: HTMLElement,
}
export const Popup: FC<PropsWithChildren<PopupProps>> = ({
                                                    children,
                                                    container,
                                                    open = false,
                                                    ...rest
                                                  }) => {
  const [renderEnable, setRenderEnable] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const Portal = () => {
    console.log("ModalPortal");
    if (!ref.current) {
      const rootContainer = container || document.body;
      ref.current = document.createElement('div');
      rootContainer.appendChild(ref.current);
    }
    return <>{createPortal(<PopupModal {...rest} open={open}>{children}</PopupModal>, ref.current!)}</>

    // return <></>
  }

  useEffect(() => {
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);

  return <>{renderEnable && <Portal/>}</>;
}

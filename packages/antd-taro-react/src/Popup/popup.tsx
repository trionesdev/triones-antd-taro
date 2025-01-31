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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = container || containerRef.current!;

  const Portal = () => {
    console.log("ModalPortal");
    if (!mountRef.current) {

      mountRef.current = document.createElement("div");
      rootContainer.appendChild(mountRef.current);
      console.log(mountRef.current);
    }

    const destroy = () => {
      if (rootContainer && mountRef.current) {
        rootContainer.removeChild(mountRef.current);
      }
    }

    return <>{createPortal(<PopupModal {...rest} onDestroy={destroy}
                                       open={open}>{children}</PopupModal>, mountRef.current!)}</>

  }

  useEffect(() => {
    console.log("open", open);
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);

  return <>
    {!container && <div ref={containerRef}></div>}
    {renderEnable && <Portal/>}</>;
}

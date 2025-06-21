import React, {FC, PropsWithChildren, useEffect} from "react";
import "./style.scss"
import {PopupModalProps} from "../Popup/popup-modal";
import {createPortal} from "react-dom";
import {MaskModal} from "./mask-modal";


export type MaskProps = Omit<PopupModalProps, 'onDestroy'> & {
  /**
   * @description 获取容器
   * @default null
   */
  getContainer?: () => HTMLElement,
}
export const Mask: FC<PropsWithChildren<MaskProps>> = ({
                                                         children,
                                                         getContainer,
                                                         open = false,
                                                         ...rest
                                                       }) => {
  const [renderEnable, setRenderEnable] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = getContainer?.() || containerRef.current!;

  const Portal = () => {
    if (!mountRef.current) {
      mountRef.current = document.createElement('div');
      rootContainer.appendChild(mountRef.current);
    }

    const destroy = () => {
      if (rootContainer && mountRef.current) {
        rootContainer.removeChild(mountRef.current);
      }
      mountRef.current = null;
      setRenderEnable(false);
    }

    return <>{createPortal(<MaskModal {...rest} onDestroy={destroy}
                                      open={open}>{children}</MaskModal>, mountRef.current!)}</>

  }

  useEffect(() => {
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);


  return <>
    {!getContainer?.() && <div ref={containerRef}></div>}
    {renderEnable && <Portal/>}</>;
}

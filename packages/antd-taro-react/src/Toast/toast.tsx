import React, {forwardRef, useEffect, useImperativeHandle} from "react";
import {FC} from "react";
import {ToastModal, ToastModalProps} from "./toast-modal";
import {createPortal} from "react-dom";

export type ToastProps = Omit<ToastModalProps, 'onDestroy'> & {
  getContainer?: () => HTMLElement,
}

export interface ToastHandle {
  clear(): void;
}

export const Toast1: FC<ToastProps> = forwardRef<ToastHandle, ToastProps>(({
                                                                             getContainer,
                                                                             open = false,
                                                                             ...rest
                                                                           }, ref) => {
  const [renderEnable, setRenderEnable] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = getContainer?.() || containerRef.current!;

  useImperativeHandle(ref, () => ({
    clear: () => {
    }
  }))

  const ToastPortal = () => {
    if (!mountRef.current) {
      mountRef.current = document.createElement("div");
      rootContainer.appendChild(mountRef.current);
    }

    const destroy = () => {
      if (rootContainer && mountRef.current) {
        rootContainer.removeChild(mountRef.current);
      }
      mountRef.current = null;
      setRenderEnable(false);
    }
    return <>{createPortal(<ToastModal {...rest} onDestroy={destroy} open={open}/>, containerRef.current!)}</>
  }

  useEffect(() => {
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);

  return <>
    {!getContainer?.() && <div ref={containerRef}></div>}
    {renderEnable && <ToastPortal/>}</>;
})

export class Toast {
  private container: HTMLElement | undefined;

  static show(config: ToastProps) {
    const toast = new Toast()
    toast.create(config);
    return toast;
  }

  destroy = () => {}

  create=(config: ToastProps)=>{
    this.container = config!.getContainer!();

  }
}

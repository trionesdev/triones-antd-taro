import React, {forwardRef, useEffect, useImperativeHandle} from "react";
import {FC} from "react";
import {ToastModal, ToastModalProps} from "./toast-modal";
import {createPortal} from "react-dom";
import {createRoot} from "react-dom/client";

export type ToastProps = Omit<ToastModalProps, 'onDestroy'> & {
  getContainer?: () => HTMLElement,

}

export interface ToastHandle {
  clear(): void;
}

export const InternalToast: FC<ToastProps> = forwardRef<ToastHandle, ToastProps>(({
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
    {renderEnable && <ToastPortal/>}
  </>;
})

export type ToastShowProps = Omit<ToastModalProps, 'onDestroy' | 'open'> & {
  getContainer: () => HTMLElement,

}

export class Toast {
  private containerEl: HTMLElement | undefined;
  private mountEl: HTMLElement | null = null;
  private timer: any;

  static show(config: ToastShowProps) {
    const toast = new Toast()
    toast.create(config);
    return toast;
  }

  destroy = () => {
    if (this.mountEl) {
      this.mountEl.parentNode?.removeChild(this.mountEl);
    }
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  create = (props: ToastShowProps) => {
    const {getContainer, duration = 2000, ...config}: ToastShowProps = props;
    this.containerEl = getContainer!();
    this.mountEl = document.createElement("div");
    this.containerEl!.appendChild(this.mountEl);
    createRoot(this.mountEl!).render(<ToastModal {...config} onDestroy={this.destroy} open={true}
                                                 durationAble={false}/>)

    if (duration) {
      this.timer = setTimeout(() => {
        this.destroy()
      }, duration)
    }
  }
}

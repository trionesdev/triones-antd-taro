import classNames from 'classnames';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const cls = 'triones-antm-overlay';

export type OverlayProps = {
  className?: string;
  style?: React.CSSProperties;
  open: boolean;
  zIndex?: number;
  closeOnOverlayClick?: boolean;
  destroyOnHidden?: boolean;
  onClick?: (e: any) => void;
  onClose?: () => void;
  afterClose?: () => void;
  afterOpenChange?: (open: boolean) => void;
  duration?: number;
  getContainer?: () => HTMLElement;
};

export const Overlay: FC<PropsWithChildren<OverlayProps>> = ({
  children,
  className,
  style,
  open,
  zIndex = 1000,
  closeOnOverlayClick = true,
  destroyOnHidden = false,
  onClick,
  onClose,
  afterClose,
  afterOpenChange,
  duration = 300,
  getContainer,
}) => {
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = getContainer?.() || document.body;

  const [active, setActive] = useState(false);
  const [render, setRender] = useState(open);
  const [internalOpen, setInternalOpen] = useState(open);

  const handleDestroy = () => {
    if (rootContainer && mountRef.current) {
      rootContainer.removeChild(mountRef.current);
    }
    mountRef.current = null;
  };

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
    if (destroyOnHidden) {
      handleDestroy();
    }
  };

  const handleClick = (e: any) => {
    // 只在点击遮罩层本身时触发，忽略子元素冒泡上来的点击
    if (e.target === e.currentTarget) {
      onClick?.(e);
      if (closeOnOverlayClick) {
        handleClose();
      }
    }
  };

  useEffect(() => {
    if (open === undefined) {
      return;
    }
    if (open !== internalOpen) {
      setInternalOpen(open);
    }
  }, [open]);

  useEffect(() => {
    if (internalOpen) {
      setRender(true);
      afterOpenChange?.(true);
      // Next tick to allow render before transition
      const timer = setTimeout(() => {
        setActive(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setActive(false);
      afterOpenChange?.(false);
      const timer = setTimeout(() => {
        setRender(false);
        afterClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [internalOpen, duration]);

  if (!render) return null;

  if (render) {
    if (!mountRef.current) {
      mountRef.current = document.createElement('div');
      rootContainer?.appendChild(mountRef.current);
    }
  }

  return render && createPortal(
    <div
      className={classNames(cls, { [`${cls}-active`]: active }, className)}
      onClick={handleClick}
      style={{ ...style, zIndex, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>,
    mountRef.current!,
  );
};

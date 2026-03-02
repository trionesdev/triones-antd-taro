import { RootPortal, View } from "@tarojs/components";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { FC } from "react";
import classNames from "classnames";
import { ITouchEvent } from "@tarojs/components";

const cls = 'triones-antm-overlay'

export type OverlayProps = {
  className?: string;
  style?: React.CSSProperties;
  open: boolean;
  zIndex?: number;
  closeOnOverlayClick?: boolean;
  destroyOnHidden?: boolean;
  onClick?: (e: ITouchEvent) => void;
  onClose?: () => void;
  afterClose?: () => void;
  afterOpenChange?: (open: boolean) => void;
  duration?: number;
}

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
}) => {
  const [active, setActive] = useState(false);
  const [render, setRender] = useState(open);
  const [internalOpen, setInternalOpen] = useState(open);

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
      if (destroyOnHidden) {
        setRender(false);
      }
      return () => clearTimeout(timer);
    }
  }, [internalOpen, duration, destroyOnHidden]);

  const handleClick = (e: ITouchEvent) => {
    // 只在点击遮罩层本身时触发，忽略子元素冒泡上来的点击
    if (e.target === e.currentTarget) {
      onClick?.(e);
      if (closeOnOverlayClick) {
        setInternalOpen(false)
        onClose?.();
      }
    }
  };

  useEffect(() => {
    if (open == undefined) {
      return
    }
    if (open !== internalOpen) {
      setInternalOpen(open);
    }

  }, [open]);

  if (!render) return null;

  return (
    <RootPortal>
      <View
        className={classNames(cls, { [`${cls}-active`]: active }, className)}
        onClick={handleClick}
        style={{ ...style, zIndex, transitionDuration: `${duration}ms` }}
        catchMove={true}
      >
        {children}
      </View>
    </RootPortal>
  );
};

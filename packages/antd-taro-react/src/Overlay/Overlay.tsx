import {RootPortal, View} from "@tarojs/components";
import React, {PropsWithChildren, useEffect} from "react";
import {FC} from "react";
import classNames from "classnames";

const cls = 'triones-antm-overlay'

export type OverlayProps = {
  className?: string;
  style?: React.CSSProperties;
  open: boolean;
  zIndex?: number;
  closeOnOverlayClick?: boolean;
  onClick?: () => void;
}

export const Overlay: FC<PropsWithChildren<OverlayProps>> = ({
                                                               children,
                                                               className,
                                                               style,
                                                               open = false,
                                                               zIndex = 1000,
                                                               closeOnOverlayClick = true,
                                                               onClick
                                                             }) => {
  const [internalOpen, setInternalOpen] = React.useState(open);

  const handleClick = () => {
    if (closeOnOverlayClick) {
      setInternalOpen(false);
    }
    onClick?.();
  };

  useEffect(() => {
    if (open !== internalOpen) {
      setInternalOpen(open);
    }
  }, [open]);

  useEffect(() => {
    if (!internalOpen){

    }
  }, [internalOpen]);

  if (!internalOpen) return null;
  return (
    <RootPortal>
      <View className={classNames(cls, className)} onClick={handleClick} style={{...style, zIndex}} catchMove={true}>
        {children}
      </View>
    </RootPortal>
  );
};

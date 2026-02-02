import React, { FC, memo, PropsWithChildren, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CloseOutline } from '@trionesdev/antd-mobile-icons-react';
import Overlay from '../Overlay';
import SafeArea from '../SafeArea';

const cls = 'triones-antm-popup';

export type PopupProps = {
  open?: boolean;
  title?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  closable?: boolean;
  closeIconPosition?: 'top-left' | 'top-right';
  closeIcon?: React.ReactNode;
  /**
   * @description 点击遮罩层是否关闭
   * @default true
   */
  overlayClosable?: boolean;
  destroyOnHidden?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
  afterOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  round?: boolean;
  safeArea?: boolean;
  zIndex?: number;
  styles?: {
    overlay?: React.CSSProperties;
    container?: React.CSSProperties;
    header?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
  };
} ;
export const Popup: FC<PropsWithChildren<PopupProps>> = memo(
  ({
    open = false,
    title,
    position = 'bottom',
    closable = false,
    closeIconPosition = 'top-right',
    closeIcon,
    overlayClosable = true,
    destroyOnHidden = false,
    onClose,
    afterClose,
    afterOpenChange,
    className,
    style,
    round = false,
    safeArea = true,
    zIndex,
    children,
    styles,
  }) => {
    const [internalOpen, setInternalOpen] = useState(open || false);
    const handleClose = () => {
      setInternalOpen(false);
      onClose?.();
    };

    useEffect(() => {
      if (open === undefined) {
        return;
      }
      if (open !== internalOpen) {
        setInternalOpen(open);
      }
    }, [open]);

    const popupInner = (
      <>
        {closable && (
          <div
            className={classNames(
              `${cls}-close`,
              `${cls}-close-${closeIconPosition}`,
            )}
            onClick={handleClose}
          >
            {closeIcon || <CloseOutline />}
          </div>
        )}
        {title && (
          <div className={`${cls}-header`} style={styles?.header}>
            <div className={`${cls}-title`} style={styles?.title}>
              {title}
            </div>
          </div>
        )}
        <div className={`${cls}-body`} style={styles?.body}>
          {children}
        </div>
      </>
    );

    return (
      <Overlay
        open={internalOpen}
        onClose={handleClose}
        closeOnOverlayClick={overlayClosable}
        zIndex={zIndex}
        className={classNames(`${cls}-overlay`, `${cls}-${position}`)}
        afterClose={afterClose}
        afterOpenChange={afterOpenChange}
        destroyOnHidden={destroyOnHidden}
        style={styles?.overlay}
      >
        <div
          className={classNames(`${cls}-container`, {
            [`${cls}-round`]: round,
          })}
          style={styles?.container}
        >
          {['top', 'bottom', 'left', 'right'].includes(position) ? (
            <SafeArea>{popupInner}</SafeArea>
          ) : (
            popupInner
          )}
        </div>
      </Overlay>
    );
  },
);

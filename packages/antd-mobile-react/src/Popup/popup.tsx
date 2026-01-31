import React, {FC, memo, PropsWithChildren} from 'react';
import {PopupModal, PopupModalProps} from './popup-modal';

export type PopupProps = Omit<PopupModalProps, 'onDestroy'> ;
export const Popup: FC<PropsWithChildren<PopupProps>> = memo(
  ({ children, open = false, ...rest }) => {
    // const [renderEnable, setRenderEnable] = React.useState(false);
    // const containerRef = React.useRef<HTMLDivElement>(null);
    // const mountRef = React.useRef<HTMLDivElement | null>(null);
    // const rootContainer = getContainer?.() || containerRef.current!;
    //
    // const Portal = () => {
    //   if (!mountRef.current) {
    //     mountRef.current = document.createElement('div');
    //     rootContainer.appendChild(mountRef.current);
    //   }
    //
    //   const destroy = () => {
    //     if (rootContainer && mountRef.current) {
    //       rootContainer.removeChild(mountRef.current);
    //     }
    //     mountRef.current = null;
    //     setRenderEnable(false);
    //   };
    //
    //   return (
    //     <>
    //       {createPortal(
    //         <PopupModal {...rest} onDestroy={destroy} open={open}>
    //           {children}
    //         </PopupModal>,
    //         mountRef.current!,
    //       )}
    //     </>
    //   );
    // };

    // useEffect(() => {
    //   if (open && !renderEnable) {
    //     setRenderEnable(true);
    //   }
    //   // rest.afterOpenChange?.(open);
    // }, [open]);

    if (!open){
      return null;
    }

    return <PopupModal {...rest} open={open}>{children}</PopupModal>;
  },
);

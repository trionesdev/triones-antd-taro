import React, {useEffect} from "react";
import ReactDOM from 'react-dom/client';
import {FC, PropsWithChildren} from "react";
import {PopupModal, PopupModalProps} from "./popup-modal";

const popupCls = "antd-popup";

export type Position = "top" | "bottom" | "left" | "right";
type PopupProps = Omit<PopupModalProps, 'onDestroy'> & {
  container?: HTMLElement,
}
const Popup: FC<PropsWithChildren<PopupProps>> = ({
                                                    children,
                                                    open,
                                                    container,
                                                    ...rest
                                                  }) => {

  const handleOpen = () => {
    const div = document.createElement('div');
    const body = container || document.body;
    body.appendChild(div);

    const root = ReactDOM.createRoot(div as HTMLElement);

    function destroy() {
      setTimeout(() => root.unmount());
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }

    root.render(
      React.createElement(PopupModal, {
        ...rest,
        children,
        onDestroy: destroy,
      }),
    );
  }
  useEffect(() => {
    if (open) {
      handleOpen()
    }
  }, [open]);
  return <></>
}

export default Popup;

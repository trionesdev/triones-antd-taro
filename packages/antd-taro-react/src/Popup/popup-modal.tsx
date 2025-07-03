import { CloseOutline } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, {
  CSSProperties,
  FC,
  memo,
  PropsWithChildren,
  useMemo,
} from 'react';
import SafeArea from '../SafeArea';
import './style.scss';

const popupCls = 'triones-antm-popup';

export type Position = 'top' | 'bottom' | 'left' | 'right';

export type PopupModalProps = {
  className?: string;
  /**
   * @description 样式
   * @default horizontal
   */
  styles?: {
    body?: CSSProperties;
  };
  /**
   * @description Modal 完全关闭后的回调
   * @default
   */
  afterClose?: () => void;
  /**
   * @description 是否打开
   * @default false
   */
  open?: boolean;
  /**
   * @description 打开位置
   * @default bottom
   */
  position?: Position;
  /**
   * @description 是否可以关闭(显示关闭按钮)
   * @default false
   */
  closable?: boolean;
  /**
   * @description 是否蒙层关闭
   * @default true
   */
  maskClosable?: boolean;
  onMaskClick?: () => void;
  /**
   * @description 关闭时销毁 Modal 里的子元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 设置 Modal 的 z-index
   * @default 1000
   */
  zIndex?: number;
  onClose?: () => void;
  /**
   * @description 打开和关闭 Modal 时动画结束后的回调
   * @default
   */
  afterOpenChange?: (open: boolean) => void;
  onDestroy?: () => void;
};

export const PopupModal: FC<PropsWithChildren<PopupModalProps>> = memo(
  ({
    children,
    styles,
    afterClose,
    open = false,
    position = 'bottom',
    closable = false,
    maskClosable = true,
    onMaskClick,
    destroyOnClose = false,
    zIndex = 1000,
    onClose,
    afterOpenChange,
    onDestroy,
  }) => {
    const safeAreaPosition = useMemo(() => {
      if (position === 'bottom') {
        return 'bottom';
      } else if (position === 'top') {
        return 'top';
      }
      return undefined;
    }, [position]);

    const handleClose = () => {
      onClose?.();
      afterClose?.();
      if (destroyOnClose) {
        onDestroy?.();
      }
    };

    return (
      <div
        className={classNames(popupCls)}
        style={{ zIndex, display: open ? 'block' : 'none' }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div
          className={classNames(`${popupCls}-mask`)}
          onClick={() => {
            if (maskClosable) {
              onMaskClick?.();
              handleClose();
            }
          }}
        ></div>
        <div
          className={classNames(`${popupCls}-body`, `${popupCls}-${position}`)}
          style={styles?.body}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          {closable && (
            <>
              <CloseOutline
                className={classNames(`${popupCls}-close`)}
                onClick={() => {
                  handleClose();
                }}
              />
            </>
          )}
          <SafeArea position={safeAreaPosition}>{children}</SafeArea>
        </div>
      </div>
    );
  },
);

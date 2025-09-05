import {
  CheckCircleFill,
  CloseCircleFill,
  CloseOutline,
  ExclamationCircleFill,
  InformationCircleFill,
} from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import './style.scss';

export type AlertProps = {
  type?: 'success' | 'info' | 'warning' | 'error';
  /**
   * @description 告警信息
   */
  message: React.ReactNode;
  /**
   * @description 告警信息详情
   */
  description?: React.ReactNode;
  /**
   * @description 是否显示图标
   * @default false
   */
  showIcon?: boolean;
  /**
   * @description 是否可以关闭
   * @default false
   */
  closable?: boolean;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
  /**
   * @description 关闭后回调
   */
  afterClose?: () => void;
};
export const Alert: FC<AlertProps> = ({
  type = 'success',
  showIcon = false,
  closable = false,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const alertCls = 'triones-antm-alert';

  if (!visible) {
    return null;
  }

  return (
    <div className={classNames(`${alertCls}`, `${alertCls}-${type}`, {})}>
      {showIcon && (
        <div className={`${alertCls}-icon`}>
          {type === 'success' && <CheckCircleFill />}
          {type === 'info' && <InformationCircleFill />}
          {type === 'warning' && <ExclamationCircleFill />}
          {type === 'error' && <CloseCircleFill />}
        </div>
      )}
      <div className={`${alertCls}-content`}>
        <div className={`${alertCls}-message`}>{props.message}</div>
        {props.description && (
          <div className={`${alertCls}-description`}>{props.description}</div>
        )}
      </div>
      {closable && (
        <div
          className={`${alertCls}-close-icon`}
          onClick={() => {
            props.onClose?.();
            setVisible(false);
            props.afterClose?.();
          }}
        >
          <CloseOutline />
        </div>
      )}
    </div>
  );
};

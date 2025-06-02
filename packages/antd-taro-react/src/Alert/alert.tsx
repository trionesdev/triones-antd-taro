import React, {FC} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react/src";
import {
  CheckCircleFill,
  CloseCircleFill,
  ExclamationCircleFill,
  InformationCircleFill
} from "@trionesdev/antd-taro-icons-react";

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
};
export const Alert: FC<AlertProps> = ({type = 'success', showIcon = false,closable=false, ...props}) => {
  const alertCls = 'triones-antm-alert';


  return <div className={classNames(`${alertCls}`, `${alertCls}-${type}`, {})}>
    {showIcon && <div className={`${alertCls}-icon`}>
      {type==='success' && <CheckCircleFill/>}
      {type==='info' && <InformationCircleFill/>}
      {type==='warning' && <ExclamationCircleFill/>}
      {type==='error' && <CloseCircleFill/>}
    </div>}
    <div className={`${alertCls}-content`}>
      <div className={`${alertCls}-message`}>{props.message}</div>
      {props.description && <div className={`${alertCls}-description`}>{props.description}</div>}
    </div>
    {closable && <div className={`${alertCls}-close-icon`} onClick={props.onClose}>
      <CloseOutline/>
    </div>}
  </div>
}

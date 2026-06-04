import React, {FC} from 'react';
import {CheckboxProps, cls} from './types';
import classNames from 'classnames';
import {CheckOutline} from '@trionesdev/antd-mobile-icons-react';

type CheckboxButtonProps = CheckboxProps  & { onClick: () => void };

export const CheckboxButton:FC<CheckboxButtonProps> = ({children,checked,disabled,onClick}) => {

  const prefixCls =`${cls}-button`;
  return (<label className={classNames(`${prefixCls}`,{
    [`${cls}-disabled`]: disabled,
    [`${prefixCls}-checked`]: checked
  })} onClick={() => {
    if (disabled){
      return
    }
    onClick?.()
  }}>
    <div className={classNames(`${prefixCls}-content`)}>{children}</div>
    {checked && <div className={classNames(`${prefixCls}-icon`)}>
      <CheckOutline className={classNames(`checkedIcon`)}/>
    </div>}
  </label>)
}

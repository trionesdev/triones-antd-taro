import React from 'react';
import { CheckboxProps, cls } from './types';
import { FC, useState } from 'react';
import classNames from 'classnames';
import { CheckOutline } from '@trionesdev/antd-taro-icons-react';

export const CheckboxButton:FC<CheckboxProps> = ({children,checked,defaultChecked,disabled}) => {
  const [innerChecked, setInnerChecked] = useState(checked ?? defaultChecked ?? false)
  const prefixCls =`${cls}-button`;
  return (<label className={classNames(`${prefixCls}`,{
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-checked`]: innerChecked
  })} onClick={() => {
    if (disabled){
      return
    }
    setInnerChecked(!innerChecked)
  }}>
    <div className={classNames(`${prefixCls}-content`)}>{children}</div>
    {innerChecked && <div className={classNames(`${prefixCls}-icon`)}>
      <CheckOutline className={classNames(`checkedIcon`)}/>
    </div>}
  </label>)
}

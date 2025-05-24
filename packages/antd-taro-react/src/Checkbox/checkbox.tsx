import { CheckOutline } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import  React,{ FC, useState } from 'react';
import './index.scss';
import { CheckboxProps, cls } from './types';

export const Checkbox: FC<CheckboxProps> = ({
  children,
  checked,
  defaultChecked,
  disabled,
}) => {
  const [innerChecked, setInnerChecked] = useState(checked ?? defaultChecked ?? false);

  const prefixCls = `${cls}`;
  return (
    <label className={classNames(`${prefixCls}-wrapper`,{
      [`${prefixCls}-disabled`]: disabled,
    })} onClick={() => {

      setInnerChecked(!innerChecked);
    }}>
      <div className={classNames(`${prefixCls}`)}>
        {/*<input*/}
        {/*  className={`${prefixCls}-input`}*/}
        {/*  type={'checkbox'}*/}
        {/*  checked={innerChecked}*/}
        {/*  disabled={disabled}*/}
        {/*  onChange={(e) => {*/}
        {/*    setInnerChecked(e.target.checked);*/}
        {/*  }}*/}
        {/*/>*/}
        <div className={classNames(`${prefixCls}-fake`)}>
          {innerChecked ? (
            <div className={classNames(`${prefixCls}-fake-checked`)}>
              <CheckOutline />
            </div>
          ) : (
            <div className={classNames(`${prefixCls}-fake-unchecked`)}></div>
          )}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-content`)}>{children}</div>
    </label>
  );
};

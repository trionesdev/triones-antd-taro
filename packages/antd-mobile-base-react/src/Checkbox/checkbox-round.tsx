import {CheckOutline} from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, {FC} from 'react';
import './index.scss';
import {CheckboxProps, cls} from './types';

type CheckboxRoundProps = CheckboxProps & { onClick: () => void };

export const CheckboxRound: FC<CheckboxRoundProps> = ({
                                                        children,
                                                        checked,
                                                        disabled,
                                                        onClick
                                                      }) => {


  const prefixCls = `${cls}-round`;
  return (
    <label className={classNames(`${prefixCls}`, {
      [`${cls}-disabled`]: disabled,
    })} onClick={() => {
      if (disabled) {
        return
      }
      onClick?.()
    }}>
      <div className={classNames(`${prefixCls}`)}>
        <div className={classNames(`${prefixCls}-fake`)}>
          {checked ? (
            <div className={classNames(`${prefixCls}-fake-checked`)}>
              <CheckOutline/>
            </div>
          ) : (
            <div className={classNames(`${prefixCls}-fake-unchecked`)}></div>
          )}
        </div>
      </div>
      {children && <div className={classNames(`${prefixCls}-content`)}>{children}</div>}
    </label>
  );
};

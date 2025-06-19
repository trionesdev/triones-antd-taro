import { RightOutline } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC } from 'react';
import './styles.scss';
import { CellProps } from './types';



const cls = 'triones-antm-cell';

export const Cell: FC<CellProps> = ({
  className,
  style,
  children,
  extra,
  arrow = true,
  onClick,
}) => {
  return (
    <div className={classNames(cls, className)} style={style} onClick={onClick}>
      <div className={classNames(`${cls}-wrapper`)}>
        <div className={classNames(`${cls}-content`)}>{children}</div>
        {extra && <div className={classNames(`${cls}-extra`)}>{extra}</div>}
      </div>
      {arrow && (
        <div className={classNames(`${cls}-arrow`)}>
          <RightOutline />
        </div>
      )}
    </div>
  );
};

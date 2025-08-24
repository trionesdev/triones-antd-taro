import { RightOutline } from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, { FC } from 'react';
import './styles.scss';
import { CellProps } from './types';

const cls = 'triones-antm-cell';

export const Cell: FC<CellProps> = ({
  className,
  style,
  placeholder,
  children,
  extra,
  arrow = true,
  onClick,
  picker,
}) => {
  return (
    <div className={classNames(cls, className)} style={style} onClick={onClick}>
      <div className={classNames(`${cls}-wrapper`)}>
        <div className={classNames(`${cls}-content`)}>
          {picker}
          {children ||
            (placeholder && (
              <div className={classNames(`${cls}-placeholder`)}>
                {placeholder}
              </div>
            ))}
        </div>
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

import classNames from 'classnames';
import React, { FC } from 'react';
import '../style/asset.scss';
import './index.scss';

export type InputOPTProps = {
  className?: string;
  style?: React.CSSProperties;
  length?: number;
};
export const InputOPT: FC<InputOPTProps> = ({ className, style, length=6 }) => {
  const cls = 'triones-antm-input-pot';

  return <div className={classNames(cls, className)} style={style}>
    {
      Array.from({ length }).map((_, index) => {
        return <input key={index} className={classNames(`${cls}-input`, `${cls}-outlined`)} size={1} type={`text`}/>;
      })
    }
  </div>;
};

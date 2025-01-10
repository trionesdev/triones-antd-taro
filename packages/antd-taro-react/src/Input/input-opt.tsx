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
  const inputPotCls = 'triones-antm-input-pot';
  const inputCls = 'triones-antm-input';

  return <div className={classNames(inputPotCls, className)} style={style}>
    {
      Array.from({ length }).map((_, index) => {
        return <input key={index} className={classNames(`${inputCls}`,`${inputPotCls}-input`, `${inputPotCls}-outlined`)} size={1} type={`text`}/>;
      })
    }
  </div>;
};

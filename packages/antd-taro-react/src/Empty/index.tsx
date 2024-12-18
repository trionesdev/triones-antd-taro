import './style.scss';
import * as React from 'react';
import classNames from 'classnames';

import DefaultEmptyImg from './empty';


const defaultEmptyImg = <DefaultEmptyImg />;

export interface EmptyProps {
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

type CompoundedComponent = React.FC<EmptyProps>;

const Empty: CompoundedComponent = ({
  image = defaultEmptyImg,
  description,
  children,
  imageStyle,
  style,
  ...restProps
}) => {

  const prefixCls = 'triones-antm-empty'
  const des = typeof description !== 'undefined' ? description : '暂无数据';
  const alt = typeof des === 'string' ? des : 'empty';

  let imageNode: React.ReactNode = null;

  if (typeof image === 'string') {
    imageNode = <img alt={alt} src={image} />;
  } else {
    imageNode = image;
  }

  return <div className={`${prefixCls}-wrapper`}>
    <div
      className={prefixCls}
      style={{ ...style }}
      {...restProps}
    >
      <div className={`${prefixCls}-image`} style={imageStyle}>
        {imageNode}
      </div>
      {des && <div className={`${prefixCls}-description`}>{des}</div>}
      {children && <div className={`${prefixCls}-footer`}>{children}</div>}
    </div>
  </div>
};

export default Empty;

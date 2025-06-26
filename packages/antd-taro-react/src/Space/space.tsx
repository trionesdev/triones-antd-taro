import classNames from 'classnames';
import React, { CSSProperties, FC, ReactNode, useMemo } from 'react';
import './style.scss';

const classPrefix = `triones-antm-space`;

export type Size = 'small' | 'middle' | 'large' | number;

export type SpaceProps = {
  className?: string;

  /**
   * @description 间距方向
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 垂直对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 垂直对齐方式
   */
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  /**
   * @description 换行
   */
  wrap?: boolean;
  /**
   * @description 是否为块级元素
   */
  block?: boolean;
  /**
   * @description 点击事件
   * @param event
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
  /**
   * @description 间距大小
   */
  size?: Size | Size[];
  style?: CSSProperties;
};

export const Space: FC<SpaceProps> = ({
  children,
  className,
  direction = 'horizontal',
  align,
  justify,
  wrap,
  block,
  onClick,
  size = 'small',
  style,
}) => {
  const sizeValue = (size: Size) => {
    if (typeof size === 'number') {
      return `${size}Px`;
    } else if (size === 'small') {
      return '8Px';
    } else if (size === 'middle') {
      return '16Px';
    } else if (size === 'large') {
      return '24Px';
    }
  };
  const columnGapValue = useMemo(() => {
    if (Array.isArray(size)) {
      return sizeValue(size[1]);
    } else {
      return sizeValue(size);
    }
  }, [size]);

  const rowGapValue = useMemo(() => {
    if (Array.isArray(size)) {
      return sizeValue(size[1]);
    } else {
      return sizeValue(size);
    }
  }, [size]);

  return (
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}-wrap`]: wrap,
        [`${classPrefix}-block`]: block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${align}`]: !!align,
        [`${classPrefix}-justify-${justify}`]: !!justify,
      })}
      style={{
        ...style,
        columnGap: columnGapValue,
        rowGap: rowGapValue,
      }}
      onClick={onClick}
    >
      {React.Children.map(children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${classPrefix}-item`}>{child}</div>
          )
        );
      })}
    </div>
  );
};

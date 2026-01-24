import classNames from 'classnames';
import React, { useMemo } from 'react';
import './style.scss';
import { SizeType } from '../types';

export type AvatarProps = {
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  size?: SizeType | number;
  src?: string | React.ReactNode;
  srcSet?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  icon,
  shape = 'circle',
  size = 32,
  src,
  srcSet,
  style,
  children,
}) => {
  const clsPrefix = 'triones-antm-avatar';

  const avatarSize = useMemo(() => {
    if (typeof size === 'number') {
      return size;
    }
    return {
      small: 24,
      middle: 32,
      large: 40,
    }[size];
  }, [size]);

  return (
    <div
      className={classNames(clsPrefix, {
        [`${clsPrefix}-${shape !== 'square' ? 'circle' : 'square'}`]: true,
      })}
      style={{
        width: avatarSize,
        height: avatarSize,
        backgroundColor: src ? undefined : '#ccc',
        ...style,
      }}
    >
      {src ? (
        typeof src === 'string' ? (
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          src
        )
      ) : icon ? (
        icon
      ) : (
        children
      )}
    </div>
  );
};

export default Avatar;

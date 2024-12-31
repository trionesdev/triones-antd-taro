import classNames from 'classnames';
import React from 'react';
import './style.scss';

type AvatarProps = {
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  size?: number;
  src?: string | React.ReactNode;
  srcSet?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  icon,
  shape = 'circle',
  size = 40,
  src,
  srcSet,
  style,
  children,
}) => {
  const clsPrefix = 'triones-antm-avatar';
  return (
    <div
      className={classNames(clsPrefix, {
        [`${clsPrefix}-${shape ? 'circle' : 'square'}`]: true,
      })}
      style={{
        width: size,
        height: size,
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

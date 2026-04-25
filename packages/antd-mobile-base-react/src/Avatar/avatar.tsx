import classNames from 'classnames';
import React, {useMemo} from 'react';
import './style.scss';
import {AntSize} from '../types';

export type AvatarProps = {
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  size?: AntSize | number;
  src?: string | React.ReactNode;
  srcSet?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
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
                                                onClick,
                                                className,
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
      medium: 32,
      large: 40,
    }[size]
  }, [size]);

  return (
    <div
      className={classNames(clsPrefix, {
        [`${clsPrefix}-${shape !== 'square' ? 'circle' : 'square'}`]: true,
      }, className)}
      style={{
        width: avatarSize,
        height: avatarSize,
        backgroundColor: src ? undefined : '#ccc',
        ...style,
      }}
      onClick={onClick}
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

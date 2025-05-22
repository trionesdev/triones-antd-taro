import classNames from 'classnames';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import React, { FC } from 'react';
import './spin-loading.scss';

const spinLoadingCls = 'triones-antm-spin-loading';
export type SpinLoadingProps = {
  size?: 'small' | 'middle' | 'large' | number;
  color?: 'default' | 'primary' | 'white' | string;
};

export function createSvgStr(props: { stroke: string }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 32 32">
            <circle r="15" cx="16" cy="16"
                stroke-width="2"
                stroke="${props.stroke}"
                fill="transparent"
                stroke-linecap="round"
                stroke-dasharray="${15 * 3.14159265358979 * 2}"
                stroke-dashoffset="${15 * 3.14159265358979 * 0.5}"></circle>
        </svg>`;
}

export const SpinLoading: FC<SpinLoadingProps> = ({
  size = 'middle',
  color = 'default',
}) => {
  const computedSize = React.useMemo(() => {
    let resSize = null;
    if (size === 'small') {
      resSize = '24Px';
    } else if (size === 'middle') {
      resSize = '32Px';
    } else if (size === 'large') {
      resSize = '48Px';
    } else {
      resSize = size;
    }
    if (typeof resSize === 'number') {
      return `${resSize}Px`;
    } else {
      return resSize;
    }
  }, [size]);

  const computedColor = React.useMemo(() => {
    if (color === 'default') {
      return '#9D9D9D';
    } else if (color === 'primary') {
      return '#1677ff';
    } else if (color === 'white') {
      return '#ffffff';
    } else {
      return color;
    }
  }, [color]);

  const completedStyle: any = React.useMemo(() => {
    const maskImageSvg = createSvgStr({ stroke: computedColor });

    return {
      '--size': computedSize,
      '--color': computedColor,
      '--maskImage': `url(data:image/svg+xml;base64,${Base64.stringify(Utf8.parse(maskImageSvg))})`,
    };
  }, [computedSize, computedColor]);

  return (
    <div className={classNames(spinLoadingCls)} style={completedStyle}>
      <i className={classNames(`${spinLoadingCls}-loading`)} />
    </div>
  );
};

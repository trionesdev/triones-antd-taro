import classNames from 'classnames';
import React, {FC, memo, useMemo} from 'react';
const dotLoadingCls = 'triones-antm-dot-loading';


export type DotLoadingProps = {
  className?: string;
  style?: React.CSSProperties;
  color?: 'default' | 'primary' | 'white' | string;
};

export const DotLoading: FC<DotLoadingProps> = memo(
  ({className, style: styleProp, color: colorProp = 'default'}) => {

    const colors = ['default', 'primary', 'white'];

    const rootStyle = useMemo(
      () => {
        const style = {...styleProp} as React.CSSProperties;
        if (!colors.includes(colorProp)) {
          style.color = colorProp;
        }
        return style as React.CSSProperties;
      },
      [colorProp],
    );

    return <div className={classNames(className, dotLoadingCls, {
      [`${dotLoadingCls}-${colorProp}`]: colors.includes(colorProp),
    })} style={rootStyle}>
      {[0, 1, 2].map((i) => (
        <i
          key={i}
          className={classNames(`${dotLoadingCls}-dot`, `${dotLoadingCls}-dot-${i}`)}
        />
      ))}
    </div>;
  },
);



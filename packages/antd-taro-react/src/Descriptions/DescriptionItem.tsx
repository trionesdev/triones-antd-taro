import React, {CSSProperties, FC} from 'react';
import {DescriptionItemProps, cls} from './types';

export const DescriptionItemLabel: FC<DescriptionItemProps> = ({label, span = 1}) => {
  const labelStyle: CSSProperties = {};
  if (span > 1) {
    labelStyle.gridColumnEnd = `span ${span}`;
  }
  return <div className={`${cls}-item-label`} style={labelStyle}>{label}</div>;
};

export const DescriptionItemContent: FC<DescriptionItemProps> = ({
                                                                   children,
                                                                   span = 1,
                                                                 }) => {
  const contentStyle: CSSProperties = {};
  if (span > 1) {
    contentStyle.gridColumnEnd = `span ${span}`;
  }
  return (
    <div className={`${cls}-item-content`} style={contentStyle}>
      {children}
    </div>
  );
};

export const DescriptionItem: FC<DescriptionItemProps> = ({
                                                            children,
                                                            label,
                                                            span = 1,
                                                            colon = true,
                                                          }) => {
  const itemStyle: CSSProperties = {};
  if (span > 1) {
    itemStyle.gridColumnEnd = `span ${span}`;
  }
  return (
    <div className={`${cls}-item`} style={itemStyle}>
      <DescriptionItemLabel label={<>{label}{colon ? ':' : ''}</>}/>
      <DescriptionItemContent>{children}</DescriptionItemContent>
    </div>
  );
};

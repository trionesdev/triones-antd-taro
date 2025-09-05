import React, {CSSProperties, FC} from 'react';
import {DescriptionItemProps, cls, DescriptionItemLabelProps, DescriptionItemContentProps} from './types';

export const DescriptionItemLabel: FC<DescriptionItemLabelProps> = ({
                                                                      label,
                                                                      labelWidth,
                                                                      style,
                                                                      span = 1,
                                                                      colon = false
                                                                    }) => {
  const labelStyle: CSSProperties = {
    ...style,
  };
  if (labelWidth) {
    labelStyle.width = `${labelWidth}Px`;
  }
  if (span > 1) {
    labelStyle.gridColumnEnd = `span ${span}`;
  }
  return <div className={`${cls}-item-label`} style={labelStyle}>{<>{label}{colon ? ':' : ''}</>}</div>;
};

export const DescriptionItemContent: FC<DescriptionItemContentProps> = ({
                                                                          children,
                                                                          style,
                                                                          span = 1,
                                                                        }) => {
  const contentStyle: CSSProperties = {...style};
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
                                                            labelWidth,
                                                            styles,
                                                            style,
                                                            span = 1,
                                                            colon = true,
                                                          }) => {
  const itemStyle: CSSProperties = {...style};
  if (span > 1) {
    itemStyle.gridColumnEnd = `span ${span}`;
  }
  return (
    <div className={`${cls}-item`} style={itemStyle}>
      <DescriptionItemLabel style={styles?.label} labelWidth={labelWidth} label={label}/>
      <DescriptionItemContent style={styles?.content}>{children}</DescriptionItemContent>
    </div>
  );
};

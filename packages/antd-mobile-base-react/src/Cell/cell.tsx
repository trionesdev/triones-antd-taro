import classNames from 'classnames';
import React, {FC, useContext, useMemo} from 'react';
import './styles.scss';
import {CellProps} from './types';
import {CellGroupContext} from "./context";
import {assign} from "lodash-es";
import {RightOutline} from "@trionesdev/antd-mobile-icons-react";

const cls = 'triones-antm-cell';

export const Cell: FC<CellProps> = ({
                                      className,
                                      style,
                                      placeholder,
                                      children,
                                      label,
                                      extra,
                                      arrow,
                                      labelCol,
                                      labelAlign,
                                      contentAlign,
                                      onClick,
                                      styles
                                    }) => {
  const {
    labelCol: ctxLabelCol,
    labelAlign: ctxLabelAlign,
    contentAlign: ctxContentAlign,
    arrow: ctxArrow,
    extra: ctxExtra, styles: ctxStyles
  } = useContext(CellGroupContext);
  const labelWidth = useMemo(() => {
    return labelCol?.flex || ctxLabelCol?.flex || 'auto';
  }, [labelCol, ctxLabelCol])
  const finalLabelAlign = ctxLabelAlign ?? labelAlign ?? 'start'
  const finalContentAlign = ctxContentAlign ?? contentAlign ?? 'end'
  const finalArrow = ctxArrow ?? arrow ?? false;


  const mergedStyles = assign({}, ctxStyles, styles)
  if (style) {
    mergedStyles.cell = assign(mergedStyles.cell, style)
  }


  return (
    <div className={classNames(cls, className)} style={{...mergedStyles.cell}} onClick={onClick}>
      {label && (
        <div className={classNames(`${cls}-label`, `${cls}-label-${finalLabelAlign}`)} style={{
          width: labelWidth
          , ...mergedStyles?.label
        }}>{label}</div>
      )}
      <div className={classNames(`${cls}-content`, `${cls}-content-${finalContentAlign}`)} style={{
        ...mergedStyles?.content
      }}>
        {children ||
          (placeholder && (
            <div className={classNames(`${cls}-placeholder`)}>
              {placeholder}
            </div>
          ))}
      </div>
      {(extra || ctxExtra) &&
        <div className={classNames(`${cls}-extra`)} style={mergedStyles?.extra}>{extra || ctxExtra}</div>}
      {finalArrow && <div className={classNames(`${cls}-arrow`)}>
        <RightOutline/>
      </div>}
    </div>
  );
};

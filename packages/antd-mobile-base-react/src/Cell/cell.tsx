import classNames from 'classnames';
import React, {FC, useContext, useMemo} from 'react';
import './styles.scss';
import {CellProps} from './types';
import {CellGroupContext} from "./context";
import {assign} from "lodash-es";

const cls = 'triones-antm-cell';

export const Cell: FC<CellProps> = ({
                                      className,
                                      style,
                                      placeholder,
                                      children,
                                      label,
                                      extra,
                                      labelCol,
                                      labelAlign,
                                      wrapperAlign,
                                      onClick,
                                      styles
                                    }) => {
  const {
    labelCol: ctxLabelCol,
    labelAlign: ctxLabelAlign,
    wrapperAlign: ctxWrapperAlign,
    extra: ctxExtra, styles: ctxStyles
  } = useContext(CellGroupContext);
  const labelWidth = useMemo(() => {
    return labelCol?.flex || ctxLabelCol?.flex || 'auto';
  }, [labelCol, ctxLabelCol])

  const labelAlignStyle = useMemo(() => {
    const align = labelAlign || ctxLabelAlign;
    switch (align) {
      case 'left':
        return 'start'
      case 'center':
        return 'center'
      case 'right':
        return 'end'
      default:
        return 'start'
    }
  }, [labelAlign, ctxLabelAlign])

  const wrapperAlignStyle = useMemo(() => {
    const align = wrapperAlign || ctxWrapperAlign;
    switch (align) {
      case 'left':
        return 'start'
      case 'center':
        return 'center'
      case 'right':
        return 'end'
      default:
        return 'start'
    }
  }, [wrapperAlign, ctxWrapperAlign])

  const mergedStyles = assign({}, ctxStyles, styles)
  if (style) {
    mergedStyles.cell = assign(mergedStyles.cell, style)
  }


  return (
    <div className={classNames(cls, className)} style={{...mergedStyles.cell}} onClick={onClick}>
      {label && (
        <div className={classNames(`${cls}-label`)} style={{
          width: labelWidth,
          justifyContent: labelAlignStyle
          , ...mergedStyles?.label
        }}>{label}</div>
      )}
      <div className={classNames(`${cls}-content`)} style={{
        justifyContent: wrapperAlignStyle,
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
    </div>
  );
};

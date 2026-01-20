import classNames from 'classnames';
import React, {FC, useContext, useMemo} from 'react';
import './styles.scss';
import {CellProps} from './types';
import {CellGroupContext} from "./context";

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
                                    }) => {
  const {
    labelCol: ctxLabelCol,
    labelAlign: ctxLabelAlign,
    wrapperAlign: ctxWrapperAlign,
    extra: ctxExtra
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

  return (
    <div className={classNames(cls, className)} style={style} onClick={onClick}>
      {label && (
        <div className={classNames(`${cls}-label`)} style={{
          width: labelWidth,
          justifyContent: labelAlignStyle
        }}>{label}</div>
      )}
      <div className={classNames(`${cls}-content`)} style={{
        justifyContent: wrapperAlignStyle
      }}>
        {children ||
          (placeholder && (
            <div className={classNames(`${cls}-placeholder`)}>
              {placeholder}
            </div>
          ))}
      </div>
      {extra || ctxExtra}
    </div>
  );
};

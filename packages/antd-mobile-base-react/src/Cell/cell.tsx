import {RightOutline} from '../../../antd-mobile-icons-react';
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
                                      arrow = true,
                                      labelCol,
                                      labelAlign = 'left',
                                      onClick,
                                    }) => {
  const {labelCol: ctxLabelCol, labelAlign: ctxLabelAlign} = useContext(CellGroupContext);
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
    }
  }, [labelAlign, ctxLabelAlign])

  return (
    <div className={classNames(cls, className)} style={style} onClick={onClick}>
      <div className={classNames(`${cls}-wrapper`)}>
        {label && (
          <div className={classNames(`${cls}-label`)} style={{
            width: labelWidth,
            justifyContent: labelAlignStyle
          }}>{label}</div>
        )}
        <div className={classNames(`${cls}-content`)}>
          {children ||
            (placeholder && (
              <div className={classNames(`${cls}-placeholder`)}>
                {placeholder}
              </div>
            ))}
        </div>
        {extra && <div className={classNames(`${cls}-extra`)}>{extra}</div>}
      </div>
      {arrow && (
        <div className={classNames(`${cls}-arrow`)}>
          <RightOutline/>
        </div>
      )}
    </div>
  );
};

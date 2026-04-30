import {
  FormItemLayout,
  useFormContext,
} from '@trionesdev/antd-mobile-base-react';
import classNames from 'classnames';
import { isFunction } from 'lodash-es';
import { NamePath } from 'rc-field-form/lib/interface';
import React, { CSSProperties, FC } from 'react';

type FormItemLabelProps = {
  className?: string;
  style?: CSSProperties;
  label?: React.ReactNode;
  layout?: FormItemLayout;
  name?: NamePath;
  required?: boolean;
};
export const FormItemLabel: FC<FormItemLabelProps> = ({
  className,
  style,
  label,
  layout,
  required,
}) => {
  const { requiredMark, colon } = useFormContext();
  const clsPrefix = `triones-antm-form-item-label`;
  return (
    <div
      className={classNames(className, {
        [`${clsPrefix}-required`]: required,
      })}
      style={style}
    >
      <div className={classNames(`${clsPrefix}-wrapper`)}>
        {required && (
          <div className={`${clsPrefix}-required-mark`}>
            {isFunction(requiredMark) ? requiredMark(label, { required }) : '*'}
          </div>
        )}
        {label}
        {layout === 'horizontal' && colon && ':'}
      </div>
    </div>
  );
};

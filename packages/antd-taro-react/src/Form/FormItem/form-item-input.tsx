import classNames from 'classnames';
import _ from 'lodash';
import { Field } from 'rc-field-form';
import { Meta, Rule } from 'rc-field-form/lib/interface';
import React, { FC, useState } from 'react';

type FormItemInputProps = {
  children?: React.ReactElement;
  className?: string;
  name?: string;
  rules?: Rule[];
  errors?: React.ReactNode[];
  errorRender?: (errors?: any[]) => React.ReactNode;
  hiddenError?: boolean;
};

export const FormItemInput: FC<FormItemInputProps> = ({
  children,
  className,
  name,
  rules,
  errorRender,
  hiddenError,
}) => {
  const [meta, setMeta] = useState<Meta | undefined>();

  const clsPrefix = 'triones-antm-form-item';
  return (
    <div className={classNames(className)}>
      <div>
        <Field
          name={name}
          rules={rules}
          trigger={'onChange'}
          onMetaChange={(meta) => {
            setMeta(meta);
          }}
        >
          {children}
        </Field>
      </div>
      {!hiddenError && !_.isEmpty(meta?.errors) && (
        <div className={classNames(`${clsPrefix}-error`)}>
          {errorRender?.(meta?.errors) || meta?.errors.join(',')}
        </div>
      )}
    </div>
  );
};

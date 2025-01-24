import * as React from 'react';
import classNames from 'classnames';
import FieldForm, { List, useWatch } from 'rc-field-form';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import type { FormRef, InternalNamePath, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import useForm, { FormInstance } from './hooks/useForm';
import { FormContext, FormContextProps, FormProvider } from './context';

export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  prefixCls?: string;
  colon?: boolean;
  name?: string;
  layout?: FormLayout;
  form?: FormInstance<Values>;
  requiredMark?: RequiredMark;
  hideRequiredMark?: boolean;
}

const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
  const {
    prefixCls,
    className,
    form,
    colon,
    hideRequiredMark,
    layout = 'horizontal',
    requiredMark,
    onFinishFailed,
    name,
    style,
    ...restFormProps
  } = props;


  const mergedRequiredMark = React.useMemo(() => {
    if (requiredMark !== undefined) {
      return requiredMark;
    }

    if (hideRequiredMark) {
      return false;
    }

    return true;
  }, [hideRequiredMark, requiredMark]);

  const mergedColon = colon ;

  const formClassName = classNames(
    prefixCls,
    `${prefixCls}-${layout}`,
    {
      [`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false,
    },
    className,
  );

  const [wrapForm] = useForm(form);
  const { __INTERNAL__ } = wrapForm;
  __INTERNAL__.name = name;

  const formContextValue = React.useMemo<FormContextProps>(
    () => ({
      name,
      vertical: layout === 'vertical',
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef,
      form: wrapForm,
    }),
    [
      name,
      layout,
      mergedColon,
      mergedRequiredMark,
      wrapForm,
    ],
  );

  const nativeElementRef = React.useRef<FormRef>(null);
  React.useImperativeHandle(ref, () => ({
    ...wrapForm,
    nativeElement: nativeElementRef.current?.nativeElement,
  }));

  const onInternalFinishFailed = (errorInfo: ValidateErrorEntity) => {
    onFinishFailed?.(errorInfo);
    if (errorInfo.errorFields.length) {
      const fieldName = errorInfo.errorFields[0].name;
      // if (scrollToFirstError !== undefined) {
      //   scrollToField(scrollToFirstError, fieldName);
      //   return;
      // }
      //
      // if (contextForm && contextForm.scrollToFirstError !== undefined) {
      //   scrollToField(contextForm.scrollToFirstError, fieldName);
      // }
    }
  };

  return           <FormProvider

  >
    <FormContext.Provider value={formContextValue}>
      <FieldForm
        id={name}
        {...restFormProps}
        name={name}
        onFinishFailed={onInternalFinishFailed}
        form={wrapForm}
        ref={nativeElementRef}
        style={{  ...style }}
        className={formClassName}
      />
    </FormContext.Provider>
  </FormProvider>

}

const Form = React.forwardRef<FormRef, FormProps>(InternalForm) as (<Values = any>(
  props: React.PropsWithChildren<FormProps<Values>> & React.RefAttributes<FormRef<Values>>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>;

if (process.env.NODE_ENV !== 'production') {
  Form.displayName = 'Form';
}

export { List, useForm, useWatch, type FormInstance };

export default Form;

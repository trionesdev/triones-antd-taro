import FieldForm, { useWatch } from 'rc-field-form';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import type { FormRef } from 'rc-field-form/lib/interface';
import React from 'react';
import { FormContext } from './context';
import { FormInstance } from './interface';
import './style.scss';

export type RequiredMark =
  | boolean
  | 'optional'
  | ((
      labelNode: React.ReactNode,
      info: { required: boolean },
    ) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';
export type FormLayoutAlign = 'left' | 'right';

export interface FormProps<Values = any>
  extends Omit<RcFormProps<Values>, 'form' | 'component'> {
  /**
   * @description 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)
   * @default true
   */
  colon?: boolean;
  /**
   * @description 布局
   * @default horizontal
   */
  layout?: FormLayout;
  /**
   * @description 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
   * @default
   */
  form?: FormInstance<Values>;
  /**
   * @description 标签
   * @default horizontal
   */
  labelAlign?: FormLayoutAlign;
  labelWidth?: number;
  requiredMark?: RequiredMark;
  /**
   * @description 是否隐藏错误信息，主要用于自定义异常样式
   * @default false
   */
  hiddenError?: boolean;
}

export const InternalForm: React.ForwardRefRenderFunction<
  FormRef,
  FormProps
> = (
  {
    children,
    layout,
    labelAlign,
    labelWidth,
    requiredMark,
    hiddenError = false,
    ...props
  },
  ref,
) => {
  return (
    <FormContext.Provider
      value={{
        layout: layout || 'horizontal',
        labelAlign: labelAlign || 'left',
        labelWidth: labelWidth,
        requiredMark: requiredMark || true,
        hiddenError: hiddenError,
      }}
    >
      <FieldForm {...props} component={false}>
        {children}
      </FieldForm>
    </FormContext.Provider>
  );
};

export { useWatch };
export default InternalForm;

import FieldForm, {useWatch} from 'rc-field-form';
import type {FormProps as RcFormProps} from 'rc-field-form/lib/Form';
import type {FormRef} from 'rc-field-form/lib/interface';
import React from 'react';
import {FormContext} from './context';
import {FormInstance} from './interface';
import {FormHorizontalAlign, FormItemVerticalAlign, FormLayout, RequiredMark} from "./types";


export interface FormProps<Values = any>
  extends Omit<RcFormProps<Values>, 'form' | 'component'> {
  /**
   * @description 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)
   * @default false
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
   * @description 标签对齐方式
   * @default left
   */
  labelAlign?: FormHorizontalAlign;
  /**
   * @description 标签宽度
   * @default
   */
  labelWidth?: number;
  /**
   * @description 表单控件的对齐方式
   * @default left
   */
  wrapperAlign?: FormHorizontalAlign;
  /**
   * @description 是否显示必填标记
   * @default true
   */
  requiredMark?: RequiredMark;
  /**
   * @description 是否隐藏错误信息，主要用于自定义异常样式
   * @default false
   */
  hiddenError?: boolean;
  /**
   * @description 表单底部内容
   * @default
   */
  extra?: React.ReactNode;
  /**
   * @description 表单垂直层面的对齐方式。只有当 item layout 为 horizontal 时有效
   * @default center
   */
  verticalAlign?: FormItemVerticalAlign;
}

const InternalForm = React.forwardRef<FormRef, FormProps>(function Form(
  {
    children,
    colon = false,
    layout,
    labelAlign,
    labelWidth,
    wrapperAlign,
    requiredMark,
    hiddenError = false,
    extra,
    verticalAlign,
    ...rest
  },
  ref,
) {
  const contextValue = React.useMemo(
    () => ({
      colon,
      layout: layout ?? 'horizontal',
      labelAlign: labelAlign ?? 'left',
      labelWidth,
      wrapperAlign: wrapperAlign ?? 'left',
      requiredMark: requiredMark ?? true,
      hiddenError,
      extra,
      verticalAlign,
    }),
    [
      colon,
      layout,
      labelAlign,
      labelWidth,
      wrapperAlign,
      requiredMark,
      hiddenError,
      extra,
      verticalAlign,
    ],
  );

  return (
    <FormContext.Provider value={contextValue}>
      <FieldForm {...rest} ref={ref} component={false}>
        {children}
      </FieldForm>
    </FormContext.Provider>
  );
});

InternalForm.displayName = 'Form';

export {useWatch};
export default InternalForm;

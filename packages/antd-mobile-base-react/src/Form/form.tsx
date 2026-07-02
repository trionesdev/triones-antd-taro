import FieldForm, {useWatch} from 'rc-field-form';
import type {FormProps as RcFormProps} from 'rc-field-form/lib/Form';
import type {FormRef} from 'rc-field-form/lib/interface';
import React, {ReactNode} from 'react';
import {FormContext} from './context';
import {FormInstance} from './interface';
import {FormHorizontalAlign, FormLayout, RequiredMark} from "./types";
import "./styles.scss"

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
  contentAlign?: FormHorizontalAlign;
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
  divider?: ReactNode;
}

const InternalForm = React.forwardRef<FormRef, FormProps>(function Form(
  {
    children,
    colon = false,
    layout,
    labelAlign,
    labelWidth,
    contentAlign,
    requiredMark,
    hiddenError = false,
    extra,
    divider,
    ...rest
  },
  ref,
) {
  const contextValue = React.useMemo(
    () => ({
      colon,
      layout: layout ?? 'horizontal',
      labelAlign: labelAlign ?? 'start',
      labelWidth,
      contentAlign: contentAlign ?? 'start',
      requiredMark: requiredMark ?? true,
      hiddenError,
      extra,
    }),
    [
      colon,
      layout,
      labelAlign,
      labelWidth,
      contentAlign,
      requiredMark,
      hiddenError,
      extra,
    ],
  );

  const handleRender = () => {
    if (children) {
      if (Array.isArray(children)) {
        const validChildren = React.Children.toArray(children).filter(
          (child): child is React.ReactElement =>
            React.isValidElement(child)
        );
        const childrenArray: React.ReactNode[] = [];

        validChildren.forEach((child, index) => {
          childrenArray.push(
            React.cloneElement(child, {
              key: child.key ?? `form-item-${index}`
            })
          );
          if (divider && index < validChildren.length - 1) {
            if (React.isValidElement(divider)) {
              childrenArray.push(
                React.cloneElement(divider, {
                  key: divider.key ?? `divider-${index}`
                })
              );
            } else {
              childrenArray.push(
                <React.Fragment key={`divider-${index}`}>
                  {divider}
                </React.Fragment>
              );
            }
          }
        });
        return childrenArray;
      } else {
        return children
      }
    }
    return null;
  }

  return (
    <FormContext.Provider value={contextValue}>
      <FieldForm {...rest} ref={ref} component={false}>
        {handleRender()}
      </FieldForm>
    </FormContext.Provider>
  );
});

InternalForm.displayName = 'Form';

export {useWatch};
export default InternalForm;

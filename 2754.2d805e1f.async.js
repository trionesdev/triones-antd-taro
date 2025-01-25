"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2754],{94900:function(e,n){n.Z=`import "./style.scss"
import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

type AntButtonProps = {
  children?: React.ReactNode
  /**
   * block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean
  /**
   * \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean
  /**
   * \u662F\u5426\u7981\u7528
   */
  disabled?: boolean
  /**
   * \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  className?: string,
  style?: React.CSSProperties
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  loading?: boolean
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link',
  onClick?: MouseEventHandler<HTMLButtonElement>
}


export const Button: FC<AntButtonProps> = (
  {
    children,
    block = false,
    type = 'default',
    color,
    danger = false,
    disabled,
    className,
    style,
    icon,
    iconPosition = 'start',
    loading,
    variant,
    onClick,
    ...props
  }
) => {
  const clsPrefix = "triones-antm-button"
  let finalColor = color
  let finalVariant = variant
  if (type) {
    if (!color) {
      if (type === 'primary' || type === 'link') {
        finalColor = 'primary'
      } else if (type === 'default') {
        finalColor = 'default'
      }
    }
    if (!variant) {
      if (type === 'primary') {
        finalVariant = 'solid'
      } else if (type === 'default') {
        finalVariant = 'outlined'
      } else if (type === 'dashed' || type === 'link' || type === 'text') {
        finalVariant = type
      }
    }

  }
  if (danger) {
    finalColor = 'danger'
  }
  return <button
    onClick={onClick}
    className={classNames(clsPrefix,
      {
        [\`\${clsPrefix}-block\`]: block,
        [\`\${clsPrefix}-type-\${type}\`]: type,
        [\`\${clsPrefix}-color-\${finalColor}\`]: finalColor,
        [\`\${clsPrefix}-variant-\${finalVariant}\`]: finalVariant,

      })}
    disabled={disabled}>
    {iconPosition == 'start' && icon}
    {children}
    {iconPosition == 'end' && icon}
  </button>
}
`},960:function(e,n){n.Z=`import {Button} from "./button";

export default Button
`},57426:function(e,n){n.Z=`import React, {FC, useState} from "react"
import {Field} from "rc-field-form";
import classNames from "classnames";
import {Meta, Rule} from "rc-field-form/lib/interface";
import _ from "lodash";

type FormItemInputProps = {
  children?: React.ReactElement;
  className?: string;
  name?: string;
  rules?: Rule[]
  errors?: React.ReactNode[];
  errorRender?: (errors?: any[]) => React.ReactNode;
}

export const FormItemInput: FC<FormItemInputProps> = ({children, className, name, rules, errorRender}) => {
  const [meta, setMeta] = useState<Meta | undefined>()

  const clsPrefix = "triones-antm-form-item"
  return <div className={classNames(className)}>
    <div><Field name={name} rules={rules} trigger={'onChange'} onMetaChange={(meta) => {
      setMeta(meta)
    }}>{children}</Field></div>
    {!_.isEmpty(meta?.errors) &&
      <div className={classNames(\`\${clsPrefix}-error\`)}>{errorRender?.(meta?.errors) || meta?.errors.join(',')}</div>}
  </div>
}
`},73951:function(e,n){n.Z=`import React, {CSSProperties, FC} from "react"
import classNames from "classnames";
import {NamePath} from "rc-field-form/lib/interface";
import {useFormContext} from "../hooks/useFormContext";
import {isFunction} from "lodash";
import {FormItemLayout} from "../form";

type FormItemLabelProps = {
  className?: string
  style?: CSSProperties
  label?: React.ReactNode
  layout?: FormItemLayout;
  name?: NamePath
  required?: boolean
}
export const FormItemLabel: FC<FormItemLabelProps> = ({className, style, label, layout, required}) => {
  const {requiredMark, colon} = useFormContext()
  const clsPrefix = \`triones-antm-form-item-label\`
  return <div className={classNames(className, {required: \`\${clsPrefix}-required\`})} style={style}>
    <label>
      {required && <div className={\`\${clsPrefix}-required-mark\`}>
        {isFunction(requiredMark) ? requiredMark(label, {required}) : '*'}
      </div>}
      {label}
      {layout == 'horizontal' && colon && ':'}
    </label>
  </div>
}
`},26679:function(e,n){n.Z=`import React, {CSSProperties, FC, ReactElement, ReactNode} from "react"
import {FormItemLabel} from "./form-item-label";
import {FormItemInput} from "./form-item-input";
import {NamePath, Rule} from "rc-field-form/lib/interface";
import classNames from "classnames";
import {useFormContext} from "../hooks/useFormContext";
import {FormItemLayout, FormLayoutAlign} from "../form";

export type FormItemProps = {
  className?: string;
  style?: CSSProperties
  children?: ReactElement;
  layout?: FormItemLayout;
  label?: ReactNode;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  name?: NamePath;
  required?: boolean
  rules?: Rule[]
  errorRender?: (errors?: any[]) => React.ReactNode;
}

export const FormItem: FC<FormItemProps> = ({
                                              className,
                                              style,
                                              children,
                                              layout,
                                              label,
                                              labelAlign,
                                              labelWidth,
                                              name,
                                              required,
                                              rules,
                                              errorRender,
                                              ...props
                                            }) => {
  const {layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth} = useFormContext()
  const formItemLayout = layout ? layout : (formLayout === 'inline' ? 'horizontal' : formLayout)
  const formItemAlign = labelAlign ? labelAlign : formLayoutAlign || 'left'
  const formItemLabelWidth = labelWidth ? labelWidth : formLabelWidth
  const clsPrefix = "triones-antm-form-item"
  return <div className={classNames(clsPrefix, \`\${clsPrefix}-\${formItemLayout}\`, className)} style={style}>
    <FormItemLabel className={classNames(\`\${clsPrefix}-label\`, \`\${clsPrefix}-label-\${formItemAlign}\`)}
                   style={{width: formItemLabelWidth}} label={label} required={required}/>
    <FormItemInput className={\`\${clsPrefix}-input\`} {...props} name={name} rules={rules}
                   errorRender={errorRender}>{children}</FormItemInput>
  </div>
}
`},13137:function(e,n){n.Z=`import {FormItemProps, FormItem as InternalFromItem} from "./form-item";

type InternalFormItemType = typeof InternalFromItem
type CompoundedComponent = InternalFormItemType
const FormItem = InternalFromItem as CompoundedComponent

export type {
  FormItemProps
}
export default FormItem
`},25628:function(e,n){n.Z=`import React from "react";
import {FormLayout, FormLayoutAlign, RequiredMark} from "./form";

export interface FormContextProps {
  colon?: boolean;
  layout?: FormLayout;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  requiredMark?: RequiredMark;
  form?: any;
}

export const FormContext = React.createContext<FormContextProps>({
  colon: true,
  layout: "horizontal",
  labelAlign: "left",

})
`},52440:function(e,n){n.Z=`import React from "react";
import FieldForm, {useWatch} from "rc-field-form";
import type {FormProps as RcFormProps} from 'rc-field-form/lib/Form';
import type {FormRef} from 'rc-field-form/lib/interface';
import {FormInstance} from "./interface";
import {FormContext} from "./context";
import "./style.scss"

export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';
export type FormLayoutAlign = 'left' | 'right';

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  /**
   * @description \u914D\u7F6E Form.Item \u7684 colon \u7684\u9ED8\u8BA4\u503C\u3002\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7 (\u53EA\u6709\u5728\u5C5E\u6027 layout \u4E3A horizontal \u65F6\u6709\u6548)
   * @default true
   */
  colon?: boolean;
  /**
   * @description \u5E03\u5C40
   * @default horizontal
   */
  layout?: FormLayout
  /**
   * @description \u7ECF Form.useForm() \u521B\u5EFA\u7684 form \u63A7\u5236\u5B9E\u4F8B\uFF0C\u4E0D\u63D0\u4F9B\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA
   * @default
   */
  form?: FormInstance<Values>
  /**
   * @description \u6807\u7B7E
   * @default horizontal
   */
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  requiredMark?: RequiredMark
}

export const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = ({
                                                                                   children,
                                                                                   layout,
                                                                                   labelAlign,
                                                                                   labelWidth,
                                                                                   requiredMark,
                                                                                   ...props
                                                                                 }, ref) => {
  return <FormContext.Provider value={{
    layout: layout || 'horizontal',
    labelAlign: labelAlign || 'left',
    labelWidth: labelWidth,
    requiredMark: requiredMark || true
  }}>
    <FieldForm {...props} onFinishFailed={(errorInfo) => {
      console.log(errorInfo)
    }}>{children}</FieldForm>
  </FormContext.Provider>
}

export {
  useWatch
}
export default InternalForm;
`},44010:function(e,n){n.Z=`import * as React from 'react';
import {useForm as useRcForm} from 'rc-field-form';
import {FormInstance} from '../interface';

export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
    const [rcForm] = useRcForm();
    const itemsRef = React.useRef<Record<string, React.ReactElement>>({});

    const wrapForm: FormInstance<Values> = React.useMemo(() => {
        return form ?? {...rcForm}
    }, [form, rcForm]);

    return [wrapForm];
}
`},89336:function(e,n){n.Z=`import {FormContext, FormContextProps} from "../context";
import React from "react";

export function useFormContext():FormContextProps {
  const  formContext = React.useContext(FormContext);
 return  formContext
}
`},10927:function(e,n){n.Z=`import InternalForm, {FormProps, useWatch} from "./form";
import FormItem, {FormItemProps} from "./FormItem";
import useForm from "./hooks/useForm";

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm;
  Item: typeof FormItem;
  useWatch: typeof useWatch;
}

const Form = InternalForm as CompoundedComponent;
Form.useForm = useForm;
Form.Item = FormItem;
Form.useWatch = useWatch;

export type {
  FormProps,
  FormItemProps
}
export default Form;
`},83165:function(e,n){n.Z=`import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

export type BaseInputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  value?: any;
  onChange?: (e: any) => void;
};

export interface BaseInputHandle {
  clear?: () => void;
}

export const BaseInput = forwardRef<BaseInputHandle, BaseInputProps>(
  ({ className, placeholder, type, value, onChange }, ref) => {
    const [innerValue, setInnerValue] = useState(value || '');

    useImperativeHandle(ref, () => ({
      clear: () => {
        setInnerValue('');
        onChange?.('');
      },
    }));

    const cls = 'triones-antm-input';
    return (
      <input
        className={classNames([\`\${cls}\`, className])}
        placeholder={placeholder}
        type={type}
        value={innerValue}
        onChange={(e) => {
          setInnerValue(e.target.value);
          onChange?.(e);
        }}
      />
    );
  },
);
`},12823:function(e,n){n.Z=`$inputCls: 'triones-antm-input';
$inputAffixWrapperCls: 'triones-antm-input-affix-wrapper';
$inputGroupWrapperCls: 'triones-antm-input-group-wrapper';
$inputPotCls: 'triones-antm-pot';


.#{$inputCls} {
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 0;
  transition: all .2s;
  padding: 4px 0px;
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 1.5714285714285714;
  border-radius: 6px;

  &::placeholder {
    font-size: 17px;
    color: #cccccc;
  }
}


.#{$inputAffixWrapperCls} {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4px 0px;

  .#{$inputCls} {
    padding: 0;

    &-prifix {
    }

    &-suffix {
      display: inline-flex;
      align-items: center;
      gap: 4px;

      .clear-icon {
        color: rgba(0, 0, 0, 0.25);


        &:hover {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      .triones-antm-icon {
        cursor: pointer;
      }
    }
  }
}

.#{$inputGroupWrapperCls} {
}


.#{$inputPotCls} {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 8px;

  &-input {
    text-align: center;
    padding-inline: 4px;
  }

  .#{$inputCls}-outlined {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.88);
    background: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
`},68217:function(e,n){n.Z=`import { InputPassword } from './input-password';
import { Input as InternalInput } from './input';
import { InputOPT } from './input-opt';

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  OPT: typeof InputOPT;
};

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;

export default Input;
`},10793:function(e,n){n.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useRef } from 'react';
import { BaseInput, BaseInputHandle, BaseInputProps } from './base-input';

export type InputAffixWrapperProps = BaseInputProps & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
};
export const InputAffixWrapper: FC<InputAffixWrapperProps> = ({
  prefix,
  suffix,
  allowClear,
  value,
  onChange,
  ...rest
}) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const baseInputRef = useRef({} as BaseInputHandle);
  const cls = 'triones-antm-input-affix-wrapper';
  const inputCls = 'triones-antm-input';
  return (
    <div className={classNames([cls])}>
      {prefix && (
        <div className={classNames([\`\${inputCls}-prefix\`])}>{prefix}</div>
      )}
      <BaseInput
        ref={baseInputRef}
        {...rest}
        value={value}
        onChange={(value) => {
          setInnerValue(value);
          onChange?.(value);
        }}
      />
      {(suffix || allowClear) && (
        <div className={classNames([\`\${inputCls}-suffix\`])}>
          {allowClear && innerValue && (
            <CloseCircleFill
              className="clear-icon"
              onClick={() => {
                baseInputRef.current.clear?.();
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
`},1039:function(e,n){n.Z=`import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import './index.scss';

const cls = 'triones-antm-pot';
const inputCls = 'triones-antm-input';

export type InputOPTProps = {
  className?: string;
  style?: React.CSSProperties;
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
};

export type InputOPTItemProps = {
  index: number;
  focusIndex?: number;
  value?: string;
  onChange: (value: string) => void;
  onFocus?: (index: number) => void;
};

const InputOPTItem: FC<InputOPTItemProps> = ({
  index,
  focusIndex,
  value,
  onChange,
  onFocus,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focusIndex === index) {
      ref.current?.select();
    } else {
      ref.current?.blur();
    }
  }, [focusIndex]);

  return (
    <input
      ref={ref}
      className={classNames(
        \`\${inputCls}\`,
        \`\${cls}-input\`,
        \`\${inputCls}-outlined\`,
      )}
      size={1}
      type={\`text\`}
      maxLength={1}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onInput={(e) => {
        //onChange(e.target.value);
      }}
      onFocus={() => {
        onFocus?.(index);
      }}
    />
  );
};

export const InputOPT: FC<InputOPTProps> = ({
  className,
  style,
  length = 6,
}) => {
  const [internalValue, setInternalValue] = React.useState<any>(
    Array.from({ length }).map(() => ''),
  );

  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <div className={classNames(cls, className)} style={style}>
      {Array.from({ length }).map((_, index) => {
        return (
          <InputOPTItem
            key={index}
            index={index}
            focusIndex={focusIndex}
            value={internalValue?.[index] || ''}
            onChange={(value) => {
              internalValue[index] = value;
              setInternalValue([...internalValue]);
              if (value) {
                setFocusIndex(index + 1);
              }
            }}
            onFocus={(index) => {
              setFocusIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
`},71558:function(e,n){n.Z=`import {
  EyeInvisibleOutline,
  EyeOutline,
} from '@trionesdev/antd-taro-icons-react';
import React, { FC, useState } from 'react';
import { Input, InputProps } from './input';

type InputPasswordProps = Omit<InputProps, 'type'> & {
  iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
};
export const InputPassword: FC<InputPasswordProps> = ({
  iconRender,
  visibilityToggle = true,
  suffix,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const toggleRender = () => {
    if (iconRender) {
      return iconRender(visible);
    } else {
      return (
        <>
          {visible ? (
            <EyeOutline onClick={() => setVisible(false)} />
          ) : (
            <EyeInvisibleOutline onClick={() => setVisible(true)} />
          )}
        </>
      );
    }
  };

  return (
    <Input
      {...rest}
      type={visible ? 'text' : 'password'}
      suffix={
        <>
          {' '}
          {visibilityToggle && toggleRender()} {suffix}{' '}
        </>
      }
    />
  );
};
`},6870:function(e,n){n.Z=`import { BaseInput } from './base-input';
import { InputAffixWrapper } from './input-affix-wrapper';
import React, { FC } from 'react';
import './index.scss';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: any;
  onChange?: (e: any) => void;
};
export const Input: FC<InputProps> = ({
  className,
  style,
  placeholder,
  type,
  disabled,
  allowClear,
  prefix,
  suffix,
  value,
  onChange,
}) => {
  const handleRender = () => {
    if (prefix || suffix || allowClear) {
      return (
        <InputAffixWrapper
          prefix={prefix}
          suffix={suffix}
          allowClear={allowClear}
          type={type}
          value={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <BaseInput
          className={className}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      );
    }
  };

  return <>{handleRender()}</>;
};
`}}]);

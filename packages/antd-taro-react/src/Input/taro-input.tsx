import {InputAffixWrapper, InputProps} from "@trionesdev/antd-mobile-base-react";
import React, {FC, useEffect} from "react";
import {Input as InternalTaroInput} from '@tarojs/components'
import classNames from "classnames";
import {inputCls} from "./types";

export type TaroInputProps = Omit<InputProps, 'type'> & {
  type?:  'number' | 'digit';
};

export const TaroInput: FC<TaroInputProps> = ({value, onChange,type, size = 'middle', ...rest}) => {
  const [innerValue, setInnerValue] = React.useState(value);

  useEffect(() => {
    onChange?.(innerValue);
  }, [innerValue]);

  const handleRender = () => {
    if (rest.prefix || rest.suffix || rest.allowClear) {
      return (
        <InputAffixWrapper
          {...rest}
          className={rest.className}
          style={rest.style}
          prefix={rest.prefix}
          suffix={rest.suffix}
          allowClear={rest.allowClear}
          value={innerValue}

        >
          <InternalTaroInput style={{flex: 1}} type={type}
                             defaultValue={rest.defaultValue}
                             value={innerValue} placeholder={rest.placeholder}
                             onInput={(e: any) => {
                               setInnerValue(e.target.value);
                             }}/>
        </InputAffixWrapper>
      );
    } else {
      return (
        <InternalTaroInput className={classNames(rest.className, {
          [`${inputCls}-sm`]: size === 'small',
          [`${inputCls}-md`]: size === 'middle',
          [`${inputCls}-lg`]: size === 'large',
        })} style={rest.style}
                           placeholder={rest.placeholder}
                           type={type} defaultValue={rest.defaultValue} value={value} onInput={(e: any) => {
          onChange?.(e.target.value);
        }}/>
      );
    }
  };
  return handleRender();
}


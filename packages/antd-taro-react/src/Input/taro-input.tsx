import {Input as InternalTaroInput, InputProps as InternalTaroInputProps} from '@tarojs/components';
import React, {FC, useEffect} from "react";
import {InputAffixWrapper} from "./input-affix-wrapper";
import {InputProps} from "./types";

export type TaroInputProps = Omit<InputProps, 'type'> & {
  type?: keyof InternalTaroInputProps.Type;
  password?: boolean;
};

export const TaroInput: FC<TaroInputProps> = ({value, onChange, type, size = 'middle', ...rest}) => {
  const [innerValue, setInnerValue] = React.useState<any>(value);

  useEffect(() => {
    if (value !== innerValue) {
      setInnerValue(value);
    }
  }, [value]);

  return <InputAffixWrapper
    {...rest}
    className={rest.className}
    style={rest.style}
    prefix={rest.prefix}
    suffix={rest.suffix}
    allowClear={rest.allowClear}
    value={innerValue}
    onClear={() => {
      setInnerValue(null)
    }}
  >
    <InternalTaroInput style={{flex: 1}} type={type}
                       defaultValue={rest.defaultValue}
                       value={innerValue}
                       placeholder={rest.placeholder}
                       password={rest.password}
                       onInput={(e: any) => {
                         setInnerValue(e.target.value);
                         onChange?.(e.target.value);
                       }}/>
  </InputAffixWrapper>;
}


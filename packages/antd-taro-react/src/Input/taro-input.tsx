import {Input as InternalTaroInput, InputProps as InternalTaroInputProps} from '@tarojs/components';
import React, {FC, useEffect, useMemo} from "react";
import {InputAffixWrapper} from "./input-affix-wrapper";
import {InputProps} from "./types";

export type TaroInputProps = Omit<InputProps, 'type'> & {
  type?: keyof InternalTaroInputProps.Type;
  password?: boolean;
};

export const TaroInput: FC<TaroInputProps> = ({value, onChange, type, size = 'middle', align = 'start', ...rest}) => {
  const [innerValue, setInnerValue] = React.useState<any>(value);

  const textAlign = useMemo(() => {
    switch (align) {
      case 'start':
        return 'left';
      case 'center':
        return 'center';
      case 'end':
        return 'right';
      default:
        return 'left';
    }
  }, [align])

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
    <InternalTaroInput style={{flex: 1, textAlign: textAlign}} type={type}
                       defaultValue={rest.defaultValue}
                       value={innerValue}
                       placeholder={rest.placeholder}
                       password={rest.password}
                       disabled={rest.disabled}
                       onInput={(e: any) => {
                         setInnerValue(e.target.value);
                         onChange?.(e.target.value);
                       }}/>
  </InputAffixWrapper>;
}


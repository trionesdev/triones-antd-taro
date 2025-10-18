import {InputProps, InputAffixWrapper} from "@trionesdev/antd-mobile-base-react";
import React, {FC, useRef} from "react";
import {Input as TaroInput} from '@tarojs/components'

export type InputDigitProps = Omit<InputProps, 'type'>

export const InputDigit: FC<InputDigitProps> = ({value, onChange, ...rest}) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const baseInputRef = useRef();
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
          onClear={() => {

          }}
        >
          <TaroInput type={`digit`} value={innerValue} onInput={(e: any) => {
            setInnerValue(e.target.value);
          }}/>
        </InputAffixWrapper>
      );
    } else {
      return (
        <TaroInput type={`digit`} value={value} onInput={(e: any) => {
        }}/>
      );
    }
  };
  return handleRender();
}

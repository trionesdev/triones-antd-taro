import {InputAffixWrapper, InputProps} from "@trionesdev/antd-mobile-base-react";
import React, {FC} from "react";
import {Input as TaroInput} from '@tarojs/components'

export type InputNumberProps = Omit<InputProps, 'type'>

export const InputNumber: FC<InputNumberProps> = ({value, onChange, ...rest}) => {
  const [innerValue, setInnerValue] = React.useState(value);

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
          <TaroInput style={ {flex: 1}} type={`number`} value={innerValue} placeholder={rest.placeholder} defaultValue={rest.defaultValue}
                     onInput={(e: any) => {
                       setInnerValue(e.target.value);
                     }}/>
        </InputAffixWrapper>
      );
    } else {
      return (
        <TaroInput type={`number`} value={value} onInput={(e: any) => {
        }}/>
      );
    }
  };
  return handleRender();
}


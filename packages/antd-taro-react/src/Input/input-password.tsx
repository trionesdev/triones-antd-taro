import { FC, useState } from "react";
import { TaroInput, TaroInputProps } from "./taro-input";
import { EyeInvisibleOutline, EyeOutline } from "@trionesdev/antd-mobile-icons-react";
import React from "react";

export type InputPasswordProps = Omit<TaroInputProps, 'type'> &{
      iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
}

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
            <EyeOutline onClick={() => setVisible(false)}/>
          ) : (
            <EyeInvisibleOutline onClick={() => setVisible(true)}/>
          )}
        </>
      );
    }
  };

  return (
    <TaroInput
      {...rest}
      password={visible ? false : true}
      suffix={
        <>
          {' '}
          {visibilityToggle && <div style={{paddingLeft: 4, paddingRight: 4}}>{toggleRender()}</div>} {suffix}{' '}
        </>
      }
    />
  );
};
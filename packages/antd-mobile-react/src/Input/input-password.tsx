import {
  EyeInvisibleOutline,
  EyeOutline,
} from '../../../antd-mobile-icons-react';
import React, {FC, useState} from 'react';
import {Input, InputProps} from './input';

export type InputPasswordProps = Omit<InputProps, 'type'> & {
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
            <EyeOutline onClick={() => setVisible(false)}/>
          ) : (
            <EyeInvisibleOutline onClick={() => setVisible(true)}/>
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
          {visibilityToggle && <div style={{paddingLeft: 4, paddingRight: 4}}>{toggleRender()}</div>} {suffix}{' '}
        </>
      }
    />
  );
};

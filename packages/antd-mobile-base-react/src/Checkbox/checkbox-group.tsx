import classNames from 'classnames';
import React, {FC, useState} from 'react';
import {CheckboxGroupContext} from './group-context';
import {CheckboxGroupProps, CheckboxOptionProps, cls} from './types';
import Checkbox from "./index";
import {isEmpty} from "lodash-es";
import Space from "../Space";

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
                                                        value,
                                                        defaultValue,
                                                        onChange,
                                                        children,
                                                        shape,
                                                        options,
                                                        direction,
                                                      }) => {
  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? []);

  return (
    <CheckboxGroupContext.Provider
      value={{
        group: true,
        value: innerValue,
        onValueChange: (v) => {
          setInnerValue(v);
          console.log('value', v);
          onChange?.(v);
        },
      }}
    >
      <div className={classNames(`${cls}-group}`)}>
        {!isEmpty(options) && <Space direction={direction}>
          {options?.map((item: CheckboxOptionProps, index) => <Checkbox key={`${index}`} shape={shape}
                                                                        value={item.value}
          >{item.label}</Checkbox>)}
        </Space>}
        {isEmpty(options) && children}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

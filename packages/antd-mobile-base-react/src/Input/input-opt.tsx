import classNames from 'classnames';
import React, {CSSProperties, FC, useEffect, useMemo, useRef, useState} from 'react';
import './index.scss';
import {Size} from "../types";

const cls = 'triones-antm-pot';
const inputCls = 'triones-antm-input';

export type InputOPTProps = {
  className?: string;
  style?: React.CSSProperties;
  length?: number;
  size?: Size
  value?: string;
  onChange?: (value: string) => void;
};

export type InputOPTItemProps = {
  index: number;
  focusIndex?: number;
  value?: string;
  size?: Size
  onFocus?: (index: number) => void;
};

const InputOPTItem: FC<InputOPTItemProps> = ({
                                               index,
                                               focusIndex,
                                               value,
                                               size,
                                               onFocus,
                                             }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const innerStyle: CSSProperties = {};
  const itemSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 24;
      case 'middle':
        return 32;
      case 'large':
        return 48;
      default:
        return 32;
    }
  }, [size])
  innerStyle.width = itemSize;
  innerStyle.height = itemSize;


  return (
    <div ref={ref}
         className={classNames(
           `${inputCls}`,
           `${cls}-item`,
           `${inputCls}-outlined`,
           // {
           //   [`${cls}-item-focus`]: focusIndex === index,
           // }
         )}
         style={innerStyle}
         onClick={() => {
           onFocus?.(index)
         }}>{value}</div>
  );
};

export const InputOPT: FC<InputOPTProps> = ({
                                              className,
                                              style,
                                              length = 6,
                                              size = 'middle',
                                              value,
                                              onChange
                                            }) => {
  const inputRef = useRef<any>()
  const [inputValue, setInputValue] = useState(value || '')
  const [internalValue, setInternalValue] = React.useState<any>(
    Array.from({length}).map(() => ''),
  );


  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    if (value === undefined) {
      return;
    }
    setInternalValue(Array.from(inputValue))
  }, [inputValue]);

  return (
    <div className={classNames(cls, className)} style={style}>
      <div className={classNames(`${cls}-wrapper`)} onClick={() => {
        inputRef.current?.focus()
      }}>
        {Array.from({length}).map((_, index) => {
          return (
            <InputOPTItem
              key={index}
              index={index}
              focusIndex={focusIndex}
              size={size}
              value={internalValue?.[index] || ''}
              onFocus={(index) => {
                setFocusIndex(index);
              }}
            />
          );
        })}
      </div>
      <input ref={inputRef} className={`${cls}-input`} type={`number`} value={inputValue} onChange={(e) => {
        if (e.target.value.length > length) {
          return
        }
        setInputValue(e.target.value)
        onChange?.(e.target.value)
      }}/>
    </div>
  );
};

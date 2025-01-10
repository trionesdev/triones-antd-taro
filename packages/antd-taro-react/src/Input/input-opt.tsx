import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import '../style/asset.scss';
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
        `${inputCls}`,
        `${cls}-input`,
        `${inputCls}-outlined`,
      )}
      size={1}
      type={`text`}
      maxLength={1}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onInput={(e) => {
        onChange(e.target.value);
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

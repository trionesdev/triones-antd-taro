import { useMemoizedFn } from 'ahooks';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

interface Props {
  type: 'checkbox' | 'radio';
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
}

export const NativeInput: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = useMemoizedFn((e: MouseEvent) => {
    console.log('click')
    // e.stopPropagation();
    // e.stopImmediatePropagation();
    const latestChecked = (e.target as HTMLInputElement).checked;
    if (latestChecked === props.checked) return;
    props.onChange(latestChecked);
  });
  useEffect(() => {
    if (props.disabled) return;
    if (!inputRef.current) return;
    const input = inputRef.current;
    input.addEventListener('click', handleClick);
    return () => {
      input.removeEventListener('click', handleClick);
    };
  }, [props.disabled, props.onChange]);

  return (
    <input
      ref={inputRef}
      type={props.type}
      checked={props.checked}
      onChange={() => {}}
      disabled={props.disabled}
      id={props.id}
    />
  );
};

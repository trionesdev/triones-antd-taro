import React, {FC, useContext, useState} from 'react';
import './index.scss';
import {CheckboxProps} from './types';
import {CheckboxRound} from "./checkbox-round";
import {CheckboxButton} from "./checkbox-button";
import {CheckboxGroupContext} from "./group-context";
import {includes} from "lodash-es";

export const Checkbox: FC<CheckboxProps> = ({
                                              shape = 'round',
                                              ...rest
                                            }) => {

  const ctx = useContext(CheckboxGroupContext)

  const [innerChecked, setInnerChecked] = useState(rest.checked ?? rest.defaultChecked ?? (ctx.group ? includes(ctx.value || [], rest.value) : false) ?? false);

  const handleClick = () => {
    let newValue = !innerChecked
    setInnerChecked(newValue)
    if (ctx.group) {
      let ctxValue = [...(ctx.value || [])]
      if (newValue) {
        ctxValue.push(rest.value)
      } else {
        ctxValue = ctxValue.filter(v => v !== rest.value)
      }
      ctx!.onValueChange?.(ctxValue)
    }
  }

  if (shape === 'round') {
    return <CheckboxRound {...rest} checked={innerChecked} onClick={handleClick}/>
  }
  if (shape === 'button') {
    return <CheckboxButton {...rest} checked={innerChecked} onClick={handleClick}/>
  }
  return null;
};

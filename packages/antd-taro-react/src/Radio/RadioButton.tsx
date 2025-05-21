import {FC, useContext, useEffect, useState} from "react";
import {classPrefix, RadioProps} from "./types";
import React from "react";
import classNames from "classnames";
import {RadioGroupContext} from "./GroupContext";


export const RadioButton: FC<RadioProps> = ({children, defaultChecked, checked, value, onChange}) => {
  const groupContext = useContext(RadioGroupContext);
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? checked ?? groupContext?.defaultValue ?? groupContext.value ?? false)
  const [leftBorderShow, setLeftBorderShow] = useState(false)
  const [rightBorderShow, setRightBorderShow] = useState(false)
  const handleClick = () => {
    setInternalChecked(!internalChecked)
    onChange?.(!internalChecked)
    groupContext?.handleCheck?.(value)
  }

  useEffect(() => {
    if (checked !== undefined) {
      if (checked !== internalChecked) {
        setInternalChecked(checked)
      }
    }
  }, [checked]);

  useEffect(() => {
    if (groupContext?.value !== undefined) {
      setInternalChecked(groupContext.value === value)
    }
  }, [groupContext?.value]);

  return (<div className={classNames(`${classPrefix}-button-wrapper`, {
    [`${classPrefix}-button-wrapper-checked`]: internalChecked
  })}
               onClick={handleClick}>

    <div className={`${classPrefix}-button`}>
      {children}
    </div>
  </div>);
}

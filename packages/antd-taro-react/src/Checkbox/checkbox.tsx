import "./index.scss"
import classNames from "classnames";
import React, {FC, useState} from "react";
import {CheckOutline} from "@trionesdev/antd-taro-icons-react";

type CheckboxProps = {
  children?: React.ReactNode;
  checked?: boolean;
  shape?: 'button' | 'round'
  disabled?: boolean
}
export const Checkbox: FC<CheckboxProps> = ({children, checked, shape = 'round', disabled}) => {
  const [innerChecked, setInnerChecked] = useState(checked)
  const cls = 'triones-antm-checkbox-item';
  return <label className={classNames(cls)}>
    <div className={classNames(`${cls}-container`)} style={{pointerEvents: disabled ? 'none' : 'auto'}}>
      {shape === 'round' && <>
        <div className={classNames(`${cls}-wrap`)}>
          <span className={classNames(`${cls}-base`)}>
            <input className={classNames(`${cls}-input`)} type={"checkbox"}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     setInnerChecked(e.target.checked)
                   }}/>
          </span>

          <div className={classNames(`${cls}-fake`)}>
            <CheckOutline className={classNames(`${cls}-fake-icon`, {
              'checkedIcon': !disabled && innerChecked,
              'uncheckedIcon': !disabled && !innerChecked,
              'disabledCheckedIcon': disabled && innerChecked,
              'disabledUncheckedIcon': disabled && !innerChecked,
            })}/>
          </div>
        </div>
        <div className={classNames(`${cls}-content`, {[`${cls}-content-disabled`]: disabled})}>{children}</div>
      </>}
      {shape === 'button' && <div className={classNames(`${cls}-button`, {
        [`${cls}-button-disabled`]: disabled,
        [`${cls}-button-checked`]: innerChecked
      })} onClick={() => {
        setInnerChecked(!innerChecked)
      }}>
        <div className={classNames(`${cls}-button-content`)}>{children}</div>
        {innerChecked && <div className={classNames(`${cls}-button-icon`)}>
          <CheckOutline className={classNames(`checkedIcon`)}/>
        </div>}
      </div>}
    </div>
  </label>
}

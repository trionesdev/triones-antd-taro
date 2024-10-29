import "./index.scss"
import classNames from "classnames";
import React, {FC, useState} from "react";

type CheckboxProps = {
  children?: React.ReactNode;
  checked?: boolean;
  shape?: 'button' | 'round'
  disabled?: boolean
}
export const Checkbox: FC<CheckboxProps> = ({children, checked, shape, disabled}) => {
  const [innerChecked, setInnerChecked] = useState(checked)
  const cls = 'triones-antm-checkbox-item';
  return <label className={classNames(cls)}>
    <div className={classNames(`${cls}-container`)}>
      <div className={classNames(`${cls}-wrap`)}>
              <span className={classNames(`${cls}-base`)}>
                                <input className={classNames(`${cls}-input`)} type={"checkbox"}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                         console.log('change')
                                         setInnerChecked(e.target.checked)
                                       }}/>
                {/*{innerChecked && <i className={classNames(`${cls}-base-icon`)}/>}*/}
              </span>

        <div className={classNames(`${cls}-fake`)}>
          <i className={classNames(`${cls}-fake-icon`, {
            'checkedIcon': !disabled && innerChecked,
            'uncheckedIcon': !disabled && !innerChecked,
            'disabledCheckedIcon': disabled && innerChecked,
            'disabledUncheckedIcon': disabled && !innerChecked,
          })}/>
        </div>
      </div>
      <div className={classNames(`${cls}-content`)}>{children}</div>

    </div>
  </label>
}

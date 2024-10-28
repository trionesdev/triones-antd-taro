import classNames from "classnames";
import React, {FC, useState} from "react";

type CheckboxProps = {
    children?: React.ReactNode;
    checked?: boolean;
}
export const Checkbox: FC<CheckboxProps> = ({children, checked}) => {
    const [innerChecked, setInnerChecked] = useState(checked)
    const cls = 'triones-antm-checkbox';
    return <label className={classNames(cls)}>
        <div className={classNames(`${cls}-container`)}>
            <div className={classNames(`${cls}-wrap`)}>
                <input className={classNames(`${cls}-input`)} type={"checkbox"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log('change')
                    setInnerChecked(e.target.checked)
                }}/>
                {innerChecked && <i className={classNames(`${cls}-icon-base`)}/>}
                {!innerChecked && <div className={classNames(`${cls}-icon-fake`)}/>}
            </div>
            <div className={classNames(`${cls}-content`)}>{children}</div>

        </div>
    </label>
}
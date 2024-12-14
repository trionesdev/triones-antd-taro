import "./index.scss"
import React, {FC} from "react"
import classNames from "classnames";

export type InputProps = {
  className?: string,
  style?: React.CSSProperties,
  placeholder?: string,
  disabled?: boolean,
}
export const Input: FC<InputProps> = ({className, style, placeholder, disabled}) => {

  const cls = 'triones-antm-input';
  return <div className={classNames(cls, className)} style={style}>
    <div className={`${cls}-line`}>
      <div className={`${cls}-content`}>
        <div className={`${cls}-wrap`}>
          <input className={`${cls}-input`} placeholder={placeholder}/>
        </div>
      </div>
    </div>
  </div>
}

import "../style/asset.scss"
import "./index.scss"
import React, {FC} from "react"
import classNames from "classnames";

export type InputProps = {
  className?: string,
  style?: React.CSSProperties,
  placeholder?: string,
  disabled?: boolean,
  allowClear?: boolean,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  value?:any,
  onChange?:(e:any)=>void
}
export const Input: FC<InputProps> = ({className, style, placeholder, disabled, allowClear, prefix, suffix,value,onChange}) => {
  const [innerValue, setInnerValue] = React.useState(value)
  const cls = 'triones-antm-input';
  return <div className={classNames(cls, className)} style={style}>
    <div className={`${cls}-line`}>

      <div className={`${cls}-content`}>
        <div className={`${cls}-wrap`}>
          <input className={`${cls}-input`} placeholder={placeholder} value={innerValue} onChange={(e)=>{
            setInnerValue(e.target.value)
            onChange?.(e)
          }}/>
        </div>
        {(prefix || allowClear) && <div className={`${cls}-suffix`}>
          {allowClear && innerValue && <i className={`clear-icon`} onClick={()=>{
            setInnerValue('')
          }}/>}
        </div>}
      </div>
    </div>
  </div>
}

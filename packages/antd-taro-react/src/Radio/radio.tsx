import classNames from 'classnames';
import React, {FC, useContext, useEffect, useState} from 'react';
import {RadioGroupContext} from './GroupContext';
import {CheckOutline} from '@trionesdev/antd-taro-icons-react';
import {RadioProps} from "./types";

const classPrefix = `triones-antm-radio`;

export type RadioValue = string | number;

export const Radio: FC<RadioProps> = ({
                                        checked,
                                        defaultChecked,
                                        disabled,
                                        onChange,
                                        value,
                                        block,
                                        shape = 'round',
                                        icon,
                                        children,
                                        onClick
                                      }) => {
  const groupContext = useContext(RadioGroupContext);
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? checked ?? groupContext?.defaultValue ?? groupContext.value  ?? false)

  const handleClick = () => {
    setInternalChecked(!internalChecked)
    onChange?.(!internalChecked)
    groupContext?.handleCheck?.(value)
  }

  useEffect(() => {
    if (checked !== undefined){
      if (checked !== internalChecked){
        setInternalChecked(checked)
      }
    }
  }, [checked]);

  useEffect(() => {
    if (groupContext?.value !== undefined){
      setInternalChecked(groupContext.value === value)
    }
  }, [groupContext?.value]);

  return (<div className={classNames(classPrefix)} onClick={handleClick}>
    <div className={classNames(`${classPrefix}-round`)}>
      <div className={classNames(`${classPrefix}-round-icon`)}>
        {icon?.(internalChecked) || <div className={classNames(`${classPrefix}-round-icon-default`)}>
          {internalChecked ? <div className={`${classPrefix}-round-icon-checked`}>
              <CheckOutline/>
            </div> :
            <div className={`${classPrefix}-round-icon-unchecked`}>

            </div>}
        </div>}
      </div>
      <div className={classNames(`${classPrefix}-round-content`)}>{children}</div>
    </div>
  </div>);
};

import React, {FC, useEffect, useState} from "react"
import classNames from "classnames";
import {isEmpty} from "lodash-es";
import CascaderPopup from "../CascaderPopup";
import "./style.scss"

const cls = 'triones-antm-cascader-picker';

export type CascaderPickerProps = {
  placeholder?: string;
  onChange?: (value: any[]) => void;
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  options?: any[];
  /**
   * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   * @default false
   */
  labelInValue?: boolean;
  fieldNames?: {
    value?: string;
    label?: string;
    children?: string;
  };
  columnsCount?: number;
  value?: any[];
  asyncRequest?: (parentValue?: any) => Promise<any>;
}

export const CascaderPicker: FC<CascaderPickerProps> = ({
                                                          placeholder = '请选择',
                                                          onChange,
                                                          value,
                                                          labelInValue = true,
                                                          ...rest
                                                        }) => {
  const mergedFieldNames = {
    value: 'value',
    label: 'label',
    children: 'children',
    ...rest.fieldNames
  }
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<any[]>(value || [])

  useEffect(() => {
    if ((value || []) !== (internalValue || [])) {
      setInternalValue(value || [])
    }
  }, [value])

  const valueText = () => {
    if (labelInValue) {
      return internalValue?.map(item => item[mergedFieldNames.label]).join('/')
    }
  }

  return <>
    <CascaderPopup {...rest} open={open} value={internalValue} labelInValue={labelInValue}
                   onCancel={() => {
                     setOpen(false)
                   }}
                   onOk={(value) => {
                     setInternalValue(value || [])
                     setOpen(false)
                     onChange?.(value || [])
                   }}/>
    <div className={classNames(cls)} onClick={() => {
      setOpen(true)
    }}>
      {isEmpty(internalValue) ? <div className={`${cls}-placeholder`}>{placeholder}</div> : <div>{valueText()}</div>}
    </div>
  </>
}

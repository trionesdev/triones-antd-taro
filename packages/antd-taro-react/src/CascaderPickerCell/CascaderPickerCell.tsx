import React, {FC, useEffect, useState} from "react"
import CascaderPopup from "../CascaderPicker";
import FormCell, {FormCellProps} from "../FormCell";

export type CascaderPickerCellProps = Omit<FormCellProps, 'value'> & {
  onChange?: (value: any[]) => void;
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

export const CascaderPickerCell: FC<CascaderPickerCellProps> = ({
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
    <FormCell  {...rest} onClick={() => {
      setOpen(true)
    }}>{valueText()}</FormCell>
  </>
}

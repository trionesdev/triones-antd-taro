import React, {FC, useEffect, useState} from "react"
import classNames from "classnames";
import {PickerViewColumnItem} from "./picker-view-column-item";
import {findIndex, isEmpty, size} from "lodash-es";
import {PickerColumnOption} from "./types";

const pickerViewCls = "triones-antm-picker-view";

type PickerViewColumnProps = {
  options?: PickerColumnOption[]
  labelInValue?: boolean
  value?: any
  onChange?: (value: any, index?: number) => void
}

export const PickerViewColumn: FC<PickerViewColumnProps> = React.memo(
  ({
     options,
     labelInValue,
     value,
     onChange,
   }) => {
    const [internalValue, setInternalValue] = useState<any>(value || null);
    const itemHeight = 34;
    const max = 0;
    const min = 0 - (itemHeight * (size(options) - 1));
    const [touching, setTouching] = useState<boolean>(false);
    const [touchPoint, setTouchPoint] = React.useState<any>();
    const [translateY, setTranslateY] = useState(0)

    const handleSelectOption = (selectValue: any) => {
      const valueIndex = findIndex(options, (option) => {
        if (labelInValue) {
          return option.value === selectValue.value;
        }
        return option.value === selectValue
      })
      setTranslateY(0 - (valueIndex * itemHeight));
    }

    useEffect(() => {
      if (value === undefined) {
        return;
      }
      if (value === internalValue) {
        return;
      }
      setInternalValue(value)
      handleSelectOption(value)
    }, [value]);

    useEffect(() => {
      if (!value) {
        const selectValue = labelInValue ? options?.[0] : options?.[0].value
        setInternalValue(selectValue || null);
        onChange?.(selectValue || null);
        handleSelectOption(selectValue);
      } else {
        handleSelectOption(value);
      }
    }, [options]);

    return <div className={classNames(`${pickerViewCls}-column`)}>
      <div className={classNames(`${pickerViewCls}-column-wheel`)}
           style={{transform: `translate3d(0, ${translateY}px, 0)`}}
           onTouchStart={(event) => {
             setTouching(true);
             const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             setTouchPoint(startPoint);
           }}
           onTouchMove={(event) => {
             if (touching) {
               const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
               if (translateY > max || translateY < min) {
                 return;
               }
               setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
               setTouchPoint(movePoint);
             }
           }}
           onTouchEnd={(event) => {
             setTouching(false);
             let selectIndex = 0;
             if (translateY > 0) {
               setTranslateY(0);
               selectIndex = 0;
             } else if (translateY < (0 - itemHeight * (size(options) - 1))) {
               setTranslateY(0 - itemHeight * (size(options) - 1));
               selectIndex = size(options) - 1;
             } else {
               const num = Math.abs(Math.round(translateY / itemHeight));
               setTranslateY(0 - num * itemHeight);
               selectIndex = num;
             }
             const selectValue = labelInValue ? options?.[selectIndex] : options?.[selectIndex].value
             setInternalValue(selectValue);
             onChange?.(selectValue);
           }}
      >
        {!isEmpty(options) && options?.map((option: any, index: number) => {
          return <PickerViewColumnItem option={option} key={`view-column-${index}`}/>
        })}
      </div>
    </div>
  }
)

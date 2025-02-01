import classNames from "classnames";
import React, {FC} from "react";
import {Option} from "./picker";

const pickerCls = "triones-antm-picker";

type PickerViewColumnItemProps = {
  option: Option
}
export const PickerViewColumnItem: FC<PickerViewColumnItemProps> = ({
  
                                                                      option,
                                                                    }) => {
  return <div className={classNames(`${pickerCls}-view-column-item`)}>
    <div className={`${pickerCls}-view-column-item-label`}>
      {option.label}
    </div>
  </div>
}

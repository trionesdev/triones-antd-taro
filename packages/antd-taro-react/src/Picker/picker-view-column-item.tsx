import classNames from "classnames";
import React, {FC} from "react";

const pickerCls = "triones-antm-picker";

type PickerViewColumnItemProps = {
  children: React.ReactNode;
}
export const PickerViewColumnItem: FC<PickerViewColumnItemProps> = ({
                                                                      children,
                                                                    }) => {
  return <div className={classNames(`${pickerCls}-view-column-item`)}>
    {children}
  </div>
}

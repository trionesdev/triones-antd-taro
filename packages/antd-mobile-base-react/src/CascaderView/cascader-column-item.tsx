import React from "react";
import {FC} from "react";
import classNames from "classnames";
import { CheckOutline } from "../../../antd-mobile-icons-react";

const cascaderViewCls = 'triones-antm-cascader-view'

type CascaderColumnItemProps = {
  option: any
  onClick?: (option: any) => void
  selected?: boolean
}
export const CascaderColumnItem: FC<CascaderColumnItemProps> = ({
                                                                  option,
                                                                  onClick,
                                                                  selected
                                                                }) => {
  return <div
    className={classNames(`${cascaderViewCls}-column-item`, {[`${cascaderViewCls}-column-item-selected`]: selected})}
    onClick={() => {
      onClick?.(option)
    }}>
    <div>{option.label}</div>
    {selected && <><CheckOutline/></>}
  </div>
}

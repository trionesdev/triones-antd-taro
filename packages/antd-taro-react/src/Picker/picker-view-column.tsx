import React, {FC} from "react"
import classNames from "classnames";
import {PickerViewColumnItem} from "./picker-view-column-item";

const pickerCls = "triones-antm-picker";

type PickerViewColumnProps = {}
export const PickerViewColumn: FC<PickerViewColumnProps> = ({}) => {

  return <div className={classNames(`${pickerCls}-view-column`)}>
    <div className={classNames(`${pickerCls}-view-column-wheel`)} onWheel={(event) => {
      console.log("onWheel", event);
    }}>
      <PickerViewColumnItem>1</PickerViewColumnItem>
      <PickerViewColumnItem>2</PickerViewColumnItem>
      <PickerViewColumnItem>3</PickerViewColumnItem>
      <PickerViewColumnItem>4</PickerViewColumnItem>
      <PickerViewColumnItem>5</PickerViewColumnItem>
      <PickerViewColumnItem>6</PickerViewColumnItem>
      <PickerViewColumnItem>7</PickerViewColumnItem>
      <PickerViewColumnItem>8</PickerViewColumnItem>
      <PickerViewColumnItem>10</PickerViewColumnItem>
      <PickerViewColumnItem>11</PickerViewColumnItem>
      <PickerViewColumnItem>12</PickerViewColumnItem>
    </div>
  </div>
}

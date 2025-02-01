import React, {FC, useState} from "react"
import classNames from "classnames";
import {PickerViewColumnItem} from "./picker-view-column-item";
import {Option} from "./picker";
import _ from "lodash";

const pickerCls = "triones-antm-picker";

type PickerViewColumnProps = {
  options?: Option[]
}
export const PickerViewColumn: FC<PickerViewColumnProps> = ({
                                                              options
                                                            }) => {
  const itemHeight = 34;
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateY, setTranslateY] = useState(0)

  return <div className={classNames(`${pickerCls}-view-column`)}>
    <div className={classNames(`${pickerCls}-view-column-wheel`)}
         style={{transform: `translate3d(0, ${translateY}px, 0)`}}
         onTouchStart={(event) => {
           const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
           setTouchPoint(startPoint);
         }}
         onTouchMove={(event) => {
           console.log("onTouchMove", event);
           const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}

           setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
           setTouchPoint(movePoint);
         }}
         onTouchEnd={(event) => {
           if (translateY > 0) {
             setTranslateY(0);
           } else if (translateY < (0 - itemHeight * (_.size(options) - 1))) {
             setTranslateY(0 - itemHeight * (_.size(options) - 1));
           } else {
             const num = Math.abs(Math.round(translateY / itemHeight));
             setTranslateY(0 - num * itemHeight);
           }

         }}
    >
      {!_.isEmpty(options) && options?.map((option: any, index: number) => {
        return <PickerViewColumnItem option={option} key={index}/>
      })}
    </div>
  </div>
}

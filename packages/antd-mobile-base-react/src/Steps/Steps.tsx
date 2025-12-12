import React from "react";
import {FC} from "react";
import {StepsProps} from "./types";
import {HorizontalSteps} from "./HorizontalSteps";
import {StepsContext} from "./context";
import "./style.scss"
import {VerticalSteps} from "./VerticalSteps";


export const Steps: FC<StepsProps> = ({
                                        direction = 'horizontal',
                                        current = 0,
                                        stretch = true,
                                        iconSize,
                                        items
                                      }) => {
  return <StepsContext.Provider value={{current: current, iconSize: iconSize, stretch: stretch}}>
    {direction === 'horizontal' && <HorizontalSteps items={items}/>}
    {direction === 'vertical' && <VerticalSteps items={items}/>}
  </StepsContext.Provider>
}

import React, {FC, useContext} from "react"
import {activeColor, clsPrefixStep, clsPrefixSteps, HorizontalStepsProps, StepsItemProps, waitColor} from "./types";
import classNames from "classnames";
import {Point} from "./Point";
import {StepsContext} from "./context";



const HorizontalStepItem: FC<StepsItemProps & { index: number }> = ({icon, title, description, index}) => {
  const {current, iconSize, stretch} = useContext(StepsContext)

  const handleBeforeLineColor = () => {
    if (index <= current) {
      return activeColor
    } else {
      return waitColor
    }
  }
  const handleAfterLineColor = () => {
    if (index < current) {
      return activeColor
    } else {
      return waitColor
    }
  }

  const handlePointColor = () => {
    if (index <= current) {
      return activeColor
    } else {
      return waitColor
    }
  }

  return <div className={classNames(`${clsPrefixStep}`)} style={{flex: stretch ? '1 auto' : undefined}}>
    <div className={classNames(`${clsPrefixStep}-indicator`)}>
      <div className={classNames(`${clsPrefixStep}-indicator-icon-before`)}>
        <div className={classNames(`${clsPrefixStep}-indicator-icon-before-line`)}
             style={{backgroundColor: handleBeforeLineColor()}}/>
      </div>
      <div className={classNames(`${clsPrefixStep}-indicator-icon`)} style={{width: iconSize, height: iconSize}}>
        {icon || <Point color={handlePointColor()}/>}
      </div>
      <div className={classNames(`${clsPrefixStep}-indicator-icon-after`)}>
        <div className={classNames(`${clsPrefixStep}-indicator-icon-after-line`)}
             style={{backgroundColor: handleAfterLineColor()}}/>
      </div>
    </div>
    <div className={classNames(`${clsPrefixStep}-content`)}>
      {title && <div>{title}</div>}
      {description && <div>{description}</div>}
    </div>
  </div>
}

export const HorizontalSteps: FC<HorizontalStepsProps> = ({
                                                            stretch = true,
                                                            items = []
                                                          }) => {
  return <div className={classNames(clsPrefixSteps, `${clsPrefixSteps}-horizontal`)}>
    {items.map((item, index) => <HorizontalStepItem icon={item.icon} title={item.title} description={item.description}
                                                    key={index} index={index}/>)}
  </div>
}

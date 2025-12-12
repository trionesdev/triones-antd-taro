import {FC, useContext} from "react";
import {activeColor, clsPrefixStep, clsPrefixSteps, StepsItemProps, VerticalStepsProps, waitColor} from "./types";
import React from "react";
import classNames from "classnames";
import {StepsContext} from "./context";
import {Point} from "./Point";

const VerticalStepIem: FC<StepsItemProps & { index: number }> = ({index, icon, title, description}) => {
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

  const handleBeforeHeight = () => {
    if (iconSize! > 28) {
      return 0;
    } else {
      return (28 - iconSize!) / 2;
    }
  }

  return <div className={classNames(`${clsPrefixStep}`)}>
    <div className={classNames(`${clsPrefixStep}-indicator`)}>
      <div className={classNames(`${clsPrefixStep}-indicator-icon-before`)} style={{minHeight: handleBeforeHeight()}}>
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

export const VerticalSteps: FC<VerticalStepsProps> = ({current, items = []}) => {
  return <div className={classNames(clsPrefixSteps, `${clsPrefixSteps}-vertical`)}>
    {
      items.map((item, index) => {
        return <VerticalStepIem key={index} index={index} icon={item.icon} title={item.title}
                                description={item.description}/>
      })
    }
  </div>
}

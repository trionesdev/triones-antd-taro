import classNames from 'classnames';
import React, {FC} from 'react';
import Divider from '../Divider';
import {CellGroupProps, cls} from './types';
import {CellGroupContext} from "./context";
import Cell from '.';
import {Cell as InternalCell} from "./cell"

export const CellGroup: FC<CellGroupProps> = ({
                                                className,
                                                style,
                                                children,
                                                title,
                                                extra,
                                                separator,
                                                arrow,
                                                labelCol,
                                                labelAlign
                                              }) => {
  const handleRender = () => {
    if (children) {
      if (Array.isArray(children)) {
        const childrenArray: React.ReactNode[] = [];

        children.filter((child) => React.isValidElement(child) && (child.type == Cell || child.type == InternalCell))
          .forEach((child, index) => {
            childrenArray.push(React.cloneElement(child));
            if (separator && (index < React.Children.count(children) - 1)) {
              childrenArray.push(separator);
            }
          });
        return childrenArray;
      } else {
        return children
      }
    }
    return null;
  };

  return (
    <CellGroupContext.Provider value={{
      arrow,
      labelCol,
      labelAlign
    }}>
      <div className={classNames(`${cls}-group`, className)} style={style}>
        {title && (
          <>
            <div className={classNames(`${cls}-group-title`)}>
              <div>{title}</div>
              <div className={classNames(`${cls}-group-extra`)}>{extra}</div>
            </div>
            <Divider/>
          </>
        )}
        {handleRender()}
      </div>
    </CellGroupContext.Provider>
  );
};

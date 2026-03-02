import classNames from 'classnames';
import React, {FC} from 'react';
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
                                                labelCol,
                                                labelAlign,
                                                wrapperAlign,
                                                divider,
                                                styles
                                              }) => {
  const handleRender = () => {
    if (children) {
      if (Array.isArray(children)) {
        const childrenArray: React.ReactNode[] = [];

        children.filter((child) => React.isValidElement(child) && (child.type == Cell || child.type == InternalCell))
          .forEach((child, index) => {
            childrenArray.push(child);
            if (divider && (index < React.Children.count(children) - 1)) {
              childrenArray.push(divider);
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
      labelCol,
      labelAlign,
      wrapperAlign,
      extra,
      styles: {
        cell: styles?.cell,
        label: styles?.label,
        content: styles?.content,
        extra: styles?.extra
      }
    }}>
      <div className={classNames(`${cls}-group`, className)} style={{...style, ...styles?.container}}>
        {title && (
          <>
            <div className={classNames(`${cls}-group-title`)} style={styles?.title}>
              {title}
            </div>
          </>
        )}
        {handleRender()}
      </div>
    </CellGroupContext.Provider>
  );
};

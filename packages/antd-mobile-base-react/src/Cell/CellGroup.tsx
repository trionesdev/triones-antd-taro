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
                                                contentAlign,
                                                divider,
                                                styles
                                              }) => {
  const handleRender = () => {
    if (children) {
      if (Array.isArray(children)) {
        const validChildren = React.Children.toArray(children).filter(
          (child): child is React.ReactElement =>
            React.isValidElement(child) && (child.type == Cell || child.type == InternalCell)
        );
        const childrenArray: React.ReactNode[] = [];

        validChildren.forEach((child, index) => {
          childrenArray.push(
            React.cloneElement(child, {
              key: child.key ?? `cell-${index}`
            })
          );
          if (divider && index < validChildren.length - 1) {
            if (React.isValidElement(divider)) {
              childrenArray.push(
                React.cloneElement(divider, {
                  key: divider.key ?? `divider-${index}`
                })
              );
            } else {
              childrenArray.push(
                <React.Fragment key={`divider-${index}`}>
                  {divider}
                </React.Fragment>
              );
            }
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
      contentAlign,
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

import classNames from 'classnames';
import React, {FC} from 'react';
import Divider from '../Divider';
import {CellGroupProps, cls} from './types';
import {CellGroupContext} from "./context";

export const CellGroup: FC<CellGroupProps> = ({
                                                className,
                                                style,
                                                children,
                                                title,
                                                extra,
                                                divider,
                                                arrow,
                                                labelCol,
                                                labelAlign
                                              }) => {
  const handleRender = () => {
    if (children) {
      if (Array.isArray(children)) {
        const childrenArray: React.ReactElement[] = [];
        for (let i = 0; i < children.length; i++) {
          childrenArray.push(React.cloneElement(children[i]));
          if (divider && i !== children.length - 1) {
            if (React.isValidElement(divider)) {
              childrenArray.push(divider);
            } else {
              childrenArray.push(<Divider/>);
            }
          }
        }
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

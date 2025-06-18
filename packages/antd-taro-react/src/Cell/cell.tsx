import React from "react";
import {FC} from "react";
import classNames from "classnames";
import {RightOutline} from "@trionesdev/antd-taro-icons-react";
import "./styles.scss";

type CellProps = {
  children?: React.ReactNode;
  extra?: React.ReactNode;
  arrow?: boolean;
  onClick?: () => void;
};

const cls = 'triones-antm-cell';

export const Cell: FC<CellProps> = ({children, extra, arrow=true, onClick}) => {
  return <div className={classNames(cls)} onClick={onClick}>
    <div className={classNames(`${cls}-wrapper`)}>
      <div className={classNames(`${cls}-content`)}>{children}</div>
      {extra && <div className={classNames(`${cls}-extra`)}>{extra}</div>}
    </div>
    {arrow && <div className={classNames(`${cls}-arrow`)}>
      <RightOutline/>
    </div>}
  </div>
}

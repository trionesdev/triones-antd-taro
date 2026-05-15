import React from "react";
import {AntSize, Col} from "../types";
import {align} from "./types";

type CellGroupContextType = {

  labelCol?: Col,
  labelAlign?: align,
  contentAlign?: align,
  arrow?: boolean,
  extra?: React.ReactNode,
  size?:AntSize
  styles?: {
    cell?: React.CSSProperties,
    label?: React.CSSProperties,
    content?: React.CSSProperties,
    extra?: React.CSSProperties,
  },
};
export const CellGroupContext = React.createContext<CellGroupContextType>({});

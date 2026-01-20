import React from "react";
import {Col} from "../types";
import {labelAlign} from "./types";

type CellGroupContextType = {

  labelCol?: Col,
  labelAlign?: labelAlign,
  extra?: React.ReactNode,
};
export const CellGroupContext = React.createContext<CellGroupContextType>({});

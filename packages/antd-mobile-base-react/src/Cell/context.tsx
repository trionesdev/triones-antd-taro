import React from "react";
import {Col} from "../types";
import {align} from "./types";

type CellGroupContextType = {

  labelCol?: Col,
  labelAlign?: align,
  wrapperAlign?: align,
  extra?: React.ReactNode,
};
export const CellGroupContext = React.createContext<CellGroupContextType>({});

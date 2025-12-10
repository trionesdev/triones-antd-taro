import React from "react";
import {FC} from "react";

type ProcessProps = {
  type?: 'circle' | 'line';
  percent: number;
}

export const Process: FC<ProcessProps> = ({type = 'line',percent}) => {
  return <></>
}

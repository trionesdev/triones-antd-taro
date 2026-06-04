import React from "react";

export type AntSize = 'small' | 'medium' | 'large' | undefined;

export type BoundingClientRectType = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export type Col = {
  flex?: number | string;
  span?: number;
}

export type LabeledValue = {
  value: string | number;
  label: React.ReactNode;
}

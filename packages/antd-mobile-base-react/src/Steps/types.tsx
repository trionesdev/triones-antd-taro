import React, {FC} from "react";

export type StepsItemProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export type BaseStepsProps = {
  current?: number;
  items?: StepsItemProps[];
}

export type HorizontalStepsProps = BaseStepsProps & {
  stretch?: boolean;
}

export type VerticalStepsProps = BaseStepsProps & {

}

export type StepsProps = {
  direction?: 'horizontal' | 'vertical';
  stretch?: boolean;
  iconSize?: number;
} & BaseStepsProps

export const clsPrefixSteps = 'triones-antm-steps';
export const clsPrefixStep = 'triones-antm-step';

export const activeColor = "#1777FF"
export const waitColor = "#EEEEEE"

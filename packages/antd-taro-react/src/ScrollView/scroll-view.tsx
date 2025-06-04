import {ScrollView as TaroScrollView} from "@tarojs/components";
import {checkTaroEnv} from '../utils/taro-utils';
import React, {FC, ReactNode} from "react";

type ScrollViewProps = {
  children: ReactNode;
  onScroll: (e: any) => void
}

export const ScrollView: FC<ScrollViewProps> = ({
                                                  children,
                                                  onScroll,
                                                }) => {
  const isTaroEnv = checkTaroEnv();
  if (isTaroEnv) {
    return <TaroScrollView onScroll={(e) => {

    }}></TaroScrollView>;
  } else {
    return <div onScroll={(e) => {
    }}></div>;
  }
}


import {Image as TaroImage,ImageProps as TaroImageProps} from "@tarojs/components"
import React from "react";
import {FC} from "react";
export type ImageProps = TaroImageProps
export const Image:FC<ImageProps> = ({...rest}) => {
  return <TaroImage {...rest}/>
}

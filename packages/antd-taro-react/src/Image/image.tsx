import {Image as TaroImage, ImageProps as TaroImageProps} from "@tarojs/components"
import React from "react";
import {FC} from "react";

export type ImageProps = Omit<TaroImageProps, 'style'> & {
  style?: React.CSSProperties
  width?: string | number
  height?: string | number
}
export const Image: FC<ImageProps> = ({...rest}) => {
  rest.style = {
    ...rest.style,
    width: rest.width,
    height: rest.height
  }
  return <TaroImage {...rest}/>
}

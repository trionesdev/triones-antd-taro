import {Image as TaroImage, ImageProps as TaroImageProps} from "@tarojs/components"
import React from "react";
import {FC} from "react";

export type ImageProps = Omit<TaroImageProps, 'style'> & {
  style?: React.CSSProperties
  width?: string | number
  height?: string | number
}
export const Image: FC<ImageProps> = ({...rest}) => {
  const style = {
    ...rest.style
  }
  if (rest.width) {
    style.width = rest.width;
  }
  if (rest.height) {
    style.height = rest.height;
  }
  return <TaroImage {...rest} style={style}/>
}

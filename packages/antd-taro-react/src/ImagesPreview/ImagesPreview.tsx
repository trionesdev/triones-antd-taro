import React, {FC, useEffect} from "react";
import Mask from "../Mask";
import classNames from "classnames";
import "./style.scss"
import Swiper from "../Swiper";
import Image from "../Image";

const cls = 'triones-antm-image-preview';

export type ImagePreviewProps = {
  className?: string;
  open?: boolean;
  items?: (string | undefined)[];
  width?: number;
  height?: number;
  activeIndex?: number;
  afterOpenChange?: (open: boolean) => void;
}
export const ImagesPreview: FC<ImagePreviewProps> = ({className, open, items, activeIndex, afterOpenChange}) => {
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const [innerActiveIndex, setInnerActiveIndex] = React.useState(activeIndex || 0)

  useEffect(() => {
    if (open === undefined) {
      return;
    }
    if (open === innerOpen) {
      return;
    }
    setInnerOpen(open);
  }, [open]);

  useEffect(() => {
    afterOpenChange?.(innerOpen);
  }, [innerOpen]);

  useEffect(() => {
    if (activeIndex === undefined) {
      return;
    }
    if (activeIndex === innerActiveIndex) {
      return;
    }
    setInnerActiveIndex(activeIndex);
  }, [activeIndex]);

  return <Mask open={innerOpen}>
    <div className={classNames(cls, className)} onClick={() => {
      setInnerOpen(false)
    }}>
      <div className={classNames(`${cls}-head`)}>
        {`${innerActiveIndex + 1}/${items?.length}`}
      </div>
      <div className={classNames(`${cls}-content`)}>
        <Swiper style={{width: '100%', height: '100%'}} >
          {items?.map((item,index) => {
            return <Swiper.Item key={ index} style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}  as React.CSSProperties}>
              <div onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}>
                <Image src={item??""} mode={'aspectFill'}/>
              </div>
            </Swiper.Item>
          })}
        </Swiper>
      </div>
    </div>
  </Mask>;
}

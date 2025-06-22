import React, {useEffect} from "react";
import {FC} from "react";
import Mask from "../Mask";
import classNames from "classnames";
import Swiper from "../Swiper";
import Image from "../Image";
import "./style.scss"

const cls = 'triones-antm-image-preview';

type ImagePreviewProps = {
  className?: string;
  open?: boolean;
  items?: string[];
  width?: number;
  height?: number;
  activeIndex?: number;
  afterOpenChange?: (open: boolean) => void;
}
export const ImagePreview: FC<ImagePreviewProps> = ({className, open, items, activeIndex, afterOpenChange}) => {
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

  return <Mask open={innerOpen}>
    <div className={classNames(cls, className)} onClick={() => {
      setInnerOpen(false)
    }}>
      <div className={classNames(`${cls}-head`)}>
        {`${innerActiveIndex+1}/${items?.length}`}
      </div>
      <div className={classNames(`${cls}-content`)}>
        <Swiper style={{width: '100%'}}
                activeIndex={innerActiveIndex}
                onChange={setInnerActiveIndex}
                items={items?.map((item) => {
                  return {
                    content: <div onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}>
                      <Image src={item} alt=""/>
                    </div>
                  }
                })}/>
      </div>
      {/*<Swiper items={[*/}
      {/*  {content: <div style={{height:'100%',width:'100%',background:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>1</div>},*/}
      {/*  {content: <div style={{height:'100%',width:'100%',background:'green',display:'flex',justifyContent:'center',alignItems:'center'}}>2</div>},*/}
      {/*  {content: <div style={{height:'100%',width:'100%',background:'yellow',display:'flex',justifyContent:'center',alignItems:'center'}}>3</div>},*/}
      {/*  {content: <div style={{height:'100%',width:'100%',background:'blue',display:'flex',justifyContent:'center',alignItems:'center'}}>4</div>},*/}
      {/*]}/>*/}
    </div>
  </Mask>;
}

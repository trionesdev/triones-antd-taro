import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";
import {AddOutline, CloseOutline} from "@trionesdev/antd-mobile-icons-react";
import "./style.scss"
import {ImagesPreview} from "../index"
import {isEqual} from "lodash-es";
import {RandomUtils} from '../utils/random-utils';
import Taro from "@tarojs/taro";

const cls = 'triones-antm-images-wall'

type ImagesWallItemType = {
  uid?: string;
  url?: string;
  status?: 'uploading' | 'done' | 'error';
}

export type ImagesWallItemProps = {
  preview?: boolean;
  disabled?: boolean;
  images: ImagesWallItemType[];
  image: ImagesWallItemType;
  onChange?: (image: ImagesWallItemType) => void;
  onPreview?: (image: ImagesWallItemType) => void;
  onClose?: () => void
}

const ImagesWallItem: FC<ImagesWallItemProps> = ({
                                                   preview,
                                                   disabled,
                                                   images,
                                                   image,
                                                   onChange,
                                                   onPreview,
                                                   onClose
                                                 }) => {
  return <div className={classNames(`${cls}-item`,)}>
    {!disabled && <div className={`${cls}-item-close`} onClick={onClose}>
      <CloseOutline/>
    </div>}
    <div className={classNames(`${cls}-item-inner`,)} onClick={() => {
      if (preview) {
        onPreview?.(image)
      }
    }}>
      {image.url && <img className={`${cls}-item-image`} src={image.url} alt=""/>}
    </div>
  </div>
}

export type ImagesWallProps = {
  className?: string;
  disabled?: boolean;
  value?: ImagesWallItemType[];
  onChange?: (value: ImagesWallItemType[]) => void;
  columns?: number;
  preview?: boolean;
  onRequest?: (file: File[]) => Promise<string>
  customUploadAction?: () => void;
  customPreviewAction?: (urls: (string | undefined)[], current?: string) => void;
}


export const ImagesWall: FC<ImagesWallProps> = ({
                                                  className,
                                                  disabled,
                                                  value,
                                                  onChange,
                                                  columns = 5,
                                                  preview = true,
                                                  onRequest,
                                                  customUploadAction,
                                                  customPreviewAction
                                                }) => {


  const [imagePreviewOpen, setImagePreviewOpen] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [images, setImages] = useState<ImagesWallItemType[]>(value || [])


  useEffect(() => {
    if (value === undefined) {
      return
    }
    const newImages = value.map((item) => {
      item.uid ??= RandomUtils.random()
      item.status ??= 'done'
      return item;
    })
    if (isEqual(newImages, images)) {
      return;
    }
    setImages(newImages || [])
  }, [value]);

  return <>
    <ImagesPreview open={imagePreviewOpen} afterOpenChange={setImagePreviewOpen}
                   items={images.map(item => item.url) || []} activeIndex={previewIndex}/>
    <div className={classNames(cls, className)} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
      {images.map((image, index) => <ImagesWallItem key={index}
                                                    disabled={disabled} images={images} image={image}
                                                    preview={preview}
                                                    onPreview={(image) => {
                                                      if (customPreviewAction) {
                                                        customPreviewAction(images.map((item) => item.url) || [], image.url)
                                                      } else {
                                                        setPreviewIndex(index)
                                                        setImagePreviewOpen(true)
                                                      }
                                                    }}
                                                    onClose={() => {
                                                      images.splice(index, 1)
                                                      const newImages = [...images]
                                                      setImages(newImages)
                                                      onChange?.(newImages)
                                                    }}/>)}
      {!disabled && <div className={classNames(`${cls}-item`, `${cls}-upload`)} onClick={() => {
        if (customUploadAction) {
          customUploadAction()
        } else {
          Taro.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['camera', 'album'],
            success: (res) => {
              const files = res.tempFiles
              // onRequest( files)
            }
          })
        }
      }}>
        <AddOutline/>
      </div>}
    </div>
  </>;
}

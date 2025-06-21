import React, {FC, useState} from "react";
import classNames from "classnames";
import {AddOutline} from "@trionesdev/antd-taro-icons-react";
import "./style.scss"
import ActionSheet from "../ActionSheet";
import {useTaro} from "../hooks/useTaro";
import Taro from "@tarojs/taro";

const cls = 'triones-antm-images-wall'

type ImagesWallItemType = {
  src?: string;
  status?: 'uploading' | 'success' | 'error';
}

type ImagesWallItemProps = {
  image: ImagesWallItemType;
}

const ImagesWallItem: FC<ImagesWallItemProps> = ({image}) => {
  return <div className={classNames(`${cls}-item`,)}>
    {image.src && <img src={image.src} alt=""/>}
  </div>
}

type ImagesWallProps = {
  className?: string;
  disabled?: boolean;
  value?: ImagesWallItemType[];
  onChange?: (value: ImagesWallItemType[]) => void;
  onRequest?: () => Promise<string>
}


export const ImagesWall: FC<ImagesWallProps> = ({className, disabled, value, onChange}) => {
  const {isTaroEnv, isTaroWeApp} = useTaro()
  const [sheetOpen, setSheetOpen] = useState(false)
  const [images, setImages] = useState<ImagesWallItemType[]>(value || [])

  const handleSelectPhoto = () => {
    Taro.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        console.log(res)
      }
    })
  }

  const handleSelectCamera = () => {
    const cameraCtx = Taro.createCameraContext()
    cameraCtx.takePhoto({
      quality: 'high',
      success: res => {
        console.log('照片临时路径:', res.tempImagePath)
        // 可在此处调用上传接口
      }
    })
  }

  return <>
    <ActionSheet className={`${cls}-action-sheet`} open={sheetOpen}
                 afterOpenChange={setSheetOpen}
                 closeAfterClickAction={Boolean(isTaroWeApp)}
                 actions={
                   [
                     {
                       key: 'photo', children: <>
                         <div>从相册选择</div>
                         {!isTaroEnv &&
                           <input className={`${cls}-item-input`} type={`file`} accept={`image/*`} multiple={true}
                                  onChange={(e) => {
                                    console.log(e.target.files)
                                  }}/>}
                       </>, onClick: () => {
                         if (isTaroEnv) {
                           handleSelectPhoto()
                         }
                       }
                     },
                     {
                       key: 'camera', children: <>
                         <div>拍摄照片</div>
                         {!isTaroEnv &&
                           <input className={`${cls}-item-input`} type={`file`} accept={`image/*`} capture={`camera`}
                                  onChange={(e) => {
                                    console.log(e.target.files)
                                  }}/>}
                       </>, onClick: () => {
                         if (isTaroEnv) {
                           handleSelectCamera()
                         }
                       }
                     }
                   ]}/>
    <div className={classNames(cls, className)}>
      {images.map((image, index) => <ImagesWallItem key={index} image={image}/>)}
      {!disabled && <div className={classNames(`${cls}-item`, `${cls}-upload`)} onClick={() => {
        setSheetOpen(true)
      }}>
        <AddOutline/>
      </div>}
    </div>
  </>;
}

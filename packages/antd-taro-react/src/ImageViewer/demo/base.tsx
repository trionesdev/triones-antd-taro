/**
 * compact: true
 */
import React, { useState } from 'react';
import Button from '../../Button';
import { DemoBlock } from '../../DemoBlock';
import ImageViewer from '../index';
import './base.scss';

export const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
];

export const demoImage = demoImages[0];

// 单张图片预览
const Single = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示图片
      </Button>
      <ImageViewer
        classNames={{
          mask: 'customize-mask',
          body: 'customize-body',
        }}
        image={demoImage}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

// 多张图片预览
const Multi = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

const ViewWithFooter = () => {
  const [visible, setVisible] = useState(false);

  const renderFooter = (image: string, index: number) => {
    return (
      <div className="image-viewer-demo-footer">
        <div
          className="image-viewer-demo-footerButton"
          onClick={() => {
            console.log('Loading...');
          }}
        >
          查看原图{index + 1}
        </div>
      </div>
    );
  };

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false);
        }}
        renderFooter={renderFooter}
      />
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="单张图片预览">
        <Single />
      </DemoBlock>

      <DemoBlock title="多张图片预览">
        <Multi />
      </DemoBlock>

      <DemoBlock title="指令式调用">
        <Button
          onClick={() => {
            ImageViewer.Multi.show({ images: demoImages });
          }}
        >
          显示图片
        </Button>
      </DemoBlock>

      <DemoBlock title="手动控制关闭">
        <Button
          onClick={() => {
            const handler = ImageViewer.show({
              image: demoImage,
            });
            setTimeout(() => {
              handler.close();
            }, 3000);
          }}
        >
          显示图片并在3秒后关闭
        </Button>
      </DemoBlock>

      <DemoBlock title="自定义底部额外内容">
        <ViewWithFooter />
      </DemoBlock>
    </>
  );
};

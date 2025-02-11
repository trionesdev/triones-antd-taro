"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[5479],{3176:function(e,n){n.Z=`import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Mask from '../Mark';
import SafeArea from '../SafeArea';
import { GetContainer, renderToContainer } from '../utils/render-to-container';
import { mergeProps } from '../utils/with-default-props';
import { Slide } from './slide';
import { Slides, SlidesRef } from './slides';

const classPrefix = \`triones-antm-image-viewer\`;

export type ImageViewerProps = {
  image?: string;
  maxZoom?: number | 'auto';
  getContainer?: GetContainer;
  visible?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
  renderFooter?: (image: string) => ReactNode;
  classNames?: {
    mask?: string;
    body?: string;
  };
};

const defaultProps = {
  maxZoom: 3,
  getContainer: null,
  visible: false,
};

export const ImageViewer: FC<ImageViewerProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity="thick"
      afterClose={props.afterClose}
      destroyOnClose
      className={props?.classNames?.mask}
    >
      <div
        className={classNames(
          \`\${classPrefix}-content\`,
          props?.classNames?.body,
        )}
      >
        {props.image && (
          <Slide
            image={props.image}
            onTap={props.onClose}
            maxZoom={props.maxZoom}
          />
        )}
      </div>
      {props.image && (
        <div className={\`\${classPrefix}-footer\`}>
          {props.renderFooter?.(props.image)}
          <SafeArea position="bottom" />
        </div>
      )}
    </Mask>
  );
  return renderToContainer(props.getContainer, node);
};

export type MultiImageViewerRef = SlidesRef;

export type MultiImageViewerProps = Omit<
  ImageViewerProps,
  'image' | 'renderFooter'
> & {
  images?: string[];
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  renderFooter?: (image: string, index: number) => ReactNode;
};

const multiDefaultProps = {
  ...defaultProps,
  defaultIndex: 0,
};

export const MultiImageViewer = forwardRef<
  MultiImageViewerRef,
  MultiImageViewerProps
>((p, ref) => {
  const props = mergeProps(multiDefaultProps, p);
  const [index, setIndex] = useState(props.defaultIndex);

  const slidesRef = useRef<SlidesRef>(null);
  useImperativeHandle(ref, () => ({
    swipeTo: (index: number, immediate?: boolean) => {
      setIndex(index);
      slidesRef.current?.swipeTo(index, immediate);
    },
  }));

  const onSlideChange = useCallback(
    (newIndex: number) => {
      if (newIndex === index) return;
      setIndex(newIndex);
      props.onIndexChange?.(newIndex);
    },
    [props.onIndexChange, index],
  );

  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity="thick"
      afterClose={props.afterClose}
      destroyOnClose
      className={props?.classNames?.mask}
    >
      <div
        className={classNames(
          \`\${classPrefix}-content\`,
          props?.classNames?.body,
        )}
      >
        {props.images && (
          <Slides
            ref={slidesRef}
            defaultIndex={index}
            onIndexChange={onSlideChange}
            images={props.images}
            onTap={props.onClose}
            maxZoom={props.maxZoom}
          />
        )}
      </div>
      {props.images && (
        <div className={\`\${classPrefix}-footer\`}>
          {props.renderFooter?.(props.images[index], index)}
          <SafeArea position="bottom" />
        </div>
      )}
    </Mask>
  );
  return renderToContainer(props.getContainer, node);
});
`},93196:function(e,n){n.Z=`import { attachPropertiesToComponent } from '../utils/attach-properties-to-component';
import { ImageViewer, MultiImageViewer } from './image-viewer';
import {
  clearImageViewer,
  showImageViewer,
  showMultiImageViewer,
} from './methods';
import './style.scss';

export type {
  ImageViewerProps,
  MultiImageViewerProps,
  MultiImageViewerRef,
} from './image-viewer';
export type { ImageViewerShowHandler } from './methods';

const Multi = attachPropertiesToComponent(MultiImageViewer, {
  show: showMultiImageViewer,
});

export default attachPropertiesToComponent(ImageViewer, {
  Multi,
  show: showImageViewer,
  clear: clearImageViewer,
});
`},36516:function(e,n){n.Z=`import React from 'react';
import { renderImperatively } from '../utils/render-imperatively';
import {
  ImageViewer,
  ImageViewerProps,
  MultiImageViewer,
  MultiImageViewerProps,
} from './image-viewer';

export type ImageViewerShowHandler = {
  close: () => void;
};

const handlerSet = new Set<ImageViewerShowHandler>();

export function clearImageViewer() {
  handlerSet.forEach((handler) => {
    handler.close();
  });
  handlerSet.clear();
}

export function showImageViewer(props: Omit<ImageViewerProps, 'visible'>) {
  clearImageViewer();
  const handler: ImageViewerShowHandler = renderImperatively(
    <ImageViewer
      {...props}
      afterClose={() => {
        handlerSet.delete(handler);
        props.afterClose?.();
      }}
    />,
  );
  handlerSet.add(handler);
  return handler;
}

export function showMultiImageViewer(
  props: Omit<MultiImageViewerProps, 'visible'>,
) {
  clearImageViewer();
  const handler: ImageViewerShowHandler = renderImperatively(
    <MultiImageViewer
      {...props}
      afterClose={() => {
        handlerSet.delete(handler);
        props.afterClose?.();
      }}
    />,
  );
  handlerSet.add(handler);
  return handler;
}
`},97256:function(e,n){n.Z=`import { animated, useSpring } from '@react-spring/web';
import { useSize } from 'ahooks';
import type { FC, MutableRefObject } from 'react';
import React, { useRef } from 'react';
import { bound } from '../utils/bound';
import type { Matrix } from '../utils/matrix';
import * as mat from '../utils/matrix';
import { rubberbandIfOutOfBounds } from '../utils/rubberband';
import { useDragAndPinch } from '../utils/use-drag-and-pinch';

const classPrefix = \`triones-antm-image-viewer\`;

type Props = {
  image: string;
  maxZoom: number | 'auto';
  onTap?: () => void;
  onZoomChange?: (zoom: number) => void;
  dragLockRef?: MutableRefObject<boolean>;
};

export const Slide: FC<Props> = (props) => {
  const { dragLockRef, maxZoom } = props;
  const initialMartix = useRef<boolean[]>([]);
  const controlRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [{ matrix }, api] = useSpring(() => ({
    matrix: mat.create(),
    config: { tension: 200 },
  }));

  const controlSize = useSize(controlRef);
  const imgSize = useSize(imgRef);

  const pinchLockRef = useRef(false);

  /**
   * Calculate the min and max value of x and y
   */
  const getMinAndMax = (
    nextMatrix: Matrix,
  ): {
    x: {
      position: number;
      minX: number;
      maxX: number;
    };
    y: {
      position: number;
      minY: number;
      maxY: number;
    };
  } => {
    if (!controlSize || !imgSize)
      return {
        x: {
          position: 0,
          minX: 0,
          maxX: 0,
        },
        y: {
          position: 0,
          minY: 0,
          maxY: 0,
        },
      };
    const controlLeft = -controlSize.width / 2;
    const controlTop = -controlSize.height / 2;

    const imgLeft = -imgSize.width / 2;
    const imgTop = -imgSize.height / 2;

    const zoom = mat.getScaleX(nextMatrix);
    const scaledImgWidth = zoom * imgSize.width;
    const scaledImgHeight = zoom * imgSize.height;

    const minX = controlLeft - (scaledImgWidth - controlSize.width);
    const maxX = controlLeft;

    const minY = controlTop - (scaledImgHeight - controlSize.height);
    const maxY = controlTop;

    const [x, y] = mat.apply(nextMatrix, [imgLeft, imgTop]);

    return {
      x: {
        position: x,
        minX,
        maxX,
      },
      y: {
        position: y,
        minY,
        maxY,
      },
    };
  };

  /**
   * Check if is reach the bound
   */
  const getReachBound = (
    position: number,
    min: number,
    max: number,
    buffer = 0,
  ) => {
    return [position <= min - buffer, position >= max + buffer];
  };

  /**
   * Limit the matrix in the bound
   */
  const boundMatrix = (
    nextMatrix: Matrix,
    type: 'translate' | 'scale',
    last = false,
  ): Matrix => {
    if (!controlSize || !imgSize) return nextMatrix;

    const zoom = mat.getScaleX(nextMatrix);
    const scaledImgWidth = zoom * imgSize.width;
    const scaledImgHeight = zoom * imgSize.height;

    const {
      x: { position: x, minX, maxX },
      y: { position: y, minY, maxY },
    } = getMinAndMax(nextMatrix);

    if (type === 'translate') {
      let boundedX = x;
      let boundedY = y;
      if (scaledImgWidth > controlSize.width) {
        boundedX = last
          ? bound(x, minX, maxX)
          : rubberbandIfOutOfBounds(x, minX, maxX, zoom * 50);
      } else {
        boundedX = -scaledImgWidth / 2;
      }

      if (scaledImgHeight > controlSize.height) {
        boundedY = last
          ? bound(y, minY, maxY)
          : rubberbandIfOutOfBounds(y, minY, maxY, zoom * 50);
      } else {
        boundedY = -scaledImgHeight / 2;
      }

      return mat.translate(nextMatrix, boundedX - x, boundedY - y);
    }

    if (type === 'scale' && last) {
      const [boundedX, boundedY] = [
        scaledImgWidth > controlSize.width
          ? bound(x, minX, maxX)
          : -scaledImgWidth / 2,
        scaledImgHeight > controlSize.height
          ? bound(y, minY, maxY)
          : -scaledImgHeight / 2,
      ];
      return mat.translate(nextMatrix, boundedX - x, boundedY - y);
    }

    return nextMatrix;
  };

  useDragAndPinch(
    {
      onDrag: (state) => {
        if (state.first) {
          const {
            x: { position: x, minX, maxX },
          } = getMinAndMax(matrix.get());
          initialMartix.current = getReachBound(x, minX, maxX);
          return;
        }
        if (state.pinching) return state.cancel();

        if (state.tap && state.elapsedTime > 0 && state.elapsedTime < 1000) {
          // \u5224\u65AD\u70B9\u51FB\u65F6\u95F4>0\u662F\u4E3A\u4E86\u8FC7\u6EE4\u6389\u975E\u6B63\u5E38\u64CD\u4F5C\uFF0C\u4F8B\u5982\u7528\u6237\u957F\u6309\u9009\u62E9\u56FE\u7247\u4E4B\u540E\u7684\u53D6\u6D88\u64CD\u4F5C\uFF08\u4E5F\u662F\u4E00\u6B21\u70B9\u51FB\uFF09
          props.onTap?.();
          return;
        }
        const currentZoom = mat.getScaleX(matrix.get());
        if (dragLockRef) {
          dragLockRef.current = currentZoom !== 1;
        }
        if (!pinchLockRef.current && currentZoom <= 1) {
          api.start({
            matrix: mat.create(),
          });
        } else {
          const currentMatrix = matrix.get();
          const offset = [
            state.offset[0] - mat.getTranslateX(currentMatrix),
            state.offset[1] - mat.getTranslateY(currentMatrix),
          ] as const;

          const nextMatrix = mat.translate(
            currentMatrix,
            ...(state.last
              ? ([
                  offset[0] + state.velocity[0] * state.direction[0] * 200,
                  offset[1] + state.velocity[1] * state.direction[1] * 200,
                ] as const)
              : offset),
          );

          api.start({
            matrix: boundMatrix(nextMatrix, 'translate', state.last),
            immediate: !state.last,
          });

          const {
            x: { position: x, minX, maxX },
          } = getMinAndMax(nextMatrix);
          if (
            state.last &&
            initialMartix.current.some((i) => i) &&
            getReachBound(x, minX, maxX).some((i) => i)
          ) {
            if (dragLockRef) {
              dragLockRef.current = false;
            }

            api.start({
              matrix: mat.create(),
            });
          }
        }
      },
      onPinch: (state) => {
        pinchLockRef.current = !state.last;
        const [d] = state.offset;
        if (d < 0) return;
        let mergedMaxZoom: number;
        if (maxZoom === 'auto') {
          mergedMaxZoom =
            controlSize && imgSize
              ? Math.max(
                  controlSize.height / imgSize.height,
                  controlSize.width / imgSize.width,
                )
              : 1;
        } else {
          mergedMaxZoom = maxZoom;
        }

        const nextZoom = state.last ? bound(d, 1, mergedMaxZoom) : d;
        props.onZoomChange?.(nextZoom);
        if (state.last && nextZoom <= 1) {
          api.start({
            matrix: mat.create(),
          });
          if (dragLockRef) {
            dragLockRef.current = false;
          }
        } else {
          if (!controlSize) return;

          const currentMatrix = matrix.get();
          const currentZoom = mat.getScaleX(currentMatrix);

          const originOffsetX = state.origin[0] - controlSize.width / 2;
          const originOffsetY = state.origin[1] - controlSize.height / 2;
          let nextMatrix = mat.translate(
            currentMatrix,
            -originOffsetX,
            -originOffsetY,
          );
          nextMatrix = mat.scale(nextMatrix, nextZoom / currentZoom);
          nextMatrix = mat.translate(nextMatrix, originOffsetX, originOffsetY);
          api.start({
            matrix: boundMatrix(nextMatrix, 'scale', state.last),
            immediate: !state.last,
          });
          if (dragLockRef) {
            dragLockRef.current = true;
          }
        }
      },
    },
    {
      target: controlRef,
      drag: {
        from: () => [
          mat.getTranslateX(matrix.get()),
          mat.getTranslateY(matrix.get()),
        ],
        pointer: { touch: true },
      },
      pinch: {
        from: () => [mat.getScaleX(matrix.get()), 0],
        pointer: { touch: true },
      },
    },
  );

  return (
    <div className={\`\${classPrefix}-slide\`}>
      <div className={\`\${classPrefix}-control\`} ref={controlRef}>
        <animated.div
          className={\`\${classPrefix}-image-wrapper\`}
          style={{
            matrix,
          }}
        >
          <img
            ref={imgRef}
            src={props.image}
            draggable={false}
            alt={props.image}
          />
        </animated.div>
      </div>
    </div>
  );
};
`},31794:function(e,n){n.Z=`import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { bound } from '../utils/bound';
import { convertPx } from '../utils/convert-px';
import { Slide } from './slide';

const classPrefix = \`triones-antm-image-viewer\`;

export type SlidesType = {
  images: string[];
  onTap?: () => void;
  maxZoom: number;
  defaultIndex: number;
  onIndexChange?: (index: number) => void;
};
export type SlidesRef = {
  swipeTo: (index: number, immediate?: boolean) => void;
};

export const Slides = forwardRef<SlidesRef, SlidesType>((props, ref) => {
  const slideWidth = window.innerWidth + convertPx(16);
  const [{ x }, api] = useSpring(() => ({
    x: props.defaultIndex * slideWidth,
    config: { tension: 250, clamp: true },
  }));

  const count = props.images.length;

  function swipeTo(index: number, immediate = false) {
    const i = bound(index, 0, count - 1);
    props.onIndexChange?.(i);
    api.start({
      x: i * slideWidth,
      immediate,
    });
  }

  useImperativeHandle(ref, () => ({
    swipeTo,
  }));

  const dragLockRef = useRef(false);
  const bind = useDrag(
    (state) => {
      if (dragLockRef.current) return;
      const [offsetX] = state.offset;
      if (state.last) {
        const minIndex = Math.floor(offsetX / slideWidth);
        const maxIndex = minIndex + 1;
        const velocityOffset =
          Math.min(state.velocity[0] * 2000, slideWidth) * state.direction[0];
        swipeTo(
          bound(
            Math.round((offsetX + velocityOffset) / slideWidth),
            minIndex,
            maxIndex,
          ),
        );
      } else {
        api.start({
          x: offsetX,
          immediate: true,
        });
      }
    },
    {
      transform: ([x, y]) => [-x, y],
      from: () => [x.get(), 0],
      bounds: () => ({
        left: 0,
        right: (count - 1) * slideWidth,
      }),
      rubberband: true,
      axis: 'x',
      pointer: { touch: true },
    },
  );

  return (
    <div className={\`\${classPrefix}-slides\`} {...bind()}>
      <animated.div className={\`\${classPrefix}-indicator\`}>
        {x.to((v) => {
          const index: number = bound(Math.round(v / slideWidth), 0, count - 1);
          return \`\${index + 1} / \${count}\`;
        })}
      </animated.div>
      <animated.div
        className={\`\${classPrefix}-slides-inner\`}
        style={{ x: x.to((x) => -x) }}
      >
        {props.images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            onTap={props.onTap}
            maxZoom={props.maxZoom}
            onZoomChange={(zoom) => {
              if (zoom !== 1) {
                const index: number = Math.round(x.get() / slideWidth);
                api.start({
                  x: index * slideWidth,
                });
              }
            }}
            dragLockRef={dragLockRef}
          />
        ))}
      </animated.div>
    </div>
  );
});
`},13531:function(e,n){n.Z=`import './style.scss';

import { Mask } from './mark';
export type { MaskProps } from './mark';

export default Mask;
`},878:function(e,n){n.Z=`import { SafeArea } from './safe-area';
import './style.scss';

export type { SafeAreaProps } from './safe-area';

export default SafeArea;
`},51597:function(e,n){n.Z=`import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  position: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = (props) => {
  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        \`\${classPrefix}-position-\${props.position}\`,
      )}
    />,
  );
};
`},40902:function(e,n){n.Z=`export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P,
): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}
`},43009:function(e,n){n.Z=`export function bound(
  position: number,
  min: number | undefined,
  max: number | undefined
) {
  let ret = position
  if (min !== undefined) {
    ret = Math.max(position, min)
  }
  if (max !== undefined) {
    ret = Math.min(ret, max)
  }
  return ret
}
`},52267:function(e,n){n.Z=`import { canUseDom } from './can-use-dom';
import { devError } from './dev-log';
import { isDev } from './is-dev';

let tenPxTester: HTMLDivElement | null = null;
let tester: HTMLDivElement | null = null;

if (canUseDom) {
  tenPxTester = document.createElement('div');
  tenPxTester.className = 'adm-px-tester';
  tenPxTester.style.setProperty('--size', '10');
  document.body.appendChild(tenPxTester);
  tester = document.createElement('div');
  tester.className = 'adm-px-tester';
  document.body.appendChild(tester);
  if (isDev) {
    if (window.getComputedStyle(tester).position !== 'fixed') {
      devError(
        'Global',
        'The px tester is not rendering properly. Please make sure you have imported \`antd-mobile/es/global\`.',
      );
    }
  }
}

export function convertPx(px: number) {
  if (tenPxTester === null || tester === null) return px;
  if (tenPxTester.getBoundingClientRect().height === 10) {
    return px;
  }
  tester.style.setProperty('--size', px.toString());
  return tester.getBoundingClientRect().height;
}
`},68347:function(e,n){n.Z=`import { isDev } from './is-dev';

export function devWarning(component: string, message: string): void {
  if (isDev) {
    console.warn(\`[antd-mobile: \${component}] \${message}\`);
  }
}

export function devError(component: string, message: string) {
  if (isDev) {
    console.error(\`[antd-mobile: \${component}] \${message}\`);
  }
}

let infoBox: HTMLTextAreaElement;
export function devPrint(...message: any[]) {
  if (isDev) {
    if (!infoBox) {
      infoBox = document.createElement('textarea');
      document.body.append(infoBox);
      infoBox.style.position = 'fixed';
      infoBox.style.top = '0';
      infoBox.style.left = '0';
      infoBox.style.width = '100vw';
      infoBox.style.height = '100vh';
      infoBox.style.zIndex = '999999';
      infoBox.style.fontSize = '12px';
      // infoBox.style.opacity = '0.85'
      infoBox.style.pointerEvents = 'none';
      infoBox.style.background = 'transparent';
      infoBox.style.textShadow =
        '-1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF, 1px 1px 0 #FFF';
    }

    infoBox.value = \`\${infoBox.value}\\n\${message.join(' ')}\`.trim();
    infoBox.scrollTop = infoBox.scrollHeight;
  }
}
`},46454:function(e,n){n.Z=`export const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
`},21996:function(e,n){n.Z=`export type Matrix = readonly [number, number, number, number, number, number];

export const create = (): Matrix => {
  return [1, 0, 0, 1, 0, 0];
};

export const getTranslateX = (m: Matrix): number => {
  return m[4];
};

export const getTranslateY = (m: Matrix): number => {
  return m[5];
};

export const getScaleX = (m: Matrix): number => {
  return m[0];
};

export const getScaleY = (m: Matrix): number => {
  return m[3];
};

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5],
  ];
};

export const translate = (m: Matrix, x: number, y: number): Matrix => {
  return multiply([1, 0, 0, 1, x, y], m);
};

export const scale = (m: Matrix, scaleX: number, scaleY = scaleX): Matrix => {
  return multiply([scaleX, 0, 0, scaleY, 0, 0], m);
};

export const apply = (
  m: Matrix,
  [ox, oy]: [number, number],
): [number, number] => {
  return [m[0] * ox + m[2] * oy + m[4], m[1] * ox + m[3] * oy + m[5]];
};
`},42374:function(e,n){n.Z=`import type { ReactElement } from 'react';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { renderToBody } from './render-to-body';

type ImperativeProps = {
  visible?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
};

type TargetElement = ReactElement<ImperativeProps>;

export type ImperativeHandler = {
  close: () => void;
  replace: (element: TargetElement) => void;
  isRendered?: () => boolean;
};

export function renderImperatively(element: TargetElement) {
  const wrapperRef = React.createRef<ImperativeHandler>();
  const Wrapper = React.forwardRef<ImperativeHandler>((_, ref) => {
    const [visible, setVisible] = useState(false);
    const closedRef = useRef(false);
    const [elementToRender, setElementToRender] = useState(element);
    const keyRef = useRef(0);
    function afterClose() {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      unmount();
      elementToRender.props.afterClose?.();
    }
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true);
      } else {
        afterClose();
      }
    }, []);
    function onClose() {
      closedRef.current = true;
      setVisible(false);
      elementToRender.props.onClose?.();
    }

    useImperativeHandle(ref, () => ({
      close: onClose,
      replace: (element) => {
        keyRef.current++;
        elementToRender.props.afterClose?.();
        setElementToRender(element);
      },
    }));
    return React.cloneElement(elementToRender, {
      ...elementToRender.props,
      key: keyRef.current,
      visible,
      onClose,
      afterClose,
    });
  });
  const unmount = renderToBody(<Wrapper ref={wrapperRef} />);
  return {
    close: async () => {
      if (!wrapperRef.current) {
        // it means the wrapper is not mounted yet, call \`unmount\` directly
        unmount();
        // call \`afterClose\` to make sure the callback is called
        element.props.afterClose?.();
      } else {
        wrapperRef.current?.close();
      }
    },
    replace: (element) => {
      wrapperRef.current?.replace(element);
    },
    isRendered: () => !!wrapperRef.current,
  } as ImperativeHandler;
}
`},20969:function(e,n){n.Z=`import type { ReactElement } from 'react';
import { unmount as reactUnmount, render } from './render';

export function renderToBody(element: ReactElement) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  function unmount() {
    const unmountResult = reactUnmount(container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
  render(element, container);
  return unmount;
}
`},3813:function(e,n){n.Z=`import type { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import type { Root } from 'react-dom/client';

// \u79FB\u690D\u81EArc-util: https://github.com/react-component/util/blob/master/src/React/render.ts

type CreateRoot = (container: ContainerType) => Root;

// Let compiler not to search module usage
const fullClone = {
  ...ReactDOM,
} as typeof ReactDOM & {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
    usingClientEntryPoint?: boolean;
  };
  createRoot?: CreateRoot;
};

const { version, render: reactRender, unmountComponentAtNode } = fullClone;

let createRoot: CreateRoot;
try {
  const mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18 && fullClone.createRoot) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    createRoot = fullClone.createRoot;
  }
} catch (e) {
  // Do nothing;
}

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone;

  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
      skip;
  }
}

const MARK = '__antd_mobile_root__';

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root;
};

function legacyRender(node: ReactElement, container: ContainerType) {
  reactRender(node, container);
}

function concurrentRender(node: ReactElement, container: ContainerType) {
  toggleWarning(true);
  const root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}

export function render(node: ReactElement, container: ContainerType) {
  if (createRoot as unknown) {
    concurrentRender(node, container);
    return;
  }
  legacyRender(node, container);
}

// ========================== Unmount =========================
function legacyUnmount(container: ContainerType) {
  return unmountComponentAtNode(container);
}

async function concurrentUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount();
    delete container[MARK];
  });
}

export function unmount(container: ContainerType) {
  if (createRoot as unknown) {
    return concurrentUnmount(container);
  }

  return legacyUnmount(container);
}
`},9033:function(e,n){n.Z=`import { bound } from './bound';

export function rubberband(
  distance: number,
  dimension: number,
  constant: number,
) {
  return (distance * dimension * constant) / (dimension + constant * distance);
}

export function rubberbandIfOutOfBounds(
  position: number,
  min: number,
  max: number,
  dimension: number,
  constant = 0.15,
) {
  if (constant === 0) return bound(position, min, max);
  if (position < min)
    return -rubberband(min - position, dimension, constant) + min;
  if (position > max)
    return +rubberband(position - max, dimension, constant) + max;
  return position;
}
`},17557:function(e,n){n.Z=`import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';

export const useDragAndPinch = createUseGesture([dragAction, pinchAction]);
`}}]);

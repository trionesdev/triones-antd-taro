"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[5076],{89826:function(n,e){e.Z=`import {ActionSheet,ActionSheetProps} from "@trionesdev/antd-mobile-base-react"

export type {ActionSheetProps}
export default ActionSheet
`},37606:function(n,e){e.Z=`import {Alert, AlertProps} from "@trionesdev/antd-mobile-base-react"

export type {
  AlertProps
}
export default Alert
`},73631:function(n,e){e.Z=`import { Avatar,AvatarProps } from "@trionesdev/antd-mobile-base-react"

export type { AvatarProps }
export default Avatar
`},83168:function(n,e){e.Z=`import { Badge } from '@trionesdev/antd-mobile-base-react'
export type { BadgeFill, BadgeProps } from '@trionesdev/antd-mobile-base-react'

export default Badge
`},62352:function(n,e){e.Z=`import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';
import './style.scss';

export type ButtonProps = {
  /**
   * @description block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean;
  /**
   * @description \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | string;
  /**
   * @description \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean;
  /**
   * @description \u662F\u5426\u7981\u7528
   */
  disabled?: boolean;
  /**
   * @description \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean;
  /**
   * @description \u6309\u94AE\u7C7B\u578B
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  className?: string;
  style?: React.CSSProperties;
  /**
   * @description \u56FE\u6807
   */
  icon?: React.ReactNode;
  /**
   * @description \u56FE\u6807\u4F4D\u7F6E
   */
  iconPosition?: 'start' | 'end';
  /**
   * @description \u52A0\u8F7D\u4E2D
   */
  loading?: boolean;
  /**
   * @description \u6309\u94AE\u6837\u5F0F
   */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  /**
   * @description \u70B9\u51FB\u4E8B\u4EF6
   */
  onClick?: (e: any) => void;
  [key: string]: any;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                          children,
                                          block = false,
                                          type = 'default',
                                          color,
                                          danger = false,
                                          disabled,
                                          className,
                                          style,
                                          icon,
                                          iconPosition = 'start',
                                          loading,
                                          variant,
                                          size = 'middle',
                                          onClick,
                                          ...props
                                        }) => {
  const clsPrefix = 'triones-antm-button';
  let finalColor = color;
  let finalVariant = variant;
  if (type) {
    if (!color) {
      if (type === 'primary' || type === 'link') {
        finalColor = 'primary';
      } else if (type === 'default') {
        finalColor = 'default';
      }
    }
    if (!variant) {
      if (type === 'primary') {
        finalVariant = 'solid';
      } else if (type === 'default') {
        finalVariant = 'outlined';
      } else if (type === 'dashed' || type === 'link' || type === 'text') {
        finalVariant = type;
      }
    }
  }
  if (danger) {
    finalColor = 'danger';
  }

  return <button
    {...{...props}}
    type={'button'}
    onClick={onClick}
    className={classNames(clsPrefix, \`\${clsPrefix}-\${size}\`, className, {
      [\`\${clsPrefix}-block\`]: block,
      [\`\${clsPrefix}-type-\${type}\`]: type,
      [\`\${clsPrefix}-color-\${finalColor}\`]: finalColor,
      [\`\${clsPrefix}-variant-\${finalVariant}\`]: finalVariant,
    })}
    style={style}
    disabled={disabled}
  >
    {iconPosition === 'start' && icon}
    {children}
    {iconPosition === 'end' && icon}
  </button>
};
`},47047:function(n,e){e.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps,}
export default Button
`},80664:function(n,e){e.Z=`import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import Calendar from '../Calendar';
import ConfigProvider from '../ConfigProvider';
import PickerView from '../PickerView';
import Popup from '../Popup';
import { DatetimeUtils } from '../utils/datetime-utils';
import { DateTimeSwitch } from './DateTimeSwitch';
import './style.scss';
import { cls, Mode } from './types';

export type CalendarDatetimePickerProps = {
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  value?: Date;
  onOk?: (value?: Date) => void;
  onClose?: () => void;
};

export const CalendarDatetimePicker: FC<CalendarDatetimePickerProps> = ({
  open,
  afterOpenChange,
  value = new Date(),
  onOk,
  onClose,
}) => {
  const { locale } = ConfigProvider.useConfig();
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const [mode, setMode] = useState<Mode>(Mode.date);
  const valueRef = useRef<any>(value || new Date());
  const bodyRef = useRef<any>(null);
  const datetimeSwitchRef = useRef<any>();
  const [bodyHeight, setBodyHeight] = useState(300);

  const handleClose = () => {
    setInnerOpen(false);
    onClose?.();
  };

  const handleOk = () => {
    onOk?.(valueRef.current);
    handleClose();
  };

  const handleComputeBodyHeight = async (): Promise<number> => {
    return Promise.resolve(bodyRef.current!.offsetHeight);
  };

  useEffect(() => {
    afterOpenChange?.(innerOpen);
    if (!innerOpen) {
      onClose?.();
    }
  }, [innerOpen]);

  useEffect(() => {
    if (open === undefined) {
      return;
    }
    if (open === innerOpen) {
      return;
    }
    setInnerOpen(open!);
  }, [open]);

  useEffect(() => {
    if (datetimeSwitchRef.current) {
      datetimeSwitchRef.current.setDatetime(valueRef.current);
    }
  }, []);

  const bodyRender = () => {
    return (
      <>
        {mode === Mode.date && (
          <div style={{}}>
            <Calendar
              mouth={value}
              value={value}
              onChange={(date) => {
                valueRef.current = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  valueRef.current.getHours(),
                  valueRef.current.getMinutes(),
                );
                datetimeSwitchRef.current?.setDatetime(valueRef.current);
              }}
            />
          </div>
        )}
        {mode === Mode.time && (
          <div style={{ height: bodyHeight }}>
            <PickerView
              columns={[
                Array(24)
                  .fill(0)
                  .map((_, i) => {
                    return {
                      label: \`\${DatetimeUtils.twoDigits(i)}\`,
                      value: \`\${i}\`,
                    };
                  }),
                Array(60)
                  .fill(0)
                  .map((_, i) => {
                    return {
                      label: \`\${DatetimeUtils.twoDigits(i)}\`,
                      value: \`\${i}\`,
                    };
                  }),
              ]}
              labelInValue={false}
              value={[
                \`\${valueRef?.current.getHours()}\`,
                \`\${valueRef?.current.getMinutes()}\`,
              ]}
              onChange={(v) => {
                valueRef.current = new Date(
                  valueRef.current.getFullYear(),
                  valueRef.current.getMonth(),
                  valueRef.current.getDate(),
                  v[0],
                  v[1],
                );
                datetimeSwitchRef.current?.setDatetime(valueRef.current);
              }}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <Popup
      open={innerOpen}
      onClose={() => {
        setInnerOpen(false);
      }}
    >
      <div className={classNames(cls)}>
        <div className={\`\${cls}-header\`}>
          <DateTimeSwitch
            ref={datetimeSwitchRef}
            mode={mode}
            value={valueRef.current}
            onDateTabTap={() => setMode(Mode.date)}
            onTimeTabTap={() => {
              handleComputeBodyHeight().then((height) => {
                setBodyHeight(height);
                setMode(Mode.time);
              });
            }}
          />
          <a
            className={classNames(
              \`\${cls}-header-button\`,
              \`\${cls}-header-button-ok\`,
            )}
            onClick={handleOk}
          >
            {locale.common.confirm}
          </a>
        </div>

        <div
          className={\`\${cls}-body\`}
          ref={bodyRef}
          id={bodyRef.current?.uid}
        >
          {bodyRender()}
        </div>
      </div>
    </Popup>
  );
};
`},89387:function(n,e){e.Z=`import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { DatetimeUtils } from '../utils/datetime-utils';
import './style.scss';
import { cls, Mode } from './types';

export interface DateTimeSwitchHandle {
  setDatetime: (datetime: Date) => void;
}

type DateTimeSwitchProps = {
  onDateTabTap?: () => void;
  onTimeTabTap?: () => void;
  mode?: Mode;
  value?: Date;
};

export const DateTimeSwitch = forwardRef<
  DateTimeSwitchHandle,
  DateTimeSwitchProps
>(({ onDateTabTap, onTimeTabTap, mode, value }, ref) => {
  const [datetime, setDatetime] = useState<Date | undefined>(value);

  useImperativeHandle(ref, () => ({
    setDatetime,
  }));

  return (
    <div className={classNames(\`\${cls}-header-display\`)}>
      <div
        className={classNames(\`\${cls}-header-display-date\`, {
          [\`\${cls}-header-display-active\`]: mode === Mode.date,
        })}
        onClick={onDateTabTap}
      >
        {datetime
          ? \`\${datetime.getFullYear()}-\${DatetimeUtils.twoDigits(datetime.getMonth() + 1)}-\${DatetimeUtils.twoDigits(datetime.getDate())}\`
          : ''}
      </div>
      <div
        className={classNames(\`\${cls}-header-display-time\`, {
          [\`\${cls}-header-display-active\`]: mode === Mode.time,
        })}
        onClick={onTimeTabTap}
      >
        {datetime ? \`\${datetime.getHours()}:\${datetime.getMinutes()}\` : ''}
      </div>
    </div>
  );
});
`},22618:function(n,e){e.Z=`import classNames from 'classnames';
import React, { FC, memo, useEffect, useRef } from 'react';
import Calendar from '../Calendar';

import './style.scss';
import { CalendarPickerProps } from './types';
import ConfigProvider from '../ConfigProvider';
import Popup from '../Popup';

const cls = 'triones-antm-calendar-picker';

export const CalendarPicker: FC<CalendarPickerProps> = memo(
  ({ mouth, open, title, afterOpenChange, value, onOk, onCancel, onClose }) => {
    const { locale } = ConfigProvider.useConfig();
    const [innerOpen, setInnerOpen] = React.useState(open || false);
    const valueRef = useRef<any>();

    const handleClose = () => {
      setInnerOpen(false);
      onClose?.();
    };
    const handleOk = () => {
      onOk?.(valueRef.current);
      handleClose();
    };

    const handelCancel = () => {
      onCancel?.();
      handleClose();
    };

    useEffect(() => {
      afterOpenChange?.(innerOpen);
    }, [innerOpen]);

    useEffect(() => {
      if (value !== undefined) {
        if (value !== valueRef.current) {
          valueRef.current = value;
        }
      }
    }, [value]);

    useEffect(() => {
      if (open === undefined) {
        return;
      }
      if (open === innerOpen) {
        return;
      }
      setInnerOpen(open);
    }, [open]);

    return (
      <Popup
        open={innerOpen}
        onClose={() => {
          setInnerOpen(false);
        }}
      >
        <div className={classNames(\`\${cls}\`)}>
          <div className={classNames(\`\${cls}-header\`)}>
            <a
              className={classNames(
                \`\${cls}-header-button\`,
                \`\${cls}-header-cancel\`,
              )}
              onClick={handelCancel}
            >
              {locale.common.cancel}
            </a>
            {title && (
              <div className={classNames(\`\${cls}-header-title\`)}>{title}</div>
            )}
            <a
              className={classNames(
                \`\${cls}-header-button\`,
                \`\${cls}-header-button-ok\`,
              )}
              onClick={handleOk}
            >
              {locale.common.confirm}
            </a>
          </div>
          <div className={classNames(\`\${cls}-body\`)}>
            <Calendar
              mouth={mouth}
              value={value}
              onChange={(date) => {
                valueRef.current = date;
              }}
            />
          </div>
        </div>
      </Popup>
    );
  },
);
`},2398:function(n,e){e.Z=`import React, {FC, memo, useEffect, useRef} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import Calendar from "../Calendar";
import "./style.scss"
import {CalendarPickerRangeProps} from "./types";
import ConfigProvider from "../ConfigProvider";

const cls = 'triones-antm-calendar-picker';

export const CalendarRangePicker: FC<CalendarPickerRangeProps> = memo(
  ({
     mouth,
     open,
     title,
     afterOpenChange,
     value,
     onOk,
     onCancel,
     onClose
   }) => {
    const {locale} = ConfigProvider.useConfig();
    const [innerOpen, setInnerOpen] = React.useState(open || false);
    const valueRef = useRef<any>();

    const handleClose = () => {
      setInnerOpen(false)
      onClose?.()
    }
    const handleOk = () => {
      onOk?.(valueRef.current)
      handleClose()
    }

    const handelCancel = () => {
      onCancel?.()
      handleClose()
    }

    useEffect(() => {
      afterOpenChange?.(innerOpen)
    }, [innerOpen]);

    useEffect(() => {
      if (value !== undefined) {
        if (value !== valueRef.current) {
          valueRef.current = value
        }
      }
    }, [value]);

    useEffect(() => {
      if (open === undefined) {
        return;
      }
      if (open === innerOpen) {
        return;
      }
      setInnerOpen(open)
    }, [open]);

    return <Popup open={innerOpen}
                  onClose={() => {
                    setInnerOpen(false);
                  }}
    >
      <div className={classNames(\`\${cls}\`)}>
        <div className={classNames(\`\${cls}-header\`)}>
          <a className={classNames(\`\${cls}-header-button\`)} onClick={handelCancel}>{locale.common.cancel}</a>
          {title && <div className={classNames(\`\${cls}-header-title\`)}>{title}</div>}
          <a className={classNames(\`\${cls}-header-button\`)} onClick={handleOk}>{locale.common.confirm}</a>
        </div>
        <div className={classNames(\`\${cls}-body\`)}>
          <Calendar.Range mouth={mouth} value={value} onChange={(date) => {
            valueRef.current = date;
          }}/>
        </div>
      </div>
    </Popup>
  }
)
`},80546:function(n,e){e.Z=`import { Card } from '@trionesdev/antd-mobile-base-react';

export type { CardProps } from '@trionesdev/antd-mobile-base-react';

export default Card;
`},33912:function(n,e){e.Z=`import {CascaderPicker,CascaderPickerProps} from "@trionesdev/antd-mobile-base-react"

export type {
  CascaderPickerProps
}
export default CascaderPicker
`},33158:function(n,e){e.Z=`import {CascaderView,CascaderViewProps} from "@trionesdev/antd-mobile-base-react"

export type {
  CascaderViewProps,
}
export default CascaderView
`},9042:function(n,e){e.Z=`import { Cell,CellProps,CellGroupProps } from '@trionesdev/antd-mobile-base-react';

export type { CellProps, CellGroupProps };
export default Cell;
`},21810:function(n,e){e.Z=`import {Checkbox,CheckboxProps} from "@trionesdev/antd-mobile-base-react"

export type {CheckboxProps}
export default Checkbox
`},14406:function(n,e){e.Z=`import {
  Descriptions,
  DescriptionsProps,
} from '@trionesdev/antd-mobile-base-react';

export type { DescriptionsProps };
export default Descriptions;
`},33642:function(n,e){e.Z=`import { Divider,DividerProps } from '@trionesdev/antd-mobile-base-react'

export type { DividerProps }

export default Divider
`},59933:function(n,e){e.Z=`import { Ellipsis } from '@trionesdev/antd-mobile-base-react'

export type { EllipsisProps } from '@trionesdev/antd-mobile-base-react'

export default Ellipsis
`},13938:function(n,e){e.Z=`import { Empty, EmptyProps } from '@trionesdev/antd-mobile-base-react';

export type { EmptyProps };
export default Empty;
`},68233:function(n,e){e.Z=`import { ErrorBlock,ErrorBlockStatus,ErrorBlockProps,createErrorBlock } from '@trionesdev/antd-mobile-base-react'

export {createErrorBlock}
export type { ErrorBlockStatus, ErrorBlockProps }
export default ErrorBlock
`},12509:function(n,e){e.Z=`import { Footer } from '@trionesdev/antd-mobile-base-react'

export type { FooterProps, ChipItem, LinkItem } from '@trionesdev/antd-mobile-base-react'

export default Footer

`},15821:function(n,e){e.Z=`import   {Form,FormProps,FormItemProps} from "@trionesdev/antd-mobile-base-react";

export type {
  FormProps,
  FormItemProps
}
export default Form;
`},58129:function(n,e){e.Z=`import { Grid } from '@trionesdev/antd-mobile-base-react';

export type {
  GridItemProps,
  GridProps,
} from '@trionesdev/antd-mobile-base-react';

export default Grid;
`},79914:function(n,e){e.Z=`import React from 'react';

export const BrokenImageIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z"
      fill="#DBDBDB"
      fillRule="nonzero"
    />
  </svg>
);
`},92385:function(n,e){e.Z=`import React from 'react';

export const ImageIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z"
      fill="#DBDBDB"
      fillRule="nonzero"
    />
  </svg>
);
`},25402:function(n,e){e.Z=`import type { ReactNode } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { staged } from 'staged-components';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { toCSSLength } from '../utils/to-css-length';
import { useIsomorphicUpdateLayoutEffect } from '../utils/use-isomorphic-update-layout-effect';
import { mergeProps } from '../utils/with-default-props';
import { BrokenImageIcon } from './broken-image-icon';
import { ImageIcon } from './image-icon';
import { LazyDetector } from './lazy-detector';

const classPrefix = \`triones-antm-image\`;

export type ImageProps = {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  placeholder?: ReactNode;
  fallback?: ReactNode;
  lazy?: boolean;
  draggable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onContainerClick?: (event: React.MouseEvent<HTMLDivElement, Event>) => void;
} & NativeProps<'--width' | '--height'> &
  Pick<
    React.ImgHTMLAttributes<HTMLImageElement>,
    | 'crossOrigin'
    | 'decoding'
    | 'loading'
    | 'referrerPolicy'
    | 'sizes'
    | 'srcSet'
    | 'useMap'
    | 'id'
  >;

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={\`\${classPrefix}-tip\`}>
      <ImageIcon />
    </div>
  ),
  fallback: (
    <div className={\`\${classPrefix}-tip\`}>
      <BrokenImageIcon />
    </div>
  ),
  lazy: false,
  draggable: false,
};

export const Image = staged<ImageProps>((p) => {
  const props = mergeProps(defaultProps, p);

  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  let src: string | undefined = props.src;
  let srcSet: string | undefined = props.srcSet;

  const [initialized, setInitialized] = useState(!props.lazy);

  src = initialized ? props.src : undefined;
  srcSet = initialized ? props.srcSet : undefined;

  useIsomorphicUpdateLayoutEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  useEffect(() => {
    // for nextjs ssr
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  function renderInner() {
    if (failed) {
      return <>{props.fallback}</>;
    }
    const img = (
      <img
        ref={imgRef}
        // id={props.id}
        className={\`\${classPrefix}-img\`}
        src={src}
        alt={props.alt}
        onClick={props.onClick}
        onLoad={(e) => {
          setLoaded(true);
          props.onLoad?.(e);
        }}
        onError={(e) => {
          setFailed(true);
          props.onError?.(e);
        }}
        style={{
          objectFit: props.fit,
          display: loaded ? 'block' : 'none',
        }}
        crossOrigin={props.crossOrigin}
        decoding={props.decoding}
        loading={props.loading}
        referrerPolicy={props.referrerPolicy}
        sizes={props.sizes}
        srcSet={srcSet}
        useMap={props.useMap}
        draggable={props.draggable}
      />
    );
    return (
      <>
        {!loaded && props.placeholder}
        {img}
      </>
    );
  }

  const style: ImageProps['style'] = {};
  if (props.width) {
    style['width'] = toCSSLength(props.width);
  }
  if (props.height) {
    style['height'] = toCSSLength(props.height);
  }
  return withNativeProps(
    props,
    <div
      ref={ref}
      className={classPrefix}
      style={style}
      onClick={props.onContainerClick}
    >
      {props.lazy && !initialized && (
        <LazyDetector
          onActive={() => {
            setInitialized(true);
          }}
        />
      )}
      {renderInner()}
    </div>,
  );
});
`},50609:function(n,e){e.Z=`import {Image, ImageProps } from './image';
import './style.scss';

export type { ImageProps } ;
export default Image;
`},13779:function(n,e){e.Z=`import { useInViewport } from 'ahooks';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

type Props = {
  onActive: () => void;
};

export const LazyDetector: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (inViewport) {
      props.onActive();
    }
  }, [inViewport]);

  return <div ref={ref} />;
};
`},77073:function(n,e){e.Z=`import React, {useEffect} from "react";
import {FC} from "react";
import Mask from "../Mask";
import classNames from "classnames";
import {Swiper,Image} from "../index"
import "./style.scss"

const cls = 'triones-antm-image-preview';

export type ImagePreviewProps = {
  className?: string;
  open?: boolean;
  items?: (string|undefined)[];
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
      <div className={classNames(\`\${cls}-head\`)}>
        {\`\${innerActiveIndex+1}/\${items?.length}\`}
      </div>
      <div className={classNames(\`\${cls}-content\`)}>
        <Swiper style={{width: '100%',height: '100%'}}
                activeIndex={innerActiveIndex}
                onChange={setInnerActiveIndex}
                items={items?.map((item) => {
                  return {
                    children: <div style={{width: '100%'}} onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}>
                      <Image src={item} alt="" />
                    </div>
                  }
                })}/>
      </div>
    </div>
  </Mask>;
}
`},9349:function(n,e){e.Z=`import React, {FC} from "react"
import Mask from "../Mask";

type CameraPopupProps={
  open?:boolean
}

export const CameraModal:FC<CameraPopupProps> = ({open}) => {
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  return <Mask open={innerOpen}>
    <div style={{width: '100%', height: '100%'}}>
      sss
    </div>
  </Mask>
}
`},24016:function(n,e){e.Z=`import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";
import {AddOutline, CloseOutline} from "../../../antd-mobile-icons-react";
import "./style.scss"
import ActionSheet from "../ActionSheet";
import {CameraModal} from "./CameraModal";
import {ImagesPreview} from "../index"
import {isEqual} from "lodash-es";
import {RandomUtils} from '../utils/random-utils';

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
  return <div className={classNames(\`\${cls}-item\`,)}>
    {!disabled && <div className={\`\${cls}-item-close\`} onClick={onClose}>
      <CloseOutline/>
    </div>}
    <div className={classNames(\`\${cls}-item-inner\`,)} onClick={() => {
      if (preview) {
        onPreview?.(image)
      }
    }}>
      {image.url && <img className={\`\${cls}-item-image\`} src={image.url} alt=""/>}
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
  onRequest?: (file: File) => Promise<string>
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
  const [cameraOpen, setCameraOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [images, setImages] = useState<ImagesWallItemType[]>(value || [])

  const handleSelectPhoto = () => {

  }

  const handleSelectCamera = () => {
    setSheetOpen(false)
    setCameraOpen(true)
  }

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
    <CameraModal open={cameraOpen}/>
    <ActionSheet className={\`\${cls}-action-sheet\`} open={sheetOpen}
                 afterOpenChange={setSheetOpen}
                 actions={
                   [
                     {
                       key: 'photo', children: <>
                         <div>\u4ECE\u76F8\u518C\u9009\u62E9</div>
                         <input className={\`\${cls}-item-input\`} type={\`file\`} accept={\`image/*\`} multiple={true}
                                onChange={async (e) => {
                                  if (e.target.files) {
                                    const files = Array.from(e.target.files)
                                    const promises: any[] = files.map(file => {
                                      const uid = RandomUtils.random()
                                      onRequest?.(file).then(res => {
                                        const newImages = [...images.map((item) => {
                                          if (item.uid === uid) {
                                            item.url = res;
                                            item.status = 'done';
                                            return item;
                                          }
                                          return item;
                                        })];
                                        setImages(newImages)
                                        onChange?.(newImages)
                                      })
                                      return new Promise((resolve) => {
                                        const reader = new FileReader();
                                        reader.onload = (event) => {
                                          resolve({
                                            uid: uid,
                                            name: file.name,
                                            src: event.target?.result,
                                            type: file.type,
                                            status: 'uploading',
                                          });
                                        };
                                        reader.readAsDataURL(file);
                                      });
                                    });
                                    Promise.all(promises).then(results => {
                                      console.log(results)
                                      const newImages = [...images, ...results];
                                      setImages(newImages);
                                      onChange?.(newImages)
                                    });
                                  }
                                }}/>
                       </>, onClick: () => {
                       }
                     },
                     {
                       key: 'camera', children: <>
                         <div>\u62CD\u6444\u7167\u7247</div>
                       </>, onClick: () => {
                         handleSelectCamera()
                       }
                     }
                   ]}/>
    <ImagesPreview open={imagePreviewOpen} afterOpenChange={setImagePreviewOpen}
                   items={images.map(item => item.url) || []} activeIndex={previewIndex}/>
    <div className={classNames(cls, className)} style={{gridTemplateColumns: \`repeat(\${columns}, 1fr)\`}}>
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
      {!disabled && <div className={classNames(\`\${cls}-item\`, \`\${cls}-upload\`)} onClick={() => {
        if (customUploadAction) {
          customUploadAction()
        } else {
          setSheetOpen(true)
        }
      }}>
        <AddOutline/>
      </div>}
    </div>
  </>;
}
`},6050:function(n,e){e.Z=`import { InputProps, Input, InputOPTProps, InputPasswordProps,InputTextareaProps   } from '@trionesdev/antd-mobile-base-react';

export type {
  InputOPTProps,
  InputPasswordProps,
  InputProps,
  InputTextareaProps,
};
export default Input;
`},5e3:function(n,e){e.Z=`import {InputNumber,InputNumberProps} from "@trionesdev/antd-mobile-base-react"
export  type {InputNumberProps}
export default InputNumber
`},85911:function(n,e){e.Z=`import {Mask,MaskProps} from "@trionesdev/antd-mobile-base-react"

export type {MaskProps}
export default Mask
`},55584:function(n,e){e.Z=`import { NavBar,NavBarProps } from '@trionesdev/antd-mobile-base-react'

export type { NavBarProps }

export default NavBar
`},39130:function(n,e){e.Z=`import { NoticeBar,NoticeBarProps } from '@trionesdev/antd-mobile-base-react'

export type { NoticeBarProps }
export default NoticeBar
`},52220:function(n,e){e.Z=`import { PageIndicator,PageIndicatorProps } from '@trionesdev/antd-mobile-base-react'

export type { PageIndicatorProps }
export default PageIndicator
`},97345:function(n,e){e.Z=`import {Picker, PickerProps} from "@trionesdev/antd-mobile-base-react"

export type {
    PickerProps,
}
export default Picker
`},85105:function(n,e){e.Z=`import {PickerView,PickerViewProps,PickerColumnOption} from "@trionesdev/antd-mobile-base-react"

export type {
  PickerViewProps,
  PickerColumnOption
}
export default PickerView
`},48016:function(n,e){e.Z=`import {Popup,PopupProps} from "@trionesdev/antd-mobile-base-react";

export type {PopupProps}
export default Popup;
`},94569:function(n,e){e.Z=`import React, { FC } from "react"
import { ProgressCircle } from "./ProgressCircle";
import "./style.scss"
import { ProgressLine } from "./ProgressLine";
import { exceptionColor, PercentPositionAlign, ProgressStatus, successColor } from "./types";
import { SizeType } from "@trionesdev/antd-mobile-base-react";

export type ProgressProps = {
  /**
   * @description \u5185\u5BB9\u7684\u6A21\u677F\u51FD\u6570
   * @default percent => \`\${percent}%\`
   */
  format?: (percent: number) => string;
  type?: 'line' | 'circle'
  /**
   * @description \u767E\u5206\u6BD4
   * @default 0
   */
  percent?: number;
  size?: SizeType | number;
  /**
   * @description \u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6570\u503C\u6216\u72B6\u6001\u56FE\u6807
   * @default true
   */
  showInfo?: boolean;
  /**
   * @description \u672A\u5B8C\u6210\u7684\u5206\u6BB5\u7684\u989C\u8272
   */
  railColor?: string;
  /**
   * @description \u8FDB\u5EA6\u6761\u7684\u8272\u5F69
   */
  strokeColor?: string;
  status?: ProgressStatus;
  /**
   * @description \u8FDB\u5EA6\u6570\u503C\u4F4D\u7F6E
   */
  percentPositionAlign?: PercentPositionAlign;
}

export const Progress: FC<ProgressProps> = ({
  format,
  type = 'line', percent = 0,
  size = 'middle',
  showInfo = true,
  railColor = '#E5E5E5',
  strokeColor = '#1777FF', status,
  percentPositionAlign
}) => {

  const handleComputedStrokeColor = () => {
    if (status === 'exception') {
      return exceptionColor
    }
    if (percent >= 100) {
      return successColor
    }
    return strokeColor
  }

  if (type === 'line') {
    return <ProgressLine format={format} percent={percent} size={size} railColor={railColor}
      strokeColor={handleComputedStrokeColor()}
      status={status}
      showInfo={showInfo} percentPositionAlign={percentPositionAlign} />
  }
  return <ProgressCircle format={format} percent={percent} size={size} railColor={railColor}
    strokeColor={handleComputedStrokeColor()}
    showInfo={showInfo}
    status={status} />
}
`},5687:function(n,e){e.Z=`import React, {CSSProperties, FC, memo, useEffect, useMemo, useRef} from "react"
import { SizeType } from "@trionesdev/antd-mobile-base-react";
import classNames from "classnames";
import './style.scss';
import { CheckOutline, CloseOutline } from "@trionesdev/antd-mobile-icons-react";
import { exceptionColor, ProgressStatus, successColor } from "./types";

type ProcessCircleProps = {
  format?: (percent: number) => string;
  percent?: number;
  strokeWidth?: number;
  size?: SizeType | number ;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  strokeLineCap?: 'butt' | 'round' | 'square';
  status?: ProgressStatus;
}

export const ProgressCircle: FC<ProcessCircleProps> = memo(({
  format,
  percent = 0,
  strokeWidth = 6,
  size = 'middle',
  showInfo = true,
  railColor = '#E5E5E5',
  strokeColor = '#1777FF',
  strokeLineCap = 'round',
  status
}) => {
  const clsPrefix = 'triones-antm-progress-circle';
  const canvasRef = useRef<any>();
  const computedWidth = useMemo(() => {
    switch (size) {
      case 'small':
        return 50;
      case 'middle':
        return 100;
      case 'large':
        return 150;
      default:
        return size || 50;
    }
  },[size])

  const computedHeight = useMemo(() => {
    switch (size) {
      case 'small':
        return 50;
      case 'middle':
        return 100;
      case 'large':
        return 150;
      default:
        return 50;
    }
  },[size])

  const style: CSSProperties = { width: computedWidth, height: computedHeight }

  const computedSize = () => {
    const iconSize = (computedWidth - strokeWidth) / 2 / 3;
    if (iconSize < 24) {
      return 24;
    }
    return iconSize;
  }

  const handleIndicator = () => {
    const iconSize = computedSize();
    let indicatorColor = '#333';
    if (status === 'exception') {
      indicatorColor = exceptionColor;
    }
    if (percent >= 100) {
      indicatorColor = successColor;
    }
    if (format) {
      return <div style={{ color: indicatorColor, fontSize: iconSize }}>{format(percent)}</div>
    }
    if (status === 'exception') {
      return <CloseOutline style={{ color: indicatorColor, fontSize: iconSize }} />
    }
    if (percent >= 100) {
      return <CheckOutline style={{ color: indicatorColor, fontSize: iconSize }} />
    }
    return <div style={{ color: indicatorColor, fontSize: iconSize }}>{percent}%</div>
  }

  const handleDraw = () => {
    const width = computedWidth!;
    const height = computedHeight!;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = (Math.min(width, height) - strokeWidth) / 2;

    console.log(centerX, centerY, radius);

    const sweepAngle = (percent ? percent / 100 : 0) * 2 * Math.PI;

    const startAngle = -Math.PI / 2;  // \u4ECE\u9876\u90E8\u5F00\u59CB


    const ctx = canvasRef.current.getContext('2d');
    ctx.width = width;
    ctx.height = height;

    ctx.clearRect(0, 0, computedWidth, computedHeight);

    //region \u753B\u80CC\u666F\u5708
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = railColor;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    //endregion

    //region \u753B\u8FDB\u5EA6\u5708
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sweepAngle);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = strokeLineCap;
    ctx.stroke();
    //endregion


  }

  useEffect(() => {
    console.log(canvasRef.current);
    if (canvasRef.current) {
      handleDraw();
    }
  }, [percent, canvasRef.current])


  return <div className={classNames(\`\${clsPrefix}\`)} style={style}>
    <canvas ref={canvasRef} width={computedWidth} height={computedHeight} />
    {(showInfo && computedWidth > 20) && <div className={\`\${clsPrefix}-indicator\`}>{handleIndicator()}</div>}
  </div>
});
`},39843:function(n,e){e.Z=`import React from "react";
import { SizeType } from "@trionesdev/antd-mobile-base-react";
import {FC} from "react";
import classNames from "classnames";
import {exceptionColor, PercentPositionAlign, ProgressStatus, successColor} from "./types";
import {CloseCircleFill,CheckCircleFill} from "@trionesdev/antd-mobile-icons-react";

type ProgressLineProps = {
  format?: (percent: number) => string;
  percent?: number;
  size?: SizeType | number;
  showInfo?: boolean;
  railColor?: string;
  strokeColor?: string;
  status?: ProgressStatus;
  percentPositionAlign?: PercentPositionAlign;
}
export const ProgressLine: FC<ProgressLineProps> = ({
                                                      format,
                                                      percent = 0,
                                                      size = 'middle',
                                                      showInfo = true,
                                                      railColor = '#E5E5E5',
                                                      strokeColor = '#1777FF',
                                                      status,
                                                      percentPositionAlign = 'end'
                                                    }) => {
  const clsPrefix = 'triones-antm-progress-line';

  const handleComputeLineHeight = () => {
    switch (size) {
      case 'small':
        return 6;
      case 'middle':
        return 8;
      case 'large':
        return 12;
      default:
        return size || 8;
    }
  }

  const handleComputeInfoHeight = () => {
    const lineHeight = handleComputeLineHeight();
    if (lineHeight <= 8) {
      return 12;
    } else if (lineHeight <= 12) {
      return 14
    } else {
      return 16;
    }
  }

  const handleIndicator = () => {
    if (format) {
      return <div>{format(percent)}</div>
    }
    if (status === 'exception') {
      return <CloseCircleFill style={{color: exceptionColor, fontSize: handleComputeInfoHeight()}}/>
    }
    if (percent >= 100) {
      return <CheckCircleFill style={{color: successColor, fontSize: handleComputeInfoHeight()}}/>
    }
    return <div style={{fontSize: handleComputeInfoHeight()}}>{percent}%</div>
  }

  const info = <div className={classNames(\`\${clsPrefix}-indicator\`)}>
    {handleIndicator()}
  </div>

  return <div className={classNames(clsPrefix)}>
    {showInfo && percentPositionAlign === 'start' && info}
    <div className={classNames(\`\${clsPrefix}-rail\`)} style={{backgroundColor: railColor}}>
      <div className={classNames(\`\${clsPrefix}-track\`)} style={{
        width: \`\${percent}%\`,
        backgroundColor: strokeColor,
        height: handleComputeLineHeight(),
      }}/>
    </div>
    {showInfo && percentPositionAlign === 'end' && info}
  </div>
}
`},4106:function(n,e){e.Z=`import {
  Radio,
  RadioGroupProps,
  RadioProps,
} from '@trionesdev/antd-mobile-base-react';

export type { RadioGroupProps, RadioProps };
export default Radio;
`},60643:function(n,e){e.Z=`import { Rate,RateProps } from "@trionesdev/antd-mobile-base-react"

export type { RateProps };
export default Rate;
`},74081:function(n,e){e.Z=`import { Result, ResultProps } from '@trionesdev/antd-mobile-base-react';

export type { ResultProps };

export default Result;
`},40635:function(n,e){e.Z=`import { SafeArea, SafeAreaProps } from '@trionesdev/antd-mobile-base-react';

export type { SafeAreaProps };
export default SafeArea;
`},96646:function(n,e){e.Z=`import { Scaffold, ScaffoldProps } from '@trionesdev/antd-mobile-base-react';

export type { ScaffoldProps };
export default Scaffold;
`},86579:function(n,e){e.Z=`import {
  ScrollView,
  ScrollViewProps,
} from '@trionesdev/antd-mobile-base-react';

export type { ScrollViewProps };
export default ScrollView;
`},43910:function(n,e){e.Z=`import { createContext } from 'react';
import { ScrollDetail } from './types';

type SideBarContextType = {
  activeKey?: string;
  setActiveKey?: (key: string) => void;
  mode?: 'switch' | 'scroll';
  scrollDetail?:ScrollDetail,
  setScrollDetail?: (detail: ScrollDetail) => void;
  activeChangeCallback?: (targetScrollTop: number) => void;
  onMoveToTab?: (activeKey: string) => void;
  asyncRender?: boolean;

  contentRef?: any;
  contentWheelRef?: any;

  manual?:boolean
  setManul?:(manual:boolean)=>void

};
export const SideBarContext = createContext<SideBarContextType>({});
`},27803:function(n,e){e.Z=`import { SideBar, SideBarProps } from './side-bar';

export type { SideBarProps };
export default SideBar;
`},75464:function(n,e){e.Z=`import classNames from 'classnames';
import React, {
  FC,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ScrollView from '../ScrollView';
import { SideBarContext } from './SideBarContext';
import './style.scss';

const sideBarCls = 'triones-antm-sidebar';

type sideBarMode = 'switch' | 'scroll';

type ScrollDetail = {
  /**
   * \u662F\u5426\u662F\u4EBA\u4E3A\u6EDA\u52A8
   */
  manual?: boolean;
  top?: number;
};

type SideBarTabProps = {
  tabKey: string;
  title?: string;
};
const SideBarTab: FC<SideBarTabProps> = ({
  tabKey,
  title,
}) => {
  const { activeKey, setActiveKey } = useContext(SideBarContext);
  const tabRef = useRef<any>();

  return (
    <div
      ref={tabRef}
      className={classNames(\`\${sideBarCls}-tab\`, {
        [\`\${sideBarCls}-tab-active\`]: activeKey === tabKey,
      })}
      onClick={() => {
        setActiveKey?.(tabKey);
      }}
    >
      {title}
    </div>
  );
};

type SideBarContentProps = {
  tabKey: string;
  content?: React.ReactNode;
};

const SideBarContent: FC<SideBarContentProps> = memo(({ tabKey, content }) => {
  const [rendered, setRendered] = useState(false);
  const contentItemRef = useRef<any>();
  const frameRef = useRef<any>();
  const {
    activeKey,
    mode,
    activeChangeCallback,
    onMoveToTab,
    scrollDetail,
    asyncRender,
    contentRef,
    contentWheelRef,
    manual,
  } = useContext(SideBarContext);

  const computeContentOffsetTop = async (): Promise<number> => {
    return contentItemRef.current.offsetTop;
  };

  /**
   * \u8BA1\u7B97\u5F53\u524D\u9875\u9876\u90E8\uFF0C\u8DDD\u79BB\u53EF\u6EDA\u52A8\u533A\u57DF\u9876\u90E8\u7684\u8DDD\u79BB
   */
  const computeReactiveOffsetTop = async () => {
    return contentItemRef.current.offsetTop - Math.abs(scrollDetail!.top!);
  };

  /**
   * \u8BA1\u7B97\u5F53\u524D\u9875\u5E95\u90E8\uFF0C\u8DDD\u79BB\u53EF\u6EDA\u52A8\u533A\u57DF\u9876\u90E8\u7684\u8DDD\u79BB
   */
  const computeReactiveOffsetBottom = async () => {
    return (
      contentItemRef.current.offsetTop +
      contentItemRef.current.offsetHeight -
      Math.abs(scrollDetail!.top!)
    );
  };

  useEffect(() => {
    if (activeKey === tabKey) {
      setRendered(true);
      if (mode === 'scroll' && !manual) {
        Promise.all([]).then(async () => {
          activeChangeCallback?.(await computeContentOffsetTop());
        });
      }
    }
  }, [activeKey]);

  /**
   * \u76D1\u542C\u6EDA\u52A8\u53D8\u5316\uFF0C\u53EA\u6709\u5728\u4EBA\u4E3A\u64CD\u4F5C\u7684\u65F6\u5019\u624D\u76D1\u542C\u6EDA\u52A8\u7684\u4F4D\u7F6E\u662F\u5426\u9700\u8981\u5207\u6362tab\uFF0C\u5982\u679C\u662F\u5207\u6362tab \u5F15\u53D1\u7684\u6EDA\u52A8\u5219\u4E0D\u6267\u884C
   */
  useEffect(() => {
    // return;
    if (mode === 'scroll' && manual) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(async () => {
        if (activeKey !== tabKey) {
          const reactiveOffsetTop = await computeReactiveOffsetTop(); //\u5F53\u524D\u9876\u90E8\u76F8\u5BF9\u4E8E\u7236\u5BB9\u5668\u9876\u90E8\u7684\u504F\u79FB\u91CF
          const reactiveOffsetBottom = await computeReactiveOffsetBottom();
          if (
            (-50 <= reactiveOffsetTop && reactiveOffsetTop <= 0) ||
            (0 <= reactiveOffsetBottom && reactiveOffsetBottom <= 50)
          ) {
            onMoveToTab?.(tabKey);
          }
        }
      });
    }
  }, [scrollDetail]);

  return (
    <div
      ref={contentItemRef}
      id={contentItemRef.current?.uid}
      className={classNames(\`\${sideBarCls}-content-item\`, {
        [\`\${sideBarCls}-content-item-active\`]: activeKey === tabKey,
      })}
    >
      {asyncRender ? rendered && content : content}
    </div>
  );
});

type SideBarContentsProps = {
  items: any[];
};

const SideBarContents: FC<SideBarContentsProps> = memo(({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <SideBarContent
          key={\`\${item.tabKey}-content\`}
          tabKey={item.tabKey}
          content={item.content}
          // activeChangeCallback={handleSelectScroll}
        />
      ))}
    </>
  );
});

export type SideBarItemProps = {
  key: string;
  title?: string;
  content?: React.ReactNode;
};
export type SideBarProps = {
  activeKey?: string;
  defaultActiveKey?: string;
  items?: SideBarItemProps[];
  /**
   * \u4EA4\u4E92\u6A21\u5F0F \`switch\` \u9875\u9762\u5207\u6362\uFF0C\`scroll\` \u6EDA\u52A8\u5C55\u793A
   */
  mode?: sideBarMode;
  /**
   * @description \u662F\u5426\u5F02\u6B65\u6E32\u67D3\u5185\u5BB9
   * @default false
   */
  asyncRender?: boolean;
  tabWidth?: number;
};
export const SideBar: FC<SideBarProps> = ({
  activeKey,
  defaultActiveKey,
  items = [],
  mode = 'switch',
  asyncRender = false,
  tabWidth = 100,
}) => {
  const contentRef = useRef<any>();
  const contentWheelRef = useRef<any>();
  const frameRef = useRef<any>();
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);


  const [manual, setManual] = useState(false);

  const [scrollDetail, setScrollDetail] = useState<ScrollDetail>({ top: 0 });

  const scrollTop = useMemo(() => {
    if (!scrollDetail.manual) {
      return scrollDetail.top;
    }
    return 0;
  }, [scrollDetail?.top]);

  const handleSelectScroll = (scrollTop: number) => {
    if (mode === 'scroll' && !manual) {
      setScrollDetail({ manual: manual, top: scrollTop });
    }
  };

  const handleActiveChange = (tabKey: string) => {
    setInternalActiveKey(tabKey);
  };

  useEffect(() => {
    setInternalItems(
      items?.map((item) => {
        return {
          tabKey: item.key,
          title: item.title,
          content: item.content,
        };
      }),
    );
    if (!internalActiveKey) {
      setInternalActiveKey(items?.[0]?.key);
    }
  }, [items]);

  useEffect(() => {
    if (undefined !== activeKey) {
      setInternalActiveKey(activeKey);
    }
  }, [activeKey]);

  useEffect(() => {
    if (mode === 'scroll') {
      // setContentEl(taroExtend.$(contentRef.current));
      // setContentWheelEl(taroExtend.$(contentWheelRef.current));
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        activeKey: internalActiveKey,
        setActiveKey: setInternalActiveKey,
        mode: mode,
        scrollDetail: scrollDetail,
        setScrollDetail: setScrollDetail,
        contentWheelRef: contentWheelRef,
        contentRef: contentRef,
        activeChangeCallback: handleSelectScroll,
        asyncRender: asyncRender,
        onMoveToTab: handleActiveChange,
        manual: manual,
        setManul: setManual,
      }}
    >
      <div
        className={classNames(\`\${sideBarCls}\`, \`\${sideBarCls}-\${mode}-mode\`)}
      >
        <div
          className={classNames(\`\${sideBarCls}-tabs\`)}
          style={{ width: tabWidth }}
        >
          {internalItems.map((item, index) => (
            <SideBarTab
              key={\`\${item.tabKey}-tab\`}
              {...item}
              tabKey={item.tabKey}
              activeKey={internalActiveKey}
              onActiveChange={handleActiveChange}
            />
          ))}
        </div>
        <div
          ref={contentRef}
          id={contentRef.current?.uid}
          className={classNames(\`\${sideBarCls}-content\`)}
          onTouchStart={(e) => {
            setManual(true);
          }}
          onTouchEnd={(e) => {
            setManual(false);
          }}
          onMouseEnter={(e) => {
            setManual(true);
          }}
          onMouseLeave={(e) => {
            setManual(false);
          }}
          onMouseOut={(e) => {
            setManual(false);
          }}
          onMouseOver={(e) => {
            setManual(true);
          }}
          onMouseMove={(e) => {
            setManual(true);
          }}
        >
          {mode === 'scroll' && (
            <ScrollView
              style={{ height: '100%' }}
              scrollY={true}
              scrollTop={scrollTop}
              onScroll={(e) => {
                //\u5982\u679C\u662F\u811A\u672C\u89E6\u53D1\u7684\u6EDA\u52A8\uFF0C\u5219\u4E0D\u5904\u7406,\u907F\u514D\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u89E6\u53D1\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u6EDA\u52A8\u505C\u6B62
                if (manual) {
                  setScrollDetail({
                    manual: manual,
                    top: e.detail.scrollTop!,
                  });
                }
              }}
            >
              <div ref={contentWheelRef}>
                <SideBarContents items={internalItems} />
              </div>
            </ScrollView>
          )}
          {mode === 'switch' && (
            <SideBarContents items={internalItems} />
          )}
        </div>
      </div>
    </SideBarContext.Provider>
  );
};
`},95573:function(n,e){e.Z=`import { Space,SpaceProps } from '@trionesdev/antd-mobile-base-react'

export type { SpaceProps }
export default Space
`},44931:function(n,e){e.Z=`import {SpinLoading,SpinLoadingProps} from "@trionesdev/antd-mobile-base-react"

export type {SpinLoadingProps}
export default SpinLoading
`},25992:function(n,e){e.Z=`import {Steps} from "@trionesdev/antd-mobile-base-react"

export type {StepsProps, StepsItemProps} from "@trionesdev/antd-mobile-base-react"
export default Steps;
`},6093:function(n,e){e.Z=`import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';
import {SwiperCore, SwiperCoreProps} from './SwiperCore';

const cls = 'triones-antm-swiper';

export type SwiperProps = SwiperCoreProps & {
  /**
   * @description \u662F\u5426\u663E\u793A\u6307\u793A\u5668
   * @default true
   */
  indicator?: boolean;
};
export const Swiper: FC<PropsWithChildren<SwiperProps>> = ({ ...props }) => {
  const style = { ...props.style };
  if (props.height) {
    style.height = props.height;
  }

  return (
    <div className={classNames(cls, props.className)} style={style}>
      <SwiperCore {...props} />
    </div>
  );
};
`},44526:function(n,e){e.Z=`import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

import './style.scss';
import classNames from 'classnames';

const cls = 'triones-antm-swiper';

export type SwiperItemType = {
  children: React.ReactNode;
};

export type SwiperCoreProps = {
  className?: string;
  style?: React.CSSProperties;
  direction?: 'horizontal' | 'vertical';
  /**
   * @description \u9AD8\u5EA6
   */
  height?: number;
  items?: SwiperItemType[];
  activeIndex?: number;
  autoplay?: boolean;
  onChange?: (value: number) => void;
};

export type SwiperCoreItemProps = {
  style?: React.CSSProperties;
};

export const SwiperCoreItem: FC<PropsWithChildren<SwiperCoreItemProps>> = ({
  children,
  style,
}) => {
  return (
    <div className={classNames(\`\${cls}-core-item\`)} style={style}>
      {children}
    </div>
  );
};

export const SwiperCore: FC<PropsWithChildren<SwiperCoreProps>> = ({
  children,
  direction = 'horizontal',
  height,
  items,
  activeIndex,
  onChange,
}) => {
  const [innerActiveIndex, setInnerActiveIndex] = useState<number>(
    activeIndex || 0,
  );
  const boxRef = React.createRef<any>();
  const boxUniqueRef = React.useRef<string>('swiper-box');
  const wrapperRef = React.createRef<HTMLDivElement>();
  const [itemWidth, setItemWidth] = useState<number>();
  const [wrapperWidth, setWrapperWidth] = useState<number>();
  const [itemHeight, setItemHeight] = useState<number | undefined>(height);
  const [wrapperHeight, setWrapperHeight] = useState<number>();
  const [count, setCount] = useState<number>(0);

  const [touching, setTouching] = useState<boolean>(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const max = 0;
  const minTranslateX = useRef<number>();
  const minTranslateY = useRef<number>();

  const computeItemWidth = async (): Promise<number | undefined> => {
    return Promise.resolve(boxRef.current?.clientWidth);
  };

  const computeItemHeight = async (): Promise<number | undefined> => {
    return Promise.resolve(boxRef.current?.clientHeight);
  };

  useEffect(() => {
    if (items?.length) {
      setCount(items.length);
    } else {
      setCount(React.Children.count(children));
    }
    if (itemWidth) {
      if (items && items?.length > 0) {
        setWrapperWidth(itemWidth * items.length);
        minTranslateX.current = -(itemWidth * (items.length - 1));
      } else {
        if (children && React.Children.count(children) > 0) {
          setWrapperWidth(itemWidth * React.Children.count(children));
          minTranslateX.current = -(
            itemWidth *
            (React.Children.count(children) - 1)
          );
        }
      }
    }
    if (itemHeight) {
      if (items && items?.length > 0) {
        setWrapperHeight(itemHeight * items.length);
        minTranslateY.current = -(itemHeight * (items.length - 1));
      } else {
        if (children && React.Children.count(children) > 0) {
          setWrapperHeight(itemHeight * React.Children.count(children));
          minTranslateY.current = -(
            itemHeight *
            (React.Children.count(children) - 1)
          );
        }
      }
    }
  }, [children, items, itemWidth, itemHeight]);

  useEffect(() => {
    if (activeIndex === undefined) {
      return;
    }
    if (activeIndex === innerActiveIndex) {
      return;
    }
    setInnerActiveIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (direction === 'vertical') {
      if (itemHeight) {
        setTranslateY(-(innerActiveIndex * itemHeight!));
      }
    } else {
      if (itemWidth) {
        setTranslateX(-(innerActiveIndex * itemWidth!));
      }
    }
  }, [innerActiveIndex, itemWidth, itemHeight]);

  useEffect(() => {
    if (boxRef.current) {
      computeItemHeight().then((height) => {
        setItemHeight(height);
      });
      computeItemWidth().then((width) => {
        setItemWidth(width);
      });
    }
  }, []);

  const handlerRender = () => {
    if (items?.length) {
      return (
        <>
          {items.map((item, index) => {
            return (
              <SwiperCoreItem
                key={index}
                style={{ width: itemWidth, height: itemHeight }}
              >
                {item?.children}
              </SwiperCoreItem>
            );
          })}
        </>
      );
    } else {
      if (children && Array.isArray(children)) {
        return children.map((item, index) => {
          return React.cloneElement(item, {
            style: { ...item.style, width: itemWidth, height: itemHeight },
          });
        });
      }
    }
    return null;
  };

  return (
    <div className={classNames(\`\${cls}-core\`)}>
      <div
        ref={boxRef}
        id={boxRef.current?.uid}
        className={classNames(\`\${cls}-core-box\`, \`\${boxUniqueRef.current}\`)}
      >
        <div
          ref={wrapperRef}
          className={classNames(
            \`\${cls}-core-wrapper\`,
            \`\${cls}-core-wrapper-\${direction}\`,
          )}
          style={{
            width: direction === 'horizontal' ? wrapperWidth : undefined,
            height: direction === 'vertical' ? wrapperHeight : undefined,
            transform: \`translate3d(\${translateX}Px, \${translateY}Px, 0)\`,
          }}
          onTouchStart={(event) => {
            setTouching(true);
            const startPoint = {
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
            };
            setTouchPoint(startPoint);
          }}
          onTouchMove={(event) => {
            if (touching) {
              const movePoint = {
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
              };

              if (direction === 'vertical') {
                setTranslateY(
                  translateY + (movePoint.clientY - touchPoint.clientY),
                );
              } else {
                setTranslateX(
                  translateX + (movePoint.clientX - touchPoint.clientX),
                );
              }
              setTouchPoint(movePoint);
            }
          }}
          onTouchEnd={(event) => {
            setTouching(false);
            if (direction === 'vertical') {
              if (translateY > max) {
                setTranslateY(0);
                setInnerActiveIndex(0);
                onChange?.(0);
              } else if (translateY < minTranslateY.current!) {
                setTranslateY(minTranslateY.current!);
                setInnerActiveIndex(count - 1);
                onChange?.(count - 1);
              } else {
                const index = Math.round(
                  Math.abs(translateY) / Math.abs(itemHeight!),
                );
                setTranslateY(-(index * itemHeight!));
                setInnerActiveIndex(index);
                onChange?.(index);
              }
            } else {
              if (translateX > max) {
                setTranslateX(0);
                setInnerActiveIndex(0);
                onChange?.(0);
              } else if (translateX < minTranslateX.current!) {
                setTranslateX(minTranslateX.current!);
                setInnerActiveIndex(count - 1);
                onChange?.(count - 1);
              } else {
                const index = Math.round(
                  Math.abs(translateX) / Math.abs(itemWidth!),
                );
                setTranslateX(-(index * itemWidth!));
                setInnerActiveIndex(index);
                onChange?.(index);
              }
            }
          }}
        >
          {handlerRender()}
        </div>
      </div>
    </div>
  );
};
`},58430:function(n,e){e.Z=`import { Switch } from '@trionesdev/antd-mobile-base-react'

export type { SwitchProps } from '@trionesdev/antd-mobile-base-react'

export default Switch
`},79201:function(n,e){e.Z=`import { TabBar, TabBarProps } from '@trionesdev/antd-mobile-base-react';

export type { TabBarProps };
export default TabBar;
`},64949:function(n,e){e.Z=`import { Tabs, TabsProps } from '@trionesdev/antd-mobile-base-react';

export type { TabsProps };
export default Tabs;
`},65518:function(n,e){e.Z=`import {Tag, TagProps} from "@trionesdev/antd-mobile-base-react"

export type {
  TagProps
}
export default Tag
`},19080:function(n,e){e.Z=`import {Toast as ToastInst,InternalToast , ToastProps} from "./toast"

type InternalToastType = typeof InternalToast;

type CompoundedComponent = InternalToastType & {
  show: typeof ToastInst.show
}

const Toast = InternalToast as CompoundedComponent
Toast.show = ToastInst.show
export type {ToastProps};
export default Toast
`},85605:function(n,e){e.Z=`import {FC, memo, useEffect, useMemo, useRef, useState} from "react";
import classNames from "classnames";
import React from "react";

import "./style.scss"
import Mask from "../Mask";
import {CheckOutline, CloseOutline} from "../../../antd-mobile-icons-react";
import {SpinLoading} from "../index";

const toastCls = "triones-antm-toast";

export type ToastModalProps = {
  open?: boolean,
  maskClosable?: boolean
  content?: React.ReactNode
  duration?: number
  durationAble?: boolean
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode
  maskClassName?: string
  position?: 'top' | 'bottom' | 'center'
  destroyOnClose?: boolean
  afterClose?: () => void
  afterOpenChange?: (open: boolean) => void
  onDestroy?: () => void;
}
export const ToastModal: FC<ToastModalProps> = memo(({
                                                       open,
                                                       maskClosable = true,
                                                       content,
                                                       duration = 2000,
                                                       durationAble = true,
                                                       icon,
                                                       maskClassName,
                                                       position = 'center',
                                                       destroyOnClose,
                                                       afterClose,
                                                       afterOpenChange,
                                                       onDestroy
                                                     }) => {
  const [internalOpen, setInternalOpen] = useState(open || false);
  const time = useRef<any>()
  const handleIcon = () => {
    if (icon === 'success') {
      return <CheckOutline/>
    } else if (icon === 'fail') {
      return <CloseOutline/>
    } else if (icon === 'loading') {
      return <SpinLoading color={\`white\`}/>
    } else {
      return icon
    }
  }

  useEffect(() => {
    if (open === undefined) {
      return
    }
    if (open !== internalOpen) {
      setInternalOpen(open)
    }
  }, [open]);


  useEffect(() => {
    afterOpenChange?.(internalOpen);
    if (!internalOpen) {
      afterClose?.()
      if (destroyOnClose) {
        onDestroy?.()
      }
      clearTimeout(time.current)
    }
    if (durationAble && internalOpen && duration) {
      time.current = setTimeout(() => {
        setInternalOpen(false)
      }, duration)
    }
  }, [internalOpen]);

  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%'
      case 'bottom':
        return '80%'
      default:
        return '50%'
    }
  }, [position])


  return <Mask className={maskClassName} open={internalOpen} onMaskClick={() => {
    if (maskClosable) {
      setInternalOpen(false)
    }
  }}>
    <div className={classNames(toastCls)}>
      <div className={classNames(\`\${toastCls}-main\`, {[\`\${toastCls}-main-icon\`]: icon})}
           style={{top: top}}
           onClick={(e) => {
             e.stopPropagation()
           }}>
        <div className={classNames(\`\${toastCls}-center\`)}>
          {icon && <div className={classNames(\`\${toastCls}-center-icon\`)}>{handleIcon()}</div>}
          {content && <div className={classNames(\`\${toastCls}-center-content\`)}>{content}</div>}
        </div>
      </div>
    </div>
  </Mask>
})
`},67613:function(n,e){e.Z=`import React, {forwardRef, useEffect, useImperativeHandle} from "react";
import {FC} from "react";
import {ToastModal, ToastModalProps} from "./toast-modal";
import {createPortal} from "react-dom";
import {createRoot} from "react-dom/client";

export type ToastProps = Omit<ToastModalProps, 'onDestroy'> & {
  getContainer?: () => HTMLElement,

}

export interface ToastHandle {
  clear(): void;
}

export const InternalToast: FC<ToastProps> = forwardRef<ToastHandle, ToastProps>(({
                                                                                    getContainer,
                                                                                    open = false,
                                                                                    ...rest
                                                                                  }, ref) => {
  const [renderEnable, setRenderEnable] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = getContainer?.() || containerRef.current!;

  useImperativeHandle(ref, () => ({
    clear: () => {
    }
  }))

  const ToastPortal = () => {
    if (!mountRef.current) {
      mountRef.current = document.createElement("div");
      rootContainer.appendChild(mountRef.current);
    }

    const destroy = () => {
      if (rootContainer && mountRef.current) {
        rootContainer.removeChild(mountRef.current);
      }
      mountRef.current = null;
      setRenderEnable(false);
    }
    return <>{createPortal(<ToastModal {...rest} onDestroy={destroy} open={open}/>, containerRef.current!)}</>
  }

  useEffect(() => {
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);

  return <>
    {!getContainer?.() && <div ref={containerRef}></div>}
    {renderEnable && <ToastPortal/>}
  </>;
})

export type ToastShowProps = Omit<ToastModalProps, 'onDestroy' | 'open'> & {
  getContainer: () => HTMLElement,

}

export class Toast {
  private containerEl: HTMLElement | undefined;
  private mountEl: HTMLElement | null = null;
  private timer: any;

  static show(config: ToastShowProps) {
    const toast = new Toast()
    toast.create(config);
    return toast;
  }

  destroy = () => {
    if (this.mountEl) {
      this.mountEl.parentNode?.removeChild(this.mountEl);
    }
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  create = (props: ToastShowProps) => {
    const {getContainer, duration = 2000, ...config}: ToastShowProps = props;
    this.containerEl = getContainer!();
    this.mountEl = document.createElement("div");
    this.containerEl!.appendChild(this.mountEl);
    createRoot(this.mountEl!).render(<ToastModal {...config} onDestroy={this.destroy} open={true}
                                                 durationAble={false}/>)

    if (duration) {
      this.timer = setTimeout(() => {
        this.destroy()
      }, duration)
    }
  }
}
`},19797:function(n,e){e.Z=`import {VerificationCodeInput,VerificationCodeInputProps}  from "@trionesdev/antd-mobile-base-react";

export type {VerificationCodeInputProps};
export default VerificationCodeInput;
`},47913:function(n,e){e.Z=`import { WaterMark,WaterMarkProps } from '@trionesdev/antd-mobile-base-react'

export type { WaterMarkProps }

export default WaterMark
`},82544:function(n,e){e.Z=`
export {default as ActionSheet} from "./ActionSheet"
export type {ActionSheetProps} from './ActionSheet';

export {default as Alert} from './Alert';
export type {AlertProps} from './Alert';

export {default as Avatar} from './Avatar';
export type {AvatarProps} from './Avatar';

export {default as Badge} from './Badge';
export type {BadgeFill, BadgeProps} from './Badge';

export {default as Button} from './Button';
export type {ButtonProps} from './Button';

export {
  default as Calendar,
  CalendarGrid,
  TouchableCalendarGrid,
} from './Calendar';
export type {CalendarGridProps, CalendarProps} from './Calendar';

export {default as CalendarDatetimePicker} from './CalendarDatetimePicker';
export type {CalendarDatetimePickerProps} from './CalendarDatetimePicker';

export {default as CalendarPicker} from './CalendarPicker';
export type {CalendarPickerProps} from './CalendarPicker';

export {default as Card} from './Card';
export type {CardProps} from './Card';

export {default as CascaderPicker} from './CascaderPicker';
export type {CascaderPickerProps} from './CascaderPicker';

export {default as CascaderView} from './CascaderView';
export type {CascaderViewProps} from './CascaderView';

export {default as Cell} from './Cell';
export type {CellProps, CellGroupProps} from './Cell';

export {default as Checkbox} from './Checkbox';
export type {CheckboxProps} from './Checkbox';

export {default as ConfigProvider} from './ConfigProvider';
export type {ConfigProviderProps} from './ConfigProvider';

export {default as Descriptions} from "./Descriptions"
export type {DescriptionsProps} from "./Descriptions"

export {default as Divider} from './Divider';
export type {DividerProps} from './Divider';

export {default as Ellipsis} from './Ellipsis';
export type {EllipsisProps} from './Ellipsis';

export {default as Empty} from './Empty';
export type {EmptyProps} from './Empty';

export {default as ErrorBlock} from './ErrorBlock';
export type {ErrorBlockStatus, ErrorBlockProps} from './ErrorBlock';

export {default as Footer} from './Footer';
export type {FooterProps} from './Footer';

export {default as Form} from './Form';
export type {FormItemProps, FormProps} from './Form';

export {default as Grid} from './Grid';
export type {GridProps, GridItemProps} from './Grid';

export {default as Image} from './Image';
export type {ImageProps} from "./Image"

export {default as ImagesPreview} from './ImagesPreview';
export type {ImagePreviewProps} from './ImagesPreview';

export {default as ImagesWall} from './ImagesWall';
export type {ImagesWallProps, ImagesWallItemProps} from './ImagesWall';

export {default as Input} from './Input';
export type {InputOPTProps, InputPasswordProps, InputProps, InputTextareaProps} from './Input';

export {default as InputNumber} from './InputNumber';
export type {InputNumberProps} from './InputNumber';

export {default as Mask} from "./Mask"
export type {MaskProps} from "./Mask"

export {default as NavBar} from './NavBar';
export type {NavBarProps} from './NavBar';

export {default as NoticeBar} from './NoticeBar';
export type {NoticeBarProps} from './NoticeBar';

export {default as PageIndicator} from './PageIndicator';
export type {PageIndicatorProps} from './PageIndicator';

export {default as Picker} from './Picker';
export type {PickerProps} from './Picker';

export {default as PickerView} from './PickerView';
export type {PickerViewProps, PickerColumnOption} from './PickerView';

export {default as Popup} from './Popup';
export type {PopupProps} from './Popup';

export {default as Progress} from './Progress';
export type {ProgressProps} from './Progress';

export {default as Radio} from './Radio';
export type {RadioGroupProps, RadioProps} from './Radio';

export {default as Rate} from './Rate';
export type {RateProps} from './Rate';

export {default as Result} from './Result';
export type {ResultProps} from './Result';

export {default as SafeArea} from './SafeArea';
export type {SafeAreaProps} from './SafeArea';

export {default as Scaffold} from './Scaffold';
export type {ScaffoldProps} from './Scaffold';

export {default as ScrollView} from './ScrollView';
export type {ScrollViewProps} from './ScrollView';

export {default as SideBar} from './SideBar';
export type {SideBarProps} from './SideBar';

export {default as Space} from './Space';
export type {SpaceProps} from './Space';

export {default as SpinLoading} from './SpinLoading';
export type {SpinLoadingProps} from './SpinLoading';

export {default as Swiper} from "./Swiper"
export type {SwiperProps} from './Swiper';

export {default as Steps} from "./Steps";
export type {StepsProps, StepsItemProps} from './Steps';

export {default as Switch} from './Switch';
export type {SwitchProps} from './Switch';

export {default as TabBar} from './TabBar';
export type {TabBarProps} from './TabBar';

export {default as Tag} from './Tag';
export type {TagProps} from './Tag';

export {default as Toast} from './Toast';
export type {ToastProps} from './Toast';





export {default as Tabs} from './Tabs';
export type {TabsProps} from './Tabs';

export {default as VerificationCodeInput} from './VerificationCodeInput';
export type {VerificationCodeInputProps} from './VerificationCodeInput';

export {default as WaterMark} from './WaterMark';
export type {WaterMarkProps} from './WaterMark';
`},4430:function(n,e){e.Z=`export class DatetimeUtils {
  static twoDigits(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
`},51468:function(n,e){e.Z=`import React, { AriaAttributes } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & AriaAttributes

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props,
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key]
    }
  }
  return React.cloneElement(element, p)
}

export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key]
    }
  }
  return ret
}


export function toCSSLength(val: string | number) {
  return typeof val === 'number' ? \`\${val}px\` : val
}
`},69248:function(n,e){e.Z="export function toCSSLength(val: string | number) {\n  return typeof val === 'number' ? `${val}px` : val;\n}\n"},89755:function(n,e){e.Z=`import { createUpdateEffect, useIsomorphicLayoutEffect } from 'ahooks';

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect,
);
`},6494:function(n,e){e.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
export function mergeProps<A, B, C, D>(a: A, b: B, c: C, d: D): D & C & B & A;
export function mergeProps(...items: any[]) {
  const ret: any = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== undefined) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}

/**
 * Merge props and return the first non-undefined value.
 * The later has higher priority. e.g. (10, 1, 5) => 5 wins.
 * This is useful with legacy props that have been deprecated.
 */
export function mergeProp<T, DefaultT extends T = T>(
  defaultProp: DefaultT,
  ...propList: T[]
): T | undefined {
  for (let i = propList.length - 1; i >= 0; i -= 1) {
    if (propList[i] !== undefined) {
      return propList[i];
    }
  }
  return defaultProp;
}
`}}]);

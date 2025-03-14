"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2327],{2715:function(e,n){n.Z=`import classNames from 'classnames';
import React from 'react';
import './style.scss';

type AvatarProps = {
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  size?: number;
  src?: string | React.ReactNode;
  srcSet?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  icon,
  shape = 'circle',
  size = 40,
  src,
  srcSet,
  style,
  children,
}) => {
  const clsPrefix = 'triones-antm-avatar';
  return (
    <div
      className={classNames(clsPrefix, {
        [\`\${clsPrefix}-\${shape !== 'square' ? 'circle' : 'square'}\`]: true,
      })}
      style={{
        width: size,
        height: size,
        backgroundColor: src ? undefined : '#ccc',
        ...style,
      }}
    >
      {src ? (
        typeof src === 'string' ? (
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          src
        )
      ) : icon ? (
        icon
      ) : (
        children
      )}
    </div>
  );
};

export default Avatar;
`},41491:function(e,n){n.Z=`import { Avatar } from "./avatar"

export default Avatar `},46720:function(e,n){n.Z=`import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '../utils/type'
import { useRtl } from '../ConfigProvider/config-provider'

import './style.scss'

export type BadgeFill = 'solid' | 'outline'
export interface BadgeProps extends BasicComponent {
  value: ReactNode
  dot: boolean
  max: number
  top: string | number
  right: string | number
  color: string
  fill: BadgeFill
}
const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: '4',
  right: '8',
  color: '',
  fill: 'solid',
} as BadgeProps
export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const rtl = useRtl()
  const {
    className,
    style,
    value,
    max,
    children,
    dot,
    top,
    right,
    color,
    fill,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'triones-antm-badge'
  const classes = classNames(classPrefix, className, {
    [\`\${classPrefix}-\${fill}\`]: fill === 'outline',
  })

  function content() {
    if (dot || typeof value === 'object' || value === 0) return null
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? \`\${max}+\` : \`\${value}\`
    }
    return value
  }

  function isIcon() {
    if (typeof value === 'object' && value) return value
  }

  function isNumber() {
    if (typeof value === 'number' && value) return value
  }

  function isString() {
    if (typeof value === 'string' && value) return value
  }

  const contentClasses = classNames(
    { [\`\${classPrefix}-dot\`]: dot },
    \`\${classPrefix}-content\`,
    { [\`\${classPrefix}-sup\`]: isNumber() || isString() || dot },
    {
      [\`\${classPrefix}-one\`]:
        typeof content() === 'string' && \`\${content()}\`?.length === 1,
    }
  )
  const getStyle = () => {
    const style: CSSProperties = {}
    style.top = \`\${Number(top) || parseFloat(String(top)) || 0}px\`
    const dir = rtl ? 'left' : 'right'
    style[dir] = \`\${Number(right) || parseFloat(String(right)) || 0}px\`

    if (color) {
      if (fill === 'outline') {
        style.color = color
        style.background = '#fff'
        if (!color?.includes('gradient')) {
          style.border = \`1px solid \${color}\`
        }
      } else {
        style.color = '#fff'
        style.background = color
      }
    }
    return style
  }
  return (
    <div className={classes} style={style}>
      {isIcon() && <div className={\`\${classPrefix}-icon\`}>{value}</div>}
      {children}
      {!isIcon() && (
        <div className={contentClasses} style={getStyle()}>
          {content()}
        </div>
      )}
    </div>
  )
}
`},64382:function(e,n){n.Z=`import { Badge } from './badge'
export type { BadgeFill, BadgeProps } from './badge'

export default Badge
`},45338:function(e,n){n.Z=`import classNames from 'classnames';
import type { CSSProperties, FC, ReactNode } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from './native-props';

const classPrefix = \`triones-antm-card\`;

export type CardProps = {
  title?: ReactNode;
  icon?: ReactNode;
  extra?: ReactNode;
  headerStyle?: CSSProperties;
  headerClassName?: string;
  bodyStyle?: CSSProperties;
  bodyClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
} & NativeProps;

export const Card: FC<CardProps> = (props) => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null;
    }
    return (
      <div
        className={classNames(\`\${classPrefix}-header\`, props.headerClassName)}
        style={props.headerStyle}
        onClick={props.onHeaderClick}
      >
        {props.icon && (
          <div className={\`\${classPrefix}-header-icon\`}>{props.icon}</div>
        )}
        <div className={\`\${classPrefix}-header-title\`}>{props.title}</div>
        {props.extra && (
          <div className={\`\${classPrefix}-header-extra\`}>{props.extra}</div>
        )}
      </div>
    );
  };

  const renderBody = () => {
    if (!props.children) {
      return null;
    }
    return (
      <div
        className={classNames(\`\${classPrefix}-body\`, props.bodyClassName)}
        style={props.bodyStyle}
        onClick={props.onBodyClick}
      >
        {props.children}
      </div>
    );
  };

  return withNativeProps(
    props,
    <div className={classPrefix} onClick={props.onClick}>
      {renderHeader()}
      {renderBody()}
    </div>,
  );
};
`},55831:function(e,n){n.Z=`import { Card } from './card';
import './style.scss';
export type { CardProps } from './card';

export default Card;
`},54047:function(e,n){n.Z=`import classNames from 'classnames';
import type { CSSProperties, ReactElement } from 'react';
import React, { AriaAttributes } from 'react';

export type NativeProps<S extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
  tabIndex?: number;
} & AriaAttributes;

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement,
) {
  const p = {
    ...element.props,
  };
  if (props.className) {
    p.className = classNames(element.props.className, props.className);
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }
  return React.cloneElement(element, p);
}
`},31255:function(e,n){n.Z=`import {CascaderPicker,CascaderPickerProps} from "./cascader-picker"

export type {
  CascaderPickerProps
}
export default CascaderPicker
`},46191:function(e,n){n.Z=`import "./index.scss"
import classNames from "classnames";
import React, {FC, useState} from "react";
import {CheckOutline} from "@trionesdev/antd-taro-icons-react";

type CheckboxProps = {
  children?: React.ReactNode;
  checked?: boolean;
  shape?: 'button' | 'round'
  disabled?: boolean
}
export const Checkbox: FC<CheckboxProps> = ({children, checked, shape = 'round', disabled}) => {
  const [innerChecked, setInnerChecked] = useState(checked)
  const cls = 'triones-antm-checkbox-item';
  return <label className={classNames(cls)}>
    <div className={classNames(\`\${cls}-container\`)} style={{pointerEvents: disabled ? 'none' : 'auto'}}>
      {shape === 'round' && <>
        <div className={classNames(\`\${cls}-wrap\`)}>
          <span className={classNames(\`\${cls}-base\`)}>
            <input className={classNames(\`\${cls}-input\`)} type={"checkbox"}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     setInnerChecked(e.target.checked)
                   }}/>
          </span>

          <div className={classNames(\`\${cls}-fake\`)}>
            <CheckOutline className={classNames(\`\${cls}-fake-icon\`, {
              'checkedIcon': !disabled && innerChecked,
              'uncheckedIcon': !disabled && !innerChecked,
              'disabledCheckedIcon': disabled && innerChecked,
              'disabledUncheckedIcon': disabled && !innerChecked,
            })}/>
          </div>
        </div>
        <div className={classNames(\`\${cls}-content\`, {[\`\${cls}-content-disabled\`]: disabled})}>{children}</div>
      </>}
      {shape === 'button' && <div className={classNames(\`\${cls}-button\`, {
        [\`\${cls}-button-disabled\`]: disabled,
        [\`\${cls}-button-checked\`]: innerChecked
      })} onClick={() => {
        setInnerChecked(!innerChecked)
      }}>
        <div className={classNames(\`\${cls}-button-content\`)}>{children}</div>
        {innerChecked && <div className={classNames(\`\${cls}-button-icon\`)}>
          <CheckOutline className={classNames(\`checkedIcon\`)}/>
        </div>}
      </div>}
    </div>
  </label>
}
`},5586:function(e,n){n.Z=`import {Checkbox} from "./checkbox"

export default Checkbox
`},56473:function(e,n){n.Z=`import React, { FC } from 'react'
import classNames from 'classnames'
import type { CSSProperties, ReactNode } from 'react'
import './style.scss'

interface BasicComponent {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  id?: string
}

export type DividerContentPosition = 'left' | 'center' | 'right'
export type DividerDirection = 'horizontal' | 'vertical'

export interface DividerProps extends BasicComponent {
  contentPosition: DividerContentPosition
  direction?: DividerDirection
}

const ComponentDefaults = {
  className: '',
  style: {},
}

const defaultProps = {
  ...ComponentDefaults,
  contentPosition: 'center',
  direction: 'horizontal',
} as DividerProps

const classPrefix = \`triones-antm-divider\`

export const Divider: FC<Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, contentPosition, style, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const classes =
    direction === 'horizontal'
      ? classNames({
        [\`\${classPrefix}\`]: true,
        [\`\${classPrefix}-center\`]: children,
        [\`\${classPrefix}-left\`]: contentPosition === 'left',
        [\`\${classPrefix}-right\`]: contentPosition === 'right',
        [\`\${classPrefix}-hairline\`]: true,
      })
      : classNames({
        [\`\${classPrefix}\`]: true,
        [\`\${classPrefix}-vertical\`]: direction === 'vertical',
      })
  return (
    <div className={\`\${classes} \${className || ''}\`} style={style} {...rest}>
      {children}
    </div>
  )
}
`},52119:function(e,n){n.Z=`import { Divider } from './divider'

export default Divider
`},22202:function(e,n){n.Z=`
import type { FC, ReactNode } from 'react'
import React from 'react'
import useMeasure from './useMeasure'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { useResizeEffect } from '../utils/use-resize-effect'
import { PropagationEvent, withStopPropagation } from '../utils/with-stop-propagation'

import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-ellipsis\`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: ReactNode
  collapseText?: ReactNode
  stopPropagationForActionButtons?: PropagationEvent[]
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  defaultExpanded?: boolean
} & NativeProps

const defaultProps = {
  direction: 'end' as const,
  rows: 1,
  expandText: '',
  content: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
  onContentClick: () => { },
  defaultExpanded: false,
}

export const Ellipsis: FC<EllipsisProps> = p => {
  const props = mergeProps(defaultProps, p) as EllipsisProps

  const {
    content,
    direction = 'end',
    rows = 1,
    expandText,
    collapseText,
    stopPropagationForActionButtons = [],
    onContentClick = () => { },
    defaultExpanded = false,
  } = props

  // ============================ Refs ============================
  const rootRef = React.useRef<HTMLDivElement>(null)

  // ========================== Expanded ==========================
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded)

  const expandNode = expandText
    ? withStopPropagation(
      stopPropagationForActionButtons,
      <div
        className='triones-antm-ellipsis-icon'
        onClick={() => {
          setExpanded(true)
        }}
      >
        {expandText}
      </div>
    )
    : null

  const collapseNode = collapseText
    ? withStopPropagation(
      stopPropagationForActionButtons,
      <div
        className='triones-antm-ellipsis-icon'
        onClick={() => {
          setExpanded(false)
        }}
      >
        {collapseText}
      </div>
    )
    : null

  // ========================== Ellipsis ==========================
  const [measureNodes, forceResize] = useMeasure(
    rootRef,
    content,
    rows,
    direction,
    expanded,
    expandNode,
    collapseNode
  )

  useResizeEffect(forceResize, rootRef)

  // =========================== Render ===========================
  return withNativeProps(
    props,
    <div
      ref={rootRef}
      className={classPrefix}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onContentClick(e)
        }
      }}
    >
      {measureNodes}
    </div>
  )
}
`},21326:function(e,n){n.Z=`import { Ellipsis } from './ellipsis'

export type { EllipsisProps } from './ellipsis'

export default Ellipsis
`},97371:function(e,n){n.Z=`import { useEvent } from 'rc-util'
import React from 'react'
import runes from 'runes2'

const enum MEASURE_STATUS {
  PREPARE = 1,
  MEASURE_WALKING = 2,
  STABLE_ELLIPSIS = 99,
  STABLE_NO_ELLIPSIS = 100,
}

const ELLIPSIS_TEXT = '...'

const measureStyle: React.CSSProperties = {
  visibility: 'hidden',
  whiteSpace: 'inherit',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default function useMeasure(
  containerRef: React.RefObject<HTMLDivElement>,
  content: string,
  rows: number,
  direction: 'start' | 'end' | 'middle',
  expanded: boolean,
  expandNode: React.ReactElement | null,
  collapseNode: React.ReactElement | null
) {
  const contentChars = React.useMemo(() => runes(content), [content])

  const [maxHeight, setMaxHeight] = React.useState<number>(0)

  const [walkingIndexes, setWalkingIndexes] = React.useState<
    [startOffset: number, endOffset: number]
  >([0, 0])
  const midIndex = Math.ceil((walkingIndexes[0] + walkingIndexes[1]) / 2)

  const [status, setStatus] = React.useState<MEASURE_STATUS>(
    MEASURE_STATUS.STABLE_NO_ELLIPSIS
  )

  // ============================ Refs ============================
  const singleRowMeasureRef = React.useRef<HTMLDivElement>(null)
  const fullMeasureRef = React.useRef<HTMLDivElement>(null)
  const midMeasureRef = React.useRef<HTMLDivElement>(null)

  const startMeasure = useEvent(() => {
    setStatus(MEASURE_STATUS.PREPARE)
    setWalkingIndexes([
      0,
      direction === 'middle'
        ? Math.ceil(contentChars.length / 2)
        : contentChars.length,
    ])
  })

  // Initialize
  React.useLayoutEffect(() => {
    startMeasure()
  }, [contentChars, rows])

  // Measure element height
  React.useLayoutEffect(() => {
    if (status === MEASURE_STATUS.PREPARE) {
      const fullMeasureHeight = fullMeasureRef.current?.offsetHeight || 0
      const singleRowMeasureHeight =
        singleRowMeasureRef.current?.offsetHeight || 0
      const rowMeasureHeight = singleRowMeasureHeight * rows

      if (fullMeasureHeight <= rowMeasureHeight) {
        setStatus(MEASURE_STATUS.STABLE_NO_ELLIPSIS)
      } else {
        setMaxHeight(rowMeasureHeight)
        setStatus(MEASURE_STATUS.MEASURE_WALKING)
      }
    }
  }, [status])

  // Walking measure
  React.useLayoutEffect(() => {
    if (status === MEASURE_STATUS.MEASURE_WALKING) {
      const diff = walkingIndexes[1] - walkingIndexes[0]
      const midHeight = midMeasureRef.current?.offsetHeight || 0

      if (diff > 1) {
        if (midHeight > maxHeight) {
          setWalkingIndexes([walkingIndexes[0], midIndex])
        } else {
          setWalkingIndexes([midIndex, walkingIndexes[1]])
        }
      } else {
        if (midHeight > maxHeight) {
          setWalkingIndexes([walkingIndexes[0], walkingIndexes[0]])
        } else {
          setWalkingIndexes([walkingIndexes[1], walkingIndexes[1]])
        }
        setStatus(MEASURE_STATUS.STABLE_ELLIPSIS)
      }
    }
  }, [status, walkingIndexes])

  // =========================== Render ===========================
  /** Render by cut index */
  const renderContent = (index: number) => {
    const prefixContent = contentChars.slice(0, index)
    const suffixContent = contentChars.slice(contentChars.length - index)

    return (
      <>
        {direction === 'start' && (
          <>
            {expandNode}
            {ELLIPSIS_TEXT}
          </>
        )}
        {direction !== 'start' && prefixContent.join('')}
        {direction === 'middle' && (
          <>
            {ELLIPSIS_TEXT}
            {expandNode}
            {ELLIPSIS_TEXT}
          </>
        )}
        {direction !== 'end' && suffixContent.join('')}
        {direction === 'end' && (
          <>
            {ELLIPSIS_TEXT}
            {expandNode}
          </>
        )}
      </>
    )
  }

  const finalContent = React.useMemo(() => {
    if (expanded || status === MEASURE_STATUS.STABLE_NO_ELLIPSIS) {
      return (
        <React.Fragment key='display'>
          {content}
          {status === MEASURE_STATUS.STABLE_ELLIPSIS && collapseNode}
        </React.Fragment>
      )
    }

    if (status === MEASURE_STATUS.STABLE_ELLIPSIS) {
      return renderContent(midIndex)
    }

    return null
  }, [expanded, status, content, collapseNode, midIndex])

  const allNodes = (
    <>
      {/******************* Measure Prepare *******************/}
      {/* Origin full content */}
      {status === MEASURE_STATUS.PREPARE && (
        <div key='full' aria-hidden ref={fullMeasureRef} style={measureStyle}>
          {content}
          {expandNode}
        </div>
      )}

      {/* Row measure */}
      {status === MEASURE_STATUS.PREPARE && (
        <div
          key='stable'
          aria-hidden
          ref={singleRowMeasureRef}
          style={measureStyle}
        >
          {'\\u00A0'}
        </div>
      )}

      {/******************* Measure Walking *******************/}
      {status === MEASURE_STATUS.MEASURE_WALKING && (
        <div
          key='walking-mid'
          aria-hidden
          ref={midMeasureRef}
          style={measureStyle}
        >
          {renderContent(midIndex)}
        </div>
      )}

      {/*********************** Display ***********************/}
      {/* Display content */}
      {finalContent}
    </>
  )

  return [allNodes, startMeasure] as const
}
`},86653:function(e,n){n.Z=`import './style.scss';
import * as React from 'react';
import classNames from 'classnames';

import DefaultEmptyImg from './empty';


const defaultEmptyImg = <DefaultEmptyImg />;

export interface EmptyProps {
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

type CompoundedComponent = React.FC<EmptyProps>;

const Empty: CompoundedComponent = ({
  image = defaultEmptyImg,
  description,
  children,
  imageStyle,
  style,
  ...restProps
}) => {

  const prefixCls = 'triones-antm-empty'
  const des = typeof description !== 'undefined' ? description : '\u6682\u65E0\u6570\u636E';
  const alt = typeof des === 'string' ? des : 'empty';

  let imageNode: React.ReactNode = null;

  if (typeof image === 'string') {
    imageNode = <img alt={alt} src={image} />;
  } else {
    imageNode = image;
  }

  return <div className={\`\${prefixCls}-wrapper\`}>
    <div
      className={prefixCls}
      style={{ ...style }}
      {...restProps}
    >
      <div className={\`\${prefixCls}-image\`} style={imageStyle}>
        {imageNode}
      </div>
      {des && <div className={\`\${prefixCls}-description\`}>{des}</div>}
      {children && <div className={\`\${prefixCls}-footer\`}>{children}</div>}
    </div>
  </div>
};

export default Empty;
`},89022:function(e,n){n.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../utils/native-props'
import Divider from '../Divider'
import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-footer\`

export type LinkItem = {
  text: string
  href: string
}

export type ChipItem = {
  text: ReactNode
  type?: 'plain' | 'link'
}

export type FooterProps = {
  label?: ReactNode
  links?: LinkItem[]
  content?: ReactNode
  chips?: ChipItem[]
  onChipClick?: (item: ChipItem, index: number) => void
  onLinkClick?: (item: LinkItem, index: number) => void
} & NativeProps<'--background-color'>

const defaultProps: FooterProps = {
  label: '',
  links: [],
  content: '',
  chips: [],
}

export const Footer: FC<FooterProps> = p => {
  const props = mergeProps(defaultProps, p) as FooterProps
  const { label, links, content, chips, onChipClick, onLinkClick } = props

  const clickChipItem = (item: ChipItem, index: number) => {
    if (chips?.length && item.type === 'link') {
      onChipClick?.(item, index)
    }
  }

  const clickLinkItem = (
    item: LinkItem,
    index: number
  ) => {
    if (onLinkClick) {
      onLinkClick(item, index)
    }
  }
  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      {label && (
        <div className={\`\${classPrefix}-label\`}>
          <Divider>{label}</Divider>
        </div>
      )}
      {!!links?.length && (
        <div className={\`\${classPrefix}-links\`}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <div
                className={\`\${classPrefix}-links-item\`}
                onClick={() => clickLinkItem(link, index)}
              >
                {link.text}
              </div>
              {index !== links.length - 1 && <Divider direction='vertical' />}
            </React.Fragment>
          ))}
        </div>
      )}
      {content && <div className={\`\${classPrefix}-content\`}>{content}</div>}
      {chips && chips.length > 0 && (
        <div className={\`\${classPrefix}-chips\`}>
          {chips.map((chip, index) => (
            <div
              key={index}
              onClick={() => clickChipItem(chip, index)}
              className={classNames(\`\${classPrefix}-chip\`, {
                [\`\${classPrefix}-chip-link\`]: chip.type === 'link',
              })}
            >
              {chip.text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

`},77813:function(e,n){n.Z=`import { Footer } from './footer'

export type { FooterProps, ChipItem, LinkItem } from './footer'

export default Footer

`},17826:function(e,n){n.Z=`import React, {FC, useState} from "react"
import {Field} from "rc-field-form";
import classNames from "classnames";
import {Meta, Rule} from "rc-field-form/lib/interface";
import _ from "lodash";

type FormItemInputProps = {
  children?: React.ReactElement;
  className?: string;
  name?: string;
  rules?: Rule[]
  errors?: React.ReactNode[];
  errorRender?: (errors?: any[]) => React.ReactNode;
}

export const FormItemInput: FC<FormItemInputProps> = ({children, className, name, rules, errorRender}) => {
  const [meta, setMeta] = useState<Meta | undefined>()

  const clsPrefix = "triones-antm-form-item"
  return <div className={classNames(className)}>
    <div><Field name={name} rules={rules} trigger={'onChange'} onMetaChange={(meta) => {
      setMeta(meta)
    }}>{children}</Field></div>
    {!_.isEmpty(meta?.errors) &&
      <div className={classNames(\`\${clsPrefix}-error\`)}>{errorRender?.(meta?.errors) || meta?.errors.join(',')}</div>}
  </div>
}
`},89156:function(e,n){n.Z=`import React, {CSSProperties, FC} from "react"
import classNames from "classnames";
import {NamePath} from "rc-field-form/lib/interface";
import {useFormContext} from "../hooks/useFormContext";
import {isFunction} from "lodash";
import {FormItemLayout} from "../form";

type FormItemLabelProps = {
  className?: string
  style?: CSSProperties
  label?: React.ReactNode
  layout?: FormItemLayout;
  name?: NamePath
  required?: boolean
}
export const FormItemLabel: FC<FormItemLabelProps> = ({className, style, label, layout, required}) => {
  const {requiredMark, colon} = useFormContext()
  const clsPrefix = \`triones-antm-form-item-label\`
  return <div className={classNames(className, {required: \`\${clsPrefix}-required\`})} style={style}>
    <label>
      {required && <div className={\`\${clsPrefix}-required-mark\`}>
        {isFunction(requiredMark) ? requiredMark(label, {required}) : '*'}
      </div>}
      {label}
      {layout == 'horizontal' && colon && ':'}
    </label>
  </div>
}
`},37597:function(e,n){n.Z=`import React, {CSSProperties, FC, ReactElement, ReactNode} from "react"
import {FormItemLabel} from "./form-item-label";
import {FormItemInput} from "./form-item-input";
import {NamePath, Rule} from "rc-field-form/lib/interface";
import classNames from "classnames";
import {useFormContext} from "../hooks/useFormContext";
import {FormItemLayout, FormLayoutAlign} from "../form";

export type FormItemProps = {
  className?: string;
  style?: CSSProperties
  children?: ReactElement;
  layout?: FormItemLayout;
  label?: ReactNode;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  name?: NamePath;
  required?: boolean
  rules?: Rule[]
  errorRender?: (errors?: any[]) => React.ReactNode;
}

export const FormItem: FC<FormItemProps> = ({
                                              className,
                                              style,
                                              children,
                                              layout,
                                              label,
                                              labelAlign,
                                              labelWidth,
                                              name,
                                              required,
                                              rules,
                                              errorRender,
                                              ...props
                                            }) => {
  const {layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth} = useFormContext()
  const formItemLayout = layout ? layout : (formLayout === 'inline' ? 'horizontal' : formLayout)
  const formItemAlign = labelAlign ? labelAlign : formLayoutAlign || 'left'
  const formItemLabelWidth = labelWidth ? labelWidth : formLabelWidth
  const clsPrefix = "triones-antm-form-item"
  return <div className={classNames(clsPrefix, \`\${clsPrefix}-\${formItemLayout}\`, className)} style={style}>
    <FormItemLabel className={classNames(\`\${clsPrefix}-label\`, \`\${clsPrefix}-label-\${formItemAlign}\`)}
                   style={{width: formItemLabelWidth}} label={label} required={required}/>
    <FormItemInput className={\`\${clsPrefix}-input\`} {...props} name={name} rules={rules}
                   errorRender={errorRender}>{children}</FormItemInput>
  </div>
}
`},2478:function(e,n){n.Z=`import {FormItemProps, FormItem as InternalFromItem} from "./form-item";

type InternalFormItemType = typeof InternalFromItem
type CompoundedComponent = InternalFormItemType
const FormItem = InternalFromItem as CompoundedComponent

export type {
  FormItemProps
}
export default FormItem
`},44566:function(e,n){n.Z=`import React from "react";
import FieldForm, {useWatch} from "rc-field-form";
import type {FormProps as RcFormProps} from 'rc-field-form/lib/Form';
import type {FormRef} from 'rc-field-form/lib/interface';
import {FormInstance} from "./interface";
import {FormContext} from "./context";
import "./style.scss"

export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';
export type FormLayoutAlign = 'left' | 'right';

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form' | 'component'> {
  /**
   * @description \u914D\u7F6E Form.Item \u7684 colon \u7684\u9ED8\u8BA4\u503C\u3002\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7 (\u53EA\u6709\u5728\u5C5E\u6027 layout \u4E3A horizontal \u65F6\u6709\u6548)
   * @default true
   */
  colon?: boolean;
  /**
   * @description \u5E03\u5C40
   * @default horizontal
   */
  layout?: FormLayout
  /**
   * @description \u7ECF Form.useForm() \u521B\u5EFA\u7684 form \u63A7\u5236\u5B9E\u4F8B\uFF0C\u4E0D\u63D0\u4F9B\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA
   * @default
   */
  form?: FormInstance<Values>
  /**
   * @description \u6807\u7B7E
   * @default horizontal
   */
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  requiredMark?: RequiredMark
}

export const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = ({
                                                                                   children,
                                                                                   layout,
                                                                                   labelAlign,
                                                                                   labelWidth,
                                                                                   requiredMark,
                                                                                   ...props
                                                                                 }, ref) => {
  return <FormContext.Provider value={{
    layout: layout || 'horizontal',
    labelAlign: labelAlign || 'left',
    labelWidth: labelWidth,
    requiredMark: requiredMark || true
  }}>
    <FieldForm {...props} component={false}>{children}</FieldForm>
  </FormContext.Provider>
}

export {
  useWatch
}
export default InternalForm;
`},99947:function(e,n){n.Z=`import * as React from 'react';
import {useForm as useRcForm} from 'rc-field-form';
import {FormInstance} from '../interface';

export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
    const [rcForm] = useRcForm();
    const itemsRef = React.useRef<Record<string, React.ReactElement>>({});

    const wrapForm: FormInstance<Values> = React.useMemo(() => {
        return form ?? {...rcForm}
    }, [form, rcForm]);

    return [wrapForm];
}
`},75117:function(e,n){n.Z=`import {FormContext, FormContextProps} from "../context";
import React from "react";

export function useFormContext():FormContextProps {
  const  formContext = React.useContext(FormContext);
 return  formContext
}
`},51459:function(e,n){n.Z=`import InternalForm, {FormProps, useWatch} from "./form";
import FormItem, {FormItemProps} from "./FormItem";
import useForm from "./hooks/useForm";

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm;
  Item: typeof FormItem;
  useWatch: typeof useWatch;
}

const Form = InternalForm as CompoundedComponent;
Form.useForm = useForm;
Form.Item = FormItem;
Form.useWatch = useWatch;

export type {
  FormProps,
  FormItemProps
}
export default Form;
`},36010:function(e,n){n.Z=`import React from 'react'
import type { FC, ReactNode, CSSProperties } from 'react'
import { NativeProps, toCSSLength, withNativeProps } from '../utils/native-props'

import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-grid\`

export type GridProps = {
  columns: number
  gap?: number | string | [number | string, number | string]
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

export const Grid: FC<GridProps> = props => {
  const style: GridProps['style'] & Record<'--columns', string> = {
    '--columns': props.columns.toString(),
  }
  const { gap } = props
  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0])
      style['--gap-vertical'] = toCSSLength(gap[1])
    } else {
      style['--gap'] = toCSSLength(gap)
    }
  }

  return withNativeProps(
    props,
    <div className={classPrefix} style={style}>
      {props.children}
    </div>
  )
}

export type GridItemProps = {
  span?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps

type GridItemStyle = CSSProperties &
  Record<'--item-span', GridItemProps['span']>

export const GridItem: FC<GridItemProps> = p => {
  const props = mergeProps({ span: 1 }, p) as GridItemProps

  const itemStyle: GridItemStyle = {
    '--item-span': props.span,
  }
  return withNativeProps(
    props,
    <div
      className={\`\${classPrefix}-item\`}
      style={itemStyle}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}
`},79212:function(e,n){n.Z=`import {Grid as InternalGrid, GridItem} from './grid'

export type {GridProps, GridItemProps} from './grid'

type CompoundedComponent = typeof InternalGrid & {
  Item: typeof GridItem;
};

const Grid = InternalGrid as CompoundedComponent;
Grid.Item = GridItem;

export default Grid
`},13063:function(e,n){n.Z=`import React, { memo } from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

export const CheckIcon = memo<NativeProps>((props) => {
  return withNativeProps(
    props,
    <svg viewBox="0 0 40 40">
      <path
        d="M31.5541766,15 L28.0892433,15 L28.0892434,15 C27.971052,15 27.8576674,15.044522 27.7740471,15.1239792 L18.2724722,24.1625319 L13.2248725,19.3630279 L13.2248725,19.3630279 C13.1417074,19.2834412 13.0287551,19.2384807 12.9107898,19.2380079 L9.44474455,19.2380079 L9.44474454,19.2380079 C9.19869815,19.2384085 8.99957935,19.4284738 9,19.66253 C9,19.7747587 9.04719253,19.8823283 9.13066188,19.9616418 L17.0907466,27.5338228 C17.4170809,27.8442545 17.8447695,28 18.2713393,28 L18.2980697,28 C18.7168464,27.993643 19.133396,27.8378975 19.4530492,27.5338228 L31.8693384,15.7236361 L31.8693384,15.7236361 C32.0434167,15.5582251 32.0435739,15.2898919 31.8696892,15.1242941 C31.7860402,15.0446329 31.6725052,15 31.5541421,15 L31.5541766,15 Z"
        fill="currentColor"
      />
    </svg>,
  );
});
`},85487:function(e,n){n.Z=`import React from 'react';

export const BrokenImageIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z"
      fill="#DBDBDB"
      fillRule="nonzero"
    />
  </svg>
);
`},61070:function(e,n){n.Z=`import React from 'react';

export const ImageIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z"
      fill="#DBDBDB"
      fillRule="nonzero"
    />
  </svg>
);
`},47314:function(e,n){n.Z=`import type { ReactNode } from 'react';
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
        id={props.id}
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
    style['--width'] = toCSSLength(props.width);
    style['width'] = toCSSLength(props.width);
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height);
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
`},75986:function(e,n){n.Z=`import { Image } from './image';
import './style.scss';

export type { ImageProps } from './image';

export default Image;
`},71320:function(e,n){n.Z=`import { useInViewport } from 'ahooks';
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
`},50109:function(e,n){n.Z=`import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

export type BaseInputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  value?: any;
  onChange?: (e: any) => void;
};

export interface BaseInputHandle {
  clear?: () => void;
}

export const BaseInput = forwardRef<BaseInputHandle, BaseInputProps>(
  ({ className, placeholder, type, value, onChange }, ref) => {
    const [innerValue, setInnerValue] = useState(value || '');

    useImperativeHandle(ref, () => ({
      clear: () => {
        setInnerValue('');
        onChange?.('');
      },
    }));

    const cls = 'triones-antm-input';
    return (
      <input
        className={classNames([\`\${cls}\`, className])}
        placeholder={placeholder}
        type={type}
        value={innerValue}
        onChange={(e) => {
          setInnerValue(e.target.value);
          onChange?.(e);
        }}
      />
    );
  },
);
`},51990:function(e,n){n.Z=`$inputCls: 'triones-antm-input';
$inputAffixWrapperCls: 'triones-antm-input-affix-wrapper';
$inputGroupWrapperCls: 'triones-antm-input-group-wrapper';
$inputPotCls: 'triones-antm-pot';

input{
  height: auto;
}
.#{$inputCls} {
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 0;
  transition: all .2s;
  padding: 4Px 0Px;
  outline: none;
  box-shadow: none;
  border: none;
  //line-height: 1.5714285714285714;
  border-radius: 6Px;
  font-size: 14Px;
  height: auto;

  &::placeholder {
    font-size: 14Px;
    color: #cccccc;
  }
}


.#{$inputAffixWrapperCls} {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4Px 0Px;

  .#{$inputCls} {
    padding: 0;

    &-prifix {
    }

    &-suffix {
      display: inline-flex;
      align-items: center;
      gap: 4Px;

      .clear-icon {
        color: rgba(0, 0, 0, 0.25);


        &:hover {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      .triones-antm-icon {
        cursor: pointer;
      }
    }
  }
}

.#{$inputGroupWrapperCls} {
}


.#{$inputPotCls} {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 8Px;

  &-input {
    text-align: center;
    padding-inline: 4Px;
    font-size: 14Px;
    height: auto;
    &::placeholder {
      font-size: 14Px;
    }
  }

  .#{$inputCls}-outlined {
    font-size: 14Px;
    color: rgba(0, 0, 0, 0.88);
    background: #ffffff;
    border-width: 1Px;
    border-style: solid;
    border-color: #d9d9d9;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
`},81487:function(e,n){n.Z=`import {InputPassword, InputPasswordProps} from './input-password';
import {Input as InternalInput, InputProps} from './input';
import {InputOPT, InputOPTProps} from './input-opt';

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  OPT: typeof InputOPT;
};

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;

export type {
  InputProps,
  InputPasswordProps,
  InputOPTProps
}
export default Input;
`},66998:function(e,n){n.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useRef } from 'react';
import { BaseInput, BaseInputHandle, BaseInputProps } from './base-input';

export type InputAffixWrapperProps = BaseInputProps & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
};
export const InputAffixWrapper: FC<InputAffixWrapperProps> = ({
  prefix,
  suffix,
  allowClear,
  value,
  onChange,
  ...rest
}) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const baseInputRef = useRef({} as BaseInputHandle);
  const cls = 'triones-antm-input-affix-wrapper';
  const inputCls = 'triones-antm-input';
  return (
    <div className={classNames([cls])}>
      {prefix && (
        <div className={classNames([\`\${inputCls}-prefix\`])}>{prefix}</div>
      )}
      <BaseInput
        ref={baseInputRef}
        {...rest}
        value={value}
        onChange={(value) => {
          setInnerValue(value);
          onChange?.(value);
        }}
      />
      {(suffix || allowClear) && (
        <div className={classNames([\`\${inputCls}-suffix\`])}>
          {allowClear && innerValue && (
            <CloseCircleFill
              className="clear-icon"
              onClick={() => {
                baseInputRef.current.clear?.();
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
`},96342:function(e,n){n.Z=`import classNames from 'classnames';
import React, {FC, useEffect, useState} from 'react';
import './index.scss';
import _ from "lodash";

const cls = 'triones-antm-pot';
const inputCls = 'triones-antm-input';

export type InputOPTProps = {
  className?: string;
  style?: React.CSSProperties;
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
};

export type InputOPTItemProps = {
  index: number;
  focusIndex?: number;
  value?: string;
  onChange: (value: string) => void;
  onFocus?: (index: number) => void;
};

const InputOPTItem: FC<InputOPTItemProps> = ({
                                               index,
                                               focusIndex,
                                               value,
                                               onChange,
                                               onFocus,
                                             }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focusIndex === index) {
      if (_.isFunction(ref.current?.select)) {
        ref.current?.select();
      } else {
        ref.current?.setSelectionRange(0, ref.current!.value.length);
      }
    } else {
      ref.current?.blur();
    }
  }, [focusIndex]);

  return (
    <input
      ref={ref}
      className={classNames(
        \`\${inputCls}\`,
        \`\${cls}-input\`,
        \`\${inputCls}-outlined\`,
      )}
      size={1}
      type={\`text\`}
      maxLength={1}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onInput={(e) => {
        //onChange(e.target.value);
      }}
      onFocus={() => {
        onFocus?.(index);
      }}
    />
  );
};

export const InputOPT: FC<InputOPTProps> = ({
                                              className,
                                              style,
                                              length = 6,
                                            }) => {
  const [internalValue, setInternalValue] = React.useState<any>(
    Array.from({length}).map(() => ''),
  );

  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <div className={classNames(cls, className)} style={style}>
      {Array.from({length}).map((_, index) => {
        return (
          <InputOPTItem
            key={index}
            index={index}
            focusIndex={focusIndex}
            value={internalValue?.[index] || ''}
            onChange={(value) => {
              internalValue[index] = value;
              setInternalValue([...internalValue]);
              if (value) {
                setFocusIndex(index + 1);
              }
            }}
            onFocus={(index) => {
              setFocusIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
`},49606:function(e,n){n.Z=`import {
  EyeInvisibleOutline,
  EyeOutline,
} from '@trionesdev/antd-taro-icons-react';
import React, { FC, useState } from 'react';
import { Input, InputProps } from './input';

export type InputPasswordProps = Omit<InputProps, 'type'> & {
  iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
};
export const InputPassword: FC<InputPasswordProps> = ({
  iconRender,
  visibilityToggle = true,
  suffix,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const toggleRender = () => {
    if (iconRender) {
      return iconRender(visible);
    } else {
      return (
        <>
          {visible ? (
            <EyeOutline onClick={() => setVisible(false)} />
          ) : (
            <EyeInvisibleOutline onClick={() => setVisible(true)} />
          )}
        </>
      );
    }
  };

  return (
    <Input
      {...rest}
      type={visible ? 'text' : 'password'}
      suffix={
        <>
          {' '}
          {visibilityToggle && toggleRender()} {suffix}{' '}
        </>
      }
    />
  );
};
`},16586:function(e,n){n.Z=`import { BaseInput } from './base-input';
import { InputAffixWrapper } from './input-affix-wrapper';
import React, { FC } from 'react';
import './index.scss';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: any;
  onChange?: (e: any) => void;
};
export const Input: FC<InputProps> = ({
  className,
  style,
  placeholder,
  type,
  disabled,
  allowClear,
  prefix,
  suffix,
  value,
  onChange,
}) => {
  const handleRender = () => {
    if (prefix || suffix || allowClear) {
      return (
        <InputAffixWrapper
          prefix={prefix}
          suffix={suffix}
          allowClear={allowClear}
          type={type}
          value={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <BaseInput
          className={className}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      );
    }
  };

  return <>{handleRender()}</>;
};
`},75040:function(e,n){n.Z=`import { useMemoizedFn } from 'ahooks';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

interface Props {
  type: 'checkbox' | 'radio';
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
}

export const NativeInput: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = useMemoizedFn((e: MouseEvent) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const latestChecked = (e.target as HTMLInputElement).checked;
    if (latestChecked === props.checked) return;
    props.onChange(latestChecked);
  });
  useEffect(() => {
    if (props.disabled) return;
    if (!inputRef.current) return;
    const input = inputRef.current;
    input.addEventListener('click', handleClick);
    return () => {
      input.removeEventListener('click', handleClick);
    };
  }, [props.disabled, props.onChange]);

  return (
    <input
      ref={inputRef}
      type={props.type}
      checked={props.checked}
      onChange={() => {}}
      disabled={props.disabled}
      id={props.id}
    />
  );
};
`},95997:function(e,n){n.Z=`import './style.scss';

import { Mask } from './mark';
export type { MaskProps } from './mark';

export default Mask;
`},28877:function(e,n){n.Z=`// import { animated, useSpring } from '@react-spring/web';
import { useUnmountedRef } from 'ahooks';
import type { FC, ReactNode } from 'react';
import React, { useMemo, useRef, useState } from 'react';
import { useConfig } from '../ConfigProvider';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { GetContainer, renderToContainer } from '../utils/render-to-container';
import { ShouldRender } from '../utils/should-render';
import { useLockScroll } from '../utils/use-lock-scroll';
import { mergeProps } from '../utils/with-default-props';
import {
  PropagationEvent,
  withStopPropagation,
} from '../utils/with-stop-propagation';

const classPrefix = \`triones-antm-mask\`;

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
};
const colorRecord: Record<string, string> = {
  black: '0, 0, 0',
  white: '255, 255, 255',
};

export type MaskProps = {
  visible?: boolean;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  disableBodyScroll?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  color?: 'white' | 'black' | (string & {});
  opacity?: 'default' | 'thin' | 'thick' | number;
  getContainer?: GetContainer;
  afterShow?: () => void;
  afterClose?: () => void;
  stopPropagation?: PropagationEvent[];
  children?: ReactNode;
} & NativeProps<'--z-index'>;

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click'],
};

export const Mask: FC<MaskProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const { locale } = useConfig();

  const ref = useRef<HTMLDivElement>(null);

  useLockScroll(ref, props.visible && props.disableBodyScroll);

  const background = useMemo(() => {
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = colorRecord[props.color];
    return rgb ? \`rgba(\${rgb}, \${opacity})\` : props.color;
  }, [props.color, props.opacity]);

  const [active, setActive] = useState(props.visible);

  const unmountedRef = useUnmountedRef();
  // const { opacity } = useSpring({
  //   opacity: props.visible ? 1 : 0,
  //   config: {
  //     precision: 0.01,
  //     mass: 1,
  //     tension: 250,
  //     friction: 30,
  //     clamp: true,
  //   },
  //   onStart: () => {
  //     setActive(true);
  //   },
  //   onRest: () => {
  //     if (unmountedRef.current) return;
  //     setActive(props.visible);
  //     if (props.visible) {
  //       props.afterShow?.();
  //     } else {
  //       props.afterClose?.();
  //     }
  //   },
  // });

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={classPrefix}
        ref={ref}
        aria-hidden
        style={{
          ...props.style,
          background,

          display: active ? undefined : 'none',
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.target === e.currentTarget) {
            props.onMaskClick?.(e);
          }
        }}
      >
        {props.onMaskClick && (
          <div
            className={\`\${classPrefix}-aria-button\`}
            role="button"
            aria-label={locale.Mask.name}
            onClick={props.onMaskClick}
          />
        )}
        <div className={\`\${classPrefix}-content\`}>{props.children}</div>
      </div>,
    ),
  );

  return (
    <ShouldRender
      active={active}
      forceRender={props.forceRender}
      destroyOnClose={props.destroyOnClose}
    >
      {renderToContainer(props.getContainer, node)}
    </ShouldRender>
  );
};
`},22175:function(e,n){n.Z=`import {Mask} from "./mask"

export default Mask
`},61148:function(e,n){n.Z=`import classNames from "classnames";
import React, {FC} from "react";
import "./style.scss"

const maskCls = "triones-antm-mask2";
export type MaskProps = {
  children?: React.ReactNode
  className?: string
  zIndex?: number
  open?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const Mask: FC<MaskProps> = ({children, className, zIndex = 1000, open, onMaskClick}) => {
  return <div className={classNames(maskCls, {[\`\${maskCls}-open\`]: open})} style={{zIndex}} onClick={onMaskClick}>
    <div className={classNames(\`\${maskCls}-inner\`, className)}>
      {children}
    </div>
  </div>
}
`},80362:function(e,n){n.Z=`import { NavBar } from './nav-bar'

export type { NavBarProps } from './nav-bar'

export default NavBar
`},75853:function(e,n){n.Z=`import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { useConfig } from '../ConfigProvider'
import { mergeProp, mergeProps } from '../utils/with-default-props'
import { LeftOutline } from '@trionesdev/antd-taro-icons-react'

import './style.scss'

const classPrefix = \`triones-antm-nav-bar\`

export type NavBarProps = {
  back?: ReactNode
  backIcon?: boolean | ReactNode
  /**
   * @deprecated use \`backIcon\` instead
   */
  backArrow?: boolean | ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
  children?: ReactNode
} & NativeProps<'--height' | '--border-bottom'>

const defaultBackIcon = <LeftOutline />

export const NavBar: FC<NavBarProps> = props => {
  const { navBar: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(componentConfig, props)
  const { back, backIcon, backArrow } = mergedProps

  const mergedDefaultBackIcon = componentConfig.backIcon || defaultBackIcon

  const mergedBackIcon = mergeProp<ReactNode>(
    defaultBackIcon,
    componentConfig.backIcon,
    backArrow === true ? mergedDefaultBackIcon : backArrow,
    backIcon === true ? mergedDefaultBackIcon : backIcon
  )

  return withNativeProps(
    mergedProps,
    <div className={classNames(classPrefix)}>
      <div className={\`\${classPrefix}-left\`} role='button'>
        {back !== null && (
          <div className={\`\${classPrefix}-back\`} onClick={mergedProps.onBack}>
            {mergedBackIcon && (
              <span className={\`\${classPrefix}-back-arrow\`}>
                {mergedBackIcon}
              </span>
            )}
            <span aria-hidden='true'>{back}</span>
          </div>
        )}
        {mergedProps.left}
      </div>
      <div className={\`\${classPrefix}-title\`}>{mergedProps.children}</div>
      <div className={\`\${classPrefix}-right\`}>{mergedProps.right}</div>
    </div>
  )
}
`},10266:function(e,n){n.Z=`
import { NoticeBar } from './notice-bar'

export type { NoticeBarProps } from './notice-bar'

export default NoticeBar
`},55127:function(e,n){n.Z=`import { useTimeout } from 'ahooks'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { memo, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { useConfig } from '../ConfigProvider'
import { mergeProp, mergeProps } from '../utils/with-default-props'
import { useResizeEffect } from '../utils/use-resize-effect'
import { useMutationEffect } from '../utils/use-mutation-effect'
import { CloseCircleOutline, SetOutline } from '@trionesdev/antd-taro-icons-react'

import './style.scss'

const classPrefix = \`triones-antm-notice-bar\`

export type NoticeBarProps = {
  /** The type of the NoticeBar */
  color?: 'default' | 'alert' | 'error' | 'success' | 'info'
  /** TDelay to start scrolling, unit ms */
  delay?: number
  /** Scroll speed, unit px/s */
  speed?: number
  /** The content of the NoticeBar */
  content: ReactNode
  /** Whether it can be closed */
  closeable?: boolean
  /** Custom close icon */
  closeIcon?: ReactNode
  /** Callback when closed */
  onClose?: () => void
  /** Event when click */
  onClick?: () => void
  /** Additional operating area, displayed to the left of the close button */
  extra?: ReactNode
  /** Radio icon on the left */
  icon?: ReactNode
  /** Whether to display multiple lines */
  wrap?: boolean
  /** Block shape */
  shape?: 'rectangular' | 'neutral' | 'rounded'
  /** Border visibility */
  bordered?: 'block' | boolean
} & NativeProps<
  | '--background-color'
  | '--border-color'
  | '--text-color'
  | '--font-size'
  | '--icon-font-size'
  | '--height'
>

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
  icon: <SetOutline />,
  wrap: false,
  shape: 'rectangular',
  bordered: 'block' as 'block' | boolean,
}

export const NoticeBar = memo<NoticeBarProps>(props => {
  const { noticeBar: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(defaultProps, componentConfig, props)
  const closeIcon = mergeProp(
    <CloseCircleOutline className={\`\${classPrefix}-close-icon\`} />,
    componentConfig.closeIcon,
    props.closeIcon
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(true)

  const speed = mergedProps.speed

  const delayLockRef = useRef(true)
  const animatingRef = useRef(false)

  function start() {
    if (delayLockRef.current || mergedProps.wrap) return

    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    if (container.offsetWidth >= text.offsetWidth) {
      animatingRef.current = false
      text.style.removeProperty('transition-duration')
      text.style.removeProperty('transform')
      return
    }

    if (animatingRef.current) return

    const initial = !text.style.transform
    text.style.transitionDuration = '0s'
    if (initial) {
      text.style.transform = 'translateX(0)'
    } else {
      text.style.transform = \`translateX(\${container.offsetWidth}px)\`
    }

    const distance = initial
      ? text.offsetWidth
      : container.offsetWidth + text.offsetWidth
    animatingRef.current = true

    text.style.transitionDuration = \`\${Math.round(distance / speed)}s\`
    text.style.transform = \`translateX(-\${text.offsetWidth}px)\`
  }

  useTimeout(() => {
    delayLockRef.current = false
    start()
  }, mergedProps.delay)

  useResizeEffect(() => {
    start()
  }, containerRef)

  useMutationEffect(
    () => {
      start()
    },
    textRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    }
  )

  if (!visible) return null

  return withNativeProps(
    mergedProps,
    <div
      className={classNames(
        classPrefix,
        \`\${classPrefix}-\${mergedProps.color}\`,
        \`\${classPrefix}-\${mergedProps.shape}\`,
        {
          [\`\${classPrefix}-wrap\`]: mergedProps.wrap,
          [\`\${classPrefix}-bordered\`]: mergedProps.bordered === true,
          [\`\${classPrefix}-without-border\`]: mergedProps.bordered === false,
        }
      )}
      onClick={mergedProps.onClick}
    >
      {mergedProps.icon && (
        <div className={\`\${classPrefix}-left\`}>{mergedProps.icon}</div>
      )}
      <div ref={containerRef as React.RefObject<HTMLDivElement>} className={\`\${classPrefix}-content\`}>
        <div
          onTransitionEnd={() => {
            animatingRef.current = false
            start()
          }}
          ref={textRef}
          className={\`\${classPrefix}-content-inner\`}
        >
          {mergedProps.content}
        </div>
      </div>
      {(mergedProps.closeable || mergedProps.extra) && (
        <div className={\`\${classPrefix}-right\`}>
          {mergedProps.extra}
          {mergedProps.closeable && (
            <div
              className={\`\${classPrefix}-close\`}
              onClick={() => {
                setVisible(false)
                mergedProps.onClose?.()
              }}
            >
              {closeIcon}
            </div>
          )}
        </div>
      )}
    </div>
  )
})
`},55914:function(e,n){n.Z=`import { PageIndicator } from './page-indicator'

export type { PageIndicatorProps } from './page-indicator'

export default PageIndicator
`},42166:function(e,n){n.Z=`import React, { memo } from 'react'
import type { ReactElement } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { mergeProps } from '../utils/with-default-props'
import './style.scss'

const classPrefix = \`triones-antm-page-indicator\`

export type PageIndicatorProps = {
  total: number
  current: number
  direction?: 'horizontal' | 'vertical'
  color?: 'primary' | 'white'
} & NativeProps<
  | '--dot-color'
  | '--active-dot-color'
  | '--dot-size'
  | '--active-dot-size'
  | '--dot-border-radius'
  | '--active-dot-border-radius'
  | '--dot-spacing'
>

const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
}

export const PageIndicator = memo<PageIndicatorProps>(p => {
  const props = mergeProps(defaultProps, p)

  const dots: ReactElement[] = []
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <div
        key={i}
        className={classNames(\`\${classPrefix}-dot\`, {
          [\`\${classPrefix}-dot-active\`]: props.current === i,
        })}
      />
    )
  }

  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        \`\${classPrefix}-\${props.direction}\`,
        \`\${classPrefix}-color-\${props.color}\`
      )}
    >
      {dots}
    </div>
  )
})
`},4549:function(e,n){n.Z=`import {Picker, PickerProps} from "./picker"

export type {
    PickerProps,
}
export default Picker
`},95830:function(e,n){n.Z=`import React, {FC, useEffect, useState} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import _ from "lodash";
import PickerView, {PickerColumnOption} from "../PickerView";

const pickerCls = "triones-antm-picker";

export type PickerProps = {
  open?: boolean
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode
  columns?: PickerColumnOption[][]
  /**
   * @description \u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE string \u53D8\u4E3A { value: string, label: ReactNode } \u7684\u683C\u5F0F
   * @default false
   */
  labelInValue?: boolean
  value?: any[],
  onOk: (value: any[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export const Picker: FC<PickerProps> = React.memo(({
                                                     open,
                                                     afterOpenChange,
                                                     title,
                                                     columns,
                                                     labelInValue = false,
                                                     value, onOk,
                                                     onCancel,
                                                     onClose
                                                   }) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: _.size(columns)}).map(() => null))
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const handleClose = () => {
    setInnerOpen(false)
    onClose?.()
  }
  const handleOk = () => {
    onOk?.(internalValue)
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
    if (open == undefined) {
      return;
    }
    if (open == innerOpen) {
      return;
    }
    setInnerOpen(open)
  }, [open]);

  return <Popup open={innerOpen} afterOpenChange={(o)=>{setInnerOpen(o)}} styles={{
    body: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    }
  }}>
    <div className={classNames(pickerCls)}>
      <div className={classNames(\`\${pickerCls}-header\`)}>
        <a className={classNames(\`\${pickerCls}-header-button\`)} onClick={handelCancel}>\u53D6\u6D88</a>
        {title && <div className={classNames(\`\${pickerCls}-header-title\`)}>{title}</div>}
        <a className={classNames(\`\${pickerCls}-header-button\`)} onClick={handleOk}>\u786E\u5B9A</a>
      </div>
      <div className={classNames(\`\${pickerCls}-body\`)}>
        <PickerView columns={columns}
                    labelInValue={labelInValue}
                    value={internalValue}
                    onChange={(v) => {
                      setInternalValue(v)
                    }}/>
      </div>
    </div>
  </Popup>
})
`},60446:function(e,n){n.Z=`import {PickerView} from "./picker-view"
import {PickerColumnOption} from "./types"
export type {
  PickerColumnOption
}
export default PickerView
`},83339:function(e,n){n.Z=`import classNames from "classnames";
import React, {FC} from "react";
import { PickerColumnOption} from "./types";

const pickerViewCls = "triones-antm-picker-view";

type PickerViewColumnItemProps = {
  option: PickerColumnOption
}
export const PickerViewColumnItem: FC<PickerViewColumnItemProps> = ({

                                                                      option,
                                                                    }) => {
  return <div className={classNames(\`\${pickerViewCls}-column-item\`)}>
    <div className={\`\${pickerViewCls}-column-item-label\`}>
      {option.label}
    </div>
  </div>
}
`},1488:function(e,n){n.Z=`import React, {FC, useEffect, useState} from "react"
import classNames from "classnames";
import {PickerViewColumnItem} from "./picker-view-column-item";
import _ from "lodash";
import {PickerColumnOption} from "./types";

const pickerViewCls = "triones-antm-picker-view";

type PickerViewColumnProps = {
  options?: PickerColumnOption[]
  labelInValue?: boolean
  value?: any
  onChange?: (value: any, index?: number) => void
}

export const PickerViewColumn: FC<PickerViewColumnProps> = React.memo(
  ({
     options,
     labelInValue,
     value,
     onChange,
   }) => {
    const [internalValue, setInternalValue] = useState<any>(value || null);
    const itemHeight = 34;
    const max = 0;
    const min = 0 - (itemHeight * (_.size(options) - 1));
    const [touching, setTouching] = useState<boolean>(false);
    const [touchPoint, setTouchPoint] = React.useState<any>();
    const [translateY, setTranslateY] = useState(0)

    const handleSelectOption = (selectValue: any) => {
      const valueIndex = _.findIndex(options, (option) => {
        if (labelInValue) {
          return option.value === selectValue.value;
        }
        return option.value === selectValue
      })
      setTranslateY(0 - (valueIndex * itemHeight));
    }

    useEffect(() => {
      if (value == undefined) {
        return;
      }
      if (value == internalValue) {
        return;
      }
      setInternalValue(value)
      handleSelectOption(value)
    }, [value]);

    useEffect(() => {
      if (!value) {
        const selectValue = labelInValue ? options?.[0] : options?.[0].value
        setInternalValue(selectValue || null);
        onChange?.(selectValue || null);
        handleSelectOption(selectValue);
      } else {
        handleSelectOption(value);
      }
    }, [options]);

    return <div className={classNames(\`\${pickerViewCls}-column\`)}>
      <div className={classNames(\`\${pickerViewCls}-column-wheel\`)}
           style={{transform: \`translate3d(0, \${translateY}px, 0)\`}}
           onTouchStart={(event) => {
             setTouching(true);
             const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             setTouchPoint(startPoint);
           }}
           onTouchMove={(event) => {
             if (touching) {
               const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
               if (translateY > max || translateY < min) {
                 return;
               }
               setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
               setTouchPoint(movePoint);
             }
           }}
           onTouchEnd={(event) => {
             setTouching(false);
             let selectIndex = 0;
             if (translateY > 0) {
               setTranslateY(0);
               selectIndex = 0;
             } else if (translateY < (0 - itemHeight * (_.size(options) - 1))) {
               setTranslateY(0 - itemHeight * (_.size(options) - 1));
               selectIndex = _.size(options) - 1;
             } else {
               const num = Math.abs(Math.round(translateY / itemHeight));
               setTranslateY(0 - num * itemHeight);
               selectIndex = num;
             }
             console.log("selectIndex", selectIndex)
             const selectValue = labelInValue ? options?.[selectIndex] : options?.[selectIndex].value
             setInternalValue(selectValue);
             onChange?.(selectValue);
           }}
      >
        {!_.isEmpty(options) && options?.map((option: any, index: number) => {
          return <PickerViewColumnItem option={option} key={\`view-column-\${index}\`}/>
        })}
      </div>
    </div>
  }
)
`},79107:function(e,n){n.Z=`import classNames from "classnames";
import _ from "lodash";
import {PickerViewColumn} from "./picker-view-column";
import React, {FC, useEffect, useState} from "react";
import { PickerColumnOption} from "./types";
import "./style.scss"

const pickerViewCls = "triones-antm-picker-view";
type PickerViewProps = {
  columns?: PickerColumnOption[][]
  labelInValue?: boolean
  value?: any[]
  onChange?: (value: any[]) => void
}
export const PickerView: FC<PickerViewProps> = React.memo(({columns, labelInValue, value, onChange}) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: _.size(columns)}).map(() => null))
  useEffect(() => {
    if (value == undefined) {
      return;
    }
    if (value == internalValue) {
      return;
    }
    setInternalValue(value);
  }, [value]);
  return <div className={classNames(\`\${pickerViewCls}\`)}>
    {!_.isEmpty(columns) && columns?.map((column: any, index: number) => {
      return <PickerViewColumn key={\`column-\${index}\`} labelInValue={labelInValue}
                               options={column}
                               value={value?.[index]}
                               onChange={(v) => {
                                 internalValue[index] = v;
                                 onChange?.(internalValue)
                               }}
      />
    })}
    <div className={classNames(\`\${pickerViewCls}-mask\`)}>
      <div className={classNames(\`\${pickerViewCls}-mask-top\`)}/>
      <div className={classNames(\`\${pickerViewCls}-mask-middle\`)}/>
      <div className={classNames(\`\${pickerViewCls}-mask-bottom\`)}/>
    </div>
  </div>
})
`},55782:function(e,n){n.Z=`import { ProgressBar } from './progress-bar'; 
export default ProgressBar;`},314:function(e,n){n.Z=`import classNames from 'classnames';
import React, { FC } from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import './style.scss';

type ProgressBarProps = {
  /**
   * \u8FDB\u5EA6\u767E\u5206\u6BD4
   */
  percent: number;
  /**
   * \u662F\u5426\u4E3A\u5706\u89D2
   */
  rounded?: boolean;
  /**
   * \u8FDB\u5EA6\u6587\u672C
   */
  text?: boolean | React.ReactNode | ((percent: number) => React.ReactNode);
  /**
   * \u81EA\u5B9A\u4E49\u7C7B\u540D
   */
  className?: string;
  /**
   * \u81EA\u5B9A\u4E49\u6837\u5F0F
   */
  style?: React.CSSProperties;
} & NativeProps<
  '--fill-color' | '--track-color' | '--track-width' | '--text-width'
>;

const defaultProps = {
  rounded: true,
};

export const ProgressBar: FC<ProgressBarProps> = (p) => {
  const props = mergeProps(defaultProps, p) as ProgressBarProps;
  const { percent, rounded, className, style, text } = props;

  return withNativeProps(
    props,
    <div className={classNames('triones-antm-progress-bar', className)}>
      <div
        className="triones-antm-progress-bar-track"
        style={{
          ...style,
          borderRadius: rounded ? \`var(--track-width)\` : '0',
        }}
      >
        <div
          className="triones-antm-progress-bar-fill"
          style={{
            width: \`\${percent}%\`,
            borderRadius: rounded ? \`var(--track-width)\` : '0',
          }}
        />
      </div>
      {text && (
        <div className="triones-antm-progress-bar-text">
          {typeof text === 'function'
            ? text(percent)
            : text === true
              ? \`\${percent}%\`
              : text}
        </div>
      )}
    </div>,
  );
};
`},27930:function(e,n){n.Z=`import { createContext } from 'react';
import { RadioValue } from './radio';

export const RadioGroupContext = createContext<{
  value: RadioValue[];
  disabled: boolean;
  check: (val: RadioValue) => void;
  uncheck: (val: RadioValue) => void;
} | null>(null);
`},90875:function(e,n){n.Z=`import type { FC, ReactNode } from 'react';
import React from 'react';
import { usePropsValue } from '../utils/use-props-value';
import { mergeProps } from '../utils/with-default-props';
import { RadioGroupContext } from './group-context';
import { RadioValue } from './radio';

export interface RadioGroupProps {
  value?: RadioValue | null;
  onChange?: (val: RadioValue) => void;
  defaultValue?: RadioValue | null;
  disabled?: boolean;
  children?: ReactNode;
}

const defaultProps = {
  disabled: false,
  defaultValue: null,
};

export const Group: FC<RadioGroupProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: (v) => {
      if (v === null) return;
      props.onChange?.(v);
    },
  });
  return (
    <RadioGroupContext.Provider
      // TODO: \u6027\u80FD\u4F18\u5316
      value={{
        value: value === null ? [] : [value],
        check: (v) => {
          setValue(v);
        },
        uncheck: () => {},
        disabled: props.disabled,
      }}
    >
      {props.children}
    </RadioGroupContext.Provider>
  );
};
`},24874:function(e,n){n.Z=`import { attachPropertiesToComponent } from '../utils/attach-properties-to-component';
import { Group } from './group';
import { Radio } from './radio';
import './style.scss';

export type { RadioGroupProps } from './group';
export type { RadioProps, RadioValue } from './radio';

export default attachPropertiesToComponent(Radio, {
  Group,
});
`},47212:function(e,n){n.Z=`import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React, { useContext } from 'react';
import { CheckIcon } from '../Icon/check-icon';
import { NativeInput } from '../Input/native-input';
import { devWarning } from '../utils/dev-log';
import { isDev } from '../utils/is-dev';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { usePropsValue } from '../utils/use-props-value';
import { mergeProps } from '../utils/with-default-props';
import { RadioGroupContext } from './group-context';

const classPrefix = \`triones-antm-radio\`;

export type RadioValue = string | number;

export type RadioProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  value?: RadioValue;
  block?: boolean;
  id?: string;
  icon?: (checked: boolean) => ReactNode;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>;

const defaultProps = {
  defaultChecked: false,
};

export const Radio: FC<RadioProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const groupContext = useContext(RadioGroupContext);

  let [checked, setChecked] = usePropsValue<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  }) as [boolean, (v: boolean) => void];
  let disabled = props.disabled;

  const { value } = props;
  if (groupContext && value !== undefined) {
    if (isDev) {
      if (p.checked !== undefined) {
        devWarning(
          'Radio',
          'When used within \`Radio.Group\`, the \`checked\` prop of \`Radio\` will not work.',
        );
      }
      if (p.defaultChecked !== undefined) {
        devWarning(
          'Radio',
          'When used within \`Radio.Group\`, the \`defaultChecked\` prop of \`Radio\` will not work.',
        );
      }
    }

    checked = groupContext.value.includes(value);
    setChecked = (innerChecked: boolean) => {
      if (innerChecked) {
        groupContext.check(value);
      } else {
        groupContext.uncheck(value);
      }
      props.onChange?.(innerChecked);
    };
    disabled = disabled || groupContext.disabled;
  }

  const renderIcon = () => {
    if (props.icon) {
      return (
        <div className={\`\${classPrefix}-custom-icon\`}>
          {props.icon(checked)}
        </div>
      );
    }

    return (
      <div className={\`\${classPrefix}-icon\`}>{checked && <CheckIcon />}</div>
    );
  };

  return withNativeProps(
    props,
    <label
      onClick={props.onClick}
      className={classNames(classPrefix, {
        [\`\${classPrefix}-checked\`]: checked,
        [\`\${classPrefix}-disabled\`]: disabled,
        [\`\${classPrefix}-block\`]: props.block,
      })}
    >
      <NativeInput
        type="radio"
        checked={checked}
        onChange={setChecked}
        disabled={disabled}
        id={props.id}
      />
      {renderIcon()}
      {props.children && (
        <div className={\`\${classPrefix}-content\`}>{props.children}</div>
      )}
    </label>,
  );
};
`},77378:function(e,n){n.Z=`import { Rate } from "./rate"

export default Rate;`},23665:function(e,n){n.Z=`import { StarFill } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import './style.scss';

type RateProps = {
  /**
   * \u8BC4\u5206\u503C
   */
  value?: number;
  /**
   * \u9ED8\u8BA4\u8BC4\u5206\u503C
   */
  defaultValue?: number;
  /**
   * \u8BC4\u5206\u603B\u6570
   */
  count?: number;
  /**
   * \u662F\u5426\u5141\u8BB8\u534A\u661F
   */
  allowHalf?: boolean;
  /**
   * \u662F\u5426\u5141\u8BB8\u6E05\u9664
   */
  allowClear?: boolean;
  /**
   * \u662F\u5426\u53EA\u8BFB
   */
  readonly?: boolean;
  /**
   * \u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03
   */
  onChange?: (value: number) => void;
  /**
   * \u81EA\u5B9A\u4E49\u7C7B\u540D
   */
  className?: string;
  /**
   * \u661F\u661F\u5927\u5C0F
   */
  size?: number;
  /**
   * \u81EA\u5B9A\u4E49\u5B57\u7B26
   */
  character?: React.ReactNode;
  /**
   * \u81EA\u5B9A\u4E49\u6837\u5F0F
   */
  style?: React.CSSProperties;
} & NativeProps<'--active-color' | '--inactive-color'>;

const defaultProps = {
  count: 5,
  defaultValue: 0,
  allowHalf: false,
  readonly: false,
  allowClear: true,
  size: 20,
};

export const Rate: FC<RateProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const {
    value,
    defaultValue,
    count,
    allowHalf,
    readonly,
    allowClear,
    size,
    character,
    onChange,
  } = props;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const clsPrefix = 'triones-antm-rate';

  const currentValue = value ?? internalValue;

  const handleClick = (index: number, isHalf: boolean) => {
    if (readonly) return;
    const newValue = isHalf ? index + 0.5 : index + 1;

    if (allowClear) {
      if (
        (!allowHalf && currentValue === newValue) ||
        (allowHalf &&
          currentValue === newValue &&
          currentValue === index + (isHalf ? 0.5 : 1))
      ) {
        if (!value) {
          setInternalValue(0);
        }
        onChange?.(0);
        return;
      }
    }

    if (!value) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return withNativeProps(
    props,
    <div
      className={classNames(clsPrefix, {
        [\`\${clsPrefix}-readonly\`]: readonly,
      })}
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={\`\${clsPrefix}-star-wrapper\`}
          onClick={(e) => {
            if (!allowHalf) {
              handleClick(index, false);
              return;
            }

            const rect = e.currentTarget.getBoundingClientRect();
            const isHalf = e.clientX - rect.left < rect.width / 2;
            handleClick(index, isHalf);
          }}
        >
          {character ? (
            <>
              <div
                className={classNames(\`\${clsPrefix}-star\`, {
                  [\`\${clsPrefix}-star-active\`]: index + 1 <= currentValue,
                })}
                style={{
                  fontSize: size,
                }}
              >
                {character}
              </div>
              {allowHalf && (
                <div
                  className={classNames(
                    \`\${clsPrefix}-star\`,
                    \`\${clsPrefix}-star-half-item\`,
                    {
                      [\`\${clsPrefix}-star-active\`]: index + 0.5 <= currentValue,
                    },
                  )}
                  style={{
                    fontSize: size,
                  }}
                >
                  {character}
                </div>
              )}
            </>
          ) : (
            <>
              <StarFill
                className={classNames(\`\${clsPrefix}-star\`, {
                  [\`\${clsPrefix}-star-active\`]: index + 1 <= currentValue,
                })}
                style={{
                  fontSize: size,
                }}
              />
              {allowHalf && (
                <StarFill
                  className={classNames(
                    \`\${clsPrefix}-star\`,
                    \`\${clsPrefix}-star-half-item\`,
                    {
                      [\`\${clsPrefix}-star-active\`]: index + 0.5 <= currentValue,
                    },
                  )}
                  style={{
                    fontSize: size,
                  }}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
`},12125:function(e,n){n.Z=`
import { Result } from './result'

export type { ResultProps } from './result'

export default Result
`},12269:function(e,n){n.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { useResultIcon } from './use-result-icon'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { mergeProps } from '../utils/with-default-props'
import './style.scss'

const classPrefix = \`triones-antm-result\`

const defaultProps = {
  status: 'info',
}

export type ResultProps = {
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
} & NativeProps

export const Result: FC<ResultProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { status, title, description, icon } = props
  const fallbackIcon = useResultIcon(status)
  if (!status) return null

  return withNativeProps(
    props,
    <div className={classNames(classPrefix, \`\${classPrefix}-\${status}\`)}>
      <div className={\`\${classPrefix}-icon\`}>{icon || fallbackIcon}</div>
      <div className={\`\${classPrefix}-title\`}>{title}</div>
      {!!description && (
        <div className={\`\${classPrefix}-description\`}>{description}</div>
      )}
    </div>
  )
}
`},25113:function(e,n){n.Z=`import React from 'react'
import { useConfig } from '../ConfigProvider'
import { CheckCircleOutline, CloseCircleOutline, InformationCircleOutline, ClockCircleOutline, ExclamationTriangleOutline } from '@trionesdev/antd-taro-icons-react'


export const useResultIcon = (
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
) => {
  const { result: componentConfig = {} } = useConfig()
  const {
    successIcon = <CheckCircleOutline style={{ fontSize: "48PX" }} />,
    errorIcon = <CloseCircleOutline style={{ fontSize: "48PX" }} />,
    infoIcon = <InformationCircleOutline style={{ fontSize: "48PX" }} />,
    waitingIcon = <ClockCircleOutline style={{ fontSize: "48PX" }} />,
    warningIcon = <ExclamationTriangleOutline style={{ fontSize: "48PX" }} />,
  } = componentConfig || {}
  switch (status) {
    case 'success':
      return successIcon
    case 'error':
      return errorIcon
    case 'info':
      return infoIcon
    case 'waiting':
      return waitingIcon
    case 'warning':
      return warningIcon
    default:
      return null
  }
}
`},58542:function(e,n){n.Z=`import { SafeArea } from './safe-area';
import './style.scss';

export type { SafeAreaProps } from './safe-area';

export default SafeArea;
`},19781:function(e,n){n.Z=`import type { FC } from 'react';
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
`},21439:function(e,n){n.Z=`import {SpinLoading} from "./spin-loading"

export default SpinLoading
`},7134:function(e,n){n.Z=`$spinLoadingCls: triones-antm-spin-loading;

.#{$spinLoadingCls} {
  --size: 32Px;
  --color: #1677ff;
  width: var(--size);
  height: var(--size);

  &-svg {
    width: 100%;
    height: 100%;
    //animation: adm-spin-loading-rotate 0.8s infinite linear;

    > .#{$spinLoadingCls}-circle {
      //stroke: #1677ff;
      stroke: var(--color);
    }
  }

  &-loading {
    color: var(--color);
    display: inline-block;
    height: 100%;
    width: 100%;
    background: currentColor;
    mask-image: var(--maskImage);
    -webkit-mask-image: var(--maskImage);
    animation: adm-spin-loading-rotate 2s infinite linear;
  }

}

@keyframes adm-spin-loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`},38883:function(e,n){n.Z=`import React, {FC} from "react";
import classNames from "classnames";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import "./spin-loading.scss"
import ReactDOMServer from 'react-dom/server';


const spinLoadingCls = 'triones-antm-spin-loading';
export type SpinLoadingProps = {
  size?: 'small' | 'middle' | 'large' | number
  color?: 'default' | 'primary' | 'white' | string
}

export function SvgComponent(props: { stroke: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}} viewBox='0 0 32 32'>
    <circle
      r="15"
      cx="16"
      cy="16"
      strokeWidth="2"
      stroke={props.stroke}
      fill='transparent'
      strokeLinecap='round'
      strokeDasharray={15 * 3.14159265358979 * 2}
      strokeDashoffset={15 * 3.14159265358979 * 0.5}
    />
  </svg>
}

export const SpinLoading: FC<SpinLoadingProps> = ({
                                                    size = 'middle',
                                                    color = 'default'
                                                  }) => {

  const computedSize = React.useMemo(() => {
    let resSize = null
    if (size === 'small') {
      resSize = '24Px'
    } else if (size === 'middle') {
      resSize = '32Px'
    } else if (size === 'large') {
      resSize = '48Px'
    } else {
      resSize = size
    }
    if (typeof resSize === 'number') {
      return \`\${resSize}Px\`
    } else {
      return resSize
    }
  }, [size])

  const computedColor = React.useMemo(() => {
    if (color === 'default') {
      return '#9D9D9D'
    } else if (color === 'primary') {
      return '#1677ff'
    } else if (color === 'white') {
      return '#ffffff'
    } else {
      return color
    }
  }, [color])

  const completedStyle: any = React.useMemo(() => {
    const maskImageSvg = ReactDOMServer.renderToString(<SvgComponent stroke={computedColor}/>)
    return {
      '--size': computedSize,
      '--color': computedColor,
      '--maskImage': \`url(data:image/svg+xml;base64,\${Base64.stringify(Utf8.parse(maskImageSvg))})\`
    }
  }, [computedSize, computedColor])

  return <div className={classNames(spinLoadingCls)} style={completedStyle}>
    <i  className={classNames(\`\${spinLoadingCls}-loading\`)}/>
  </div>
}
`},96136:function(e,n){n.Z=`import { Switch } from './switch'

export type { SwitchProps } from './switch'

export default Switch
`},92084:function(e,n){n.Z=`import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../utils/native-props'

export const SpinIcon = memo<NativeProps>(props => {
  return withNativeProps(
    props,
    <svg width='28px' height='28px' viewBox='0 0 28 28'>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-137.000000, -840.000000)' fill='#1576FE'>
          <g transform='translate(80.000000, 823.000000)'>
            <g transform='translate(53.000000, 13.000000)'>
              <path d='M17.9996753,31.5 C10.5556724,31.5 4.5,25.4443275 4.5,18.0003247 C4.5,10.5563219 10.5556724,4.5 17.9996753,4.5 C18.5355492,4.5 18.9702974,4.93474816 18.9702974,5.47062208 C18.9702974,6.006496 18.5355492,6.44124416 17.9996753,6.44124416 C11.6261524,6.44124416 6.44124416,11.6267709 6.44124416,18.0002938 C6.44124416,24.3738167 11.6261524,29.5587249 17.9996753,29.5587249 C24.3731982,29.5587249 29.5587249,24.3738167 29.5587249,18.0002938 C29.5587249,14.7964616 28.2778291,11.8169616 25.9523687,9.61220279 C25.5637302,9.24317094 25.5473089,8.62893223 25.9157222,8.23967523 C26.2841356,7.84976878 26.8989928,7.83461537 27.2882498,8.20302872 C30.0042351,10.7787368 31.5,14.2580826 31.5,18.0002938 C31.5,25.4443275 25.4436781,31.5 17.9996753,31.5 Z' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
})
`},50518:function(e,n){n.Z=`import classNames from 'classnames'
import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SpinIcon } from './spin-icon'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { mergeProps } from '../utils/with-default-props'
import { useConfig } from '../ConfigProvider'
import { usePropsValue } from '../utils/use-props-value'
import { isPromise } from '../utils/validate'

import './style.scss'

const classPrefix = \`triones-antm-switch\`

export type SwitchProps = {
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  /** @deprecated use \`onChange\` instead */
  beforeChange?: (val: boolean) => Promise<void>
  onChange?: (checked: boolean) => void | Promise<void>
  checkedText?: ReactNode
  uncheckedText?: ReactNode
} & NativeProps<'--checked-color' | '--width' | '--height' | '--border-width'>

const defaultProps = {
  defaultChecked: false,
}

export const Switch: FC<SwitchProps> = p => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading || false
  const [changing, setChanging] = useState(false)
  const { locale } = useConfig()

  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  })

  async function onClick() {
    if (disabled || props.loading || changing) {
      return
    }
    const nextChecked = !checked
    if (props.beforeChange) {
      setChanging(true)
      try {
        await props.beforeChange(nextChecked)
        setChanging(false)
      } catch (e) {
        setChanging(false)
        throw e
      }
    }
    const result = setChecked(nextChecked)
    if (isPromise(result)) {
      setChanging(true)
      try {
        await result
        setChanging(false)
      } catch (e) {
        setChanging(false)
        throw e
      }
    }
  }

  return withNativeProps(
    props,
    <div
      onClick={onClick}
      className={classNames(classPrefix, {
        [\`\${classPrefix}-checked\`]: checked,
        [\`\${classPrefix}-disabled\`]: disabled || changing,
      })}
      role='switch'
      aria-label={locale.Switch.name}
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <div className={\`\${classPrefix}-checkbox\`}>
        <div className={\`\${classPrefix}-handle\`}>
          {(props.loading || changing) && (
            <SpinIcon className={\`\${classPrefix}-spin-icon\`} />
          )}
        </div>
        <div className={\`\${classPrefix}-inner\`}>
          {checked ? props.checkedText : props.uncheckedText}
        </div>
      </div>
    </div>
  )
}
`},51073:function(e,n){n.Z=`import { TabBar as InternalTabBar, TabBarItem } from "./tab-bar"

type CompoundedComponent = typeof InternalTabBar & {
  Item: typeof TabBarItem
}

const TabBar = InternalTabBar as CompoundedComponent

export default TabBar
`},52267:function(e,n){n.Z=`import "./index.scss"
import React, {FC} from "react";
import classNames from "classnames";

type TabBarItemType = {
  key: string
  label?: React.ReactNode
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  disabled?: boolean
  active?: boolean
  activeKey?: string
  onClick?: () => void
}

type TabBarItemProps = Omit<TabBarItemType, 'key'> & {}

export type TabBarProps = {
  items: TabBarItemType[]
  onClick?: (e: { item?: TabBarItemType }) => void
}
const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItemProps> = ({
                                                  label,
                                                  icon,
                                                  activeIcon,
                                                  activeKey,
                                                  active,
                                                  onClick,
                                                  ...props
                                                }) => {
  console.log(props)

  const displayIcon = active ? (activeIcon ?? icon) : icon
  return <div className={classNames(\`\${tabBarCls}-item\`, {
    [\`\${tabBarCls}-item-active\`]: active
  })} onClick={() => onClick?.()}>
    <div>{displayIcon}</div>
    <div className={classNames(\`\${tabBarCls}-item-label\`)}>{label}</div>
  </div>
}


export const TabBar: FC<TabBarProps> = ({items, onClick}) => {
  const [innerActiveKey, setInnerActiveKey] = React.useState<string | undefined>()


  return <div className={classNames(tabBarCls)}>
    <div className={classNames(\`\${tabBarCls}-wrap\`)}>
      {items.map(item => <TabBarItem {...item} activeKey={innerActiveKey} active={item.key === innerActiveKey}
                                     onClick={() => {
                                       onClick?.({item})
                                       setInnerActiveKey(item.key)
                                       console.log()
                                       console.log(item)
                                     }}/>)}
    </div>
  </div>
}
`},94346:function(e,n){n.Z=`import {Tag, TagProps} from "./tag"

export type {
  TagProps
}
export default Tag
`},4672:function(e,n){n.Z=`import classNames from 'classnames';
import React, { FC } from 'react';
import './style.scss';

export type TagProps = {
  children?: React.ReactNode;
  /**
   * \u6807\u7B7E\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | string;
  /**
   * \u586B\u5145\u6A21\u5F0F
   */
  fill?: 'solid' | 'outline';
  /**
   * \u70B9\u51FB\u65F6\u7684\u56DE\u8C03
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * \u662F\u5426\u5706\u89D2
   */
  round?: boolean;
  /**
   * \u81EA\u5B9A\u4E49\u7C7B\u540D
   */
  className?: string;
  /**
   * \u81EA\u5B9A\u4E49\u6837\u5F0F
   */
  style?: React.CSSProperties;
};

export const Tag: FC<TagProps> = ({
  children,
  color = 'default',
  fill = 'solid',
  onClick,
  className,
  style,
  round = false,
  ...props
}) => {
  const clsPrefix = 'triones-antm-tag';

  // \u662F\u5426\u662F\u9884\u8BBE\u989C\u8272
  const isPresetColor = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
  ].includes(color);

  const customStyle = !isPresetColor
    ? {
        ...(fill === 'solid'
          ? {
              backgroundColor: color,
              color: '#fff',
            }
          : {
              color: color,
              borderColor: color,
              backgroundColor: 'transparent',
            }),
        ...style,
      }
    : style;

  return (
    <div
      className={classNames(
        clsPrefix,
        {
          [\`\${clsPrefix}-\${color}\`]: isPresetColor,
          [\`\${clsPrefix}-\${fill}\`]: fill,
          [\`\${clsPrefix}-\${round ? 'round' : 'square'}\`]: round,
        },
        className,
      )}
      style={customStyle}
      {...props}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
`},4628:function(e,n){n.Z=`import {Toast as ToastInst,InternalToast , ToastProps} from "./toast"

type InternalToastType = typeof InternalToast;

type CompoundedComponent = InternalToastType & {
  show: typeof ToastInst.show
}

const Toast = InternalToast as CompoundedComponent
Toast.show = ToastInst.show
export type {ToastProps};
export default Toast
`},74924:function(e,n){n.Z=`import {FC, memo, useEffect, useMemo, useRef, useState} from "react";
import classNames from "classnames";
import React from "react";

import "./style.scss"
import Mask from "../Mask";
import {CheckOutline, CloseOutline} from "@trionesdev/antd-taro-icons-react";
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
`},59830:function(e,n){n.Z=`import React, {forwardRef, useEffect, useImperativeHandle} from "react";
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
`},14086:function(e,n){n.Z=`import { WaterMark } from './water-mark'

export type { WaterMarkProps } from './water-mark'

export default WaterMark
`},25803:function(e,n){n.Z=`import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { mergeProps } from '../utils/with-default-props'

import './style.scss'

const classPrefix = \`triones-antm-water-mark\`

export type WaterMarkProps = {
  gapX?: number
  gapY?: number
  zIndex?: number
  width?: number
  height?: number
  rotate?: number
  image?: string
  imageWidth?: number
  imageHeight?: number
  content?: string | string[]
  fontColor?: string
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
  fontWeight?: 'normal' | 'light' | 'weight' | number
  fontSize?: number | string
  fullPage?: boolean
} & NativeProps<'--z-index'>

const defaultProps = {
  fullPage: true,
}

export const WaterMark: FC<WaterMarkProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    zIndex,
    gapX = 24,
    gapY = 48,
    width = 120,
    height = 64,
    rotate = -22,
    image,
    imageWidth = 120,
    imageHeight = 64,
    content,
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = 'rgba(0,0,0,.15)',
    fontSize = 14,
    fontFamily = 'sans-serif',
  } = props

  const [base64Url, setBase64Url] = useState('')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ratio = window.devicePixelRatio
    const ctx = canvas.getContext('2d')

    const canvasWidth = \`\${(gapX + width) * ratio}px\`
    const canvasHeight = \`\${(gapY + height) * ratio}px\`

    const markWidth = width * ratio
    const markHeight = height * ratio

    canvas.setAttribute('width', canvasWidth)
    canvas.setAttribute('height', canvasHeight)

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.referrerPolicy = 'no-referrer'
        img.onload = () => {
          ctx.drawImage(
            img,
            (-imageWidth * ratio) / 2,
            (-imageHeight * ratio) / 2,
            imageWidth * ratio,
            imageHeight * ratio
          )
          ctx.restore()
          setBase64Url(canvas.toDataURL())
        }
        img.src = image
      } else if (content) {
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        // \u6587\u5B57\u7ED5\u4E2D\u95F4\u65CB\u8F6C
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const markSize = Number(fontSize) * ratio
        ctx.font = \`\${fontStyle} normal \${fontWeight} \${markSize}px/\${markHeight}px \${fontFamily}\`
        ctx.fillStyle = fontColor
        if (Array.isArray(content)) {
          content.forEach((item: string, index: number) =>
            ctx.fillText(item, 0, index * markSize)
          )
        } else {
          ctx.fillText(content, 0, 0)
        }
        ctx.restore()
        setBase64Url(canvas.toDataURL())
      }
    } else {
      throw new Error('Canvas is not supported in the current environment')
    }
  }, [
    gapX,
    gapY,
    rotate,
    fontStyle,
    fontWeight,
    width,
    height,
    fontFamily,
    fontColor,
    image,
    content,
    fontSize,
  ])

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [\`\${classPrefix}-full-page\`]: props.fullPage,
      })}
      style={{
        zIndex,
        backgroundSize: \`\${gapX + width}px\`,

        // Not give \`url\` if its empty. Which will cause 404 error.
        backgroundImage: base64Url === '' ? undefined : \`url('\${base64Url}')\`,
      }}
    />
  )
}
`},39920:function(e,n){n.Z=`import './style';

export {default as Avatar} from './Avatar';
export {default as Badge} from './Badge';
export {default as Button} from './Button';
export type {ButtonProps} from './Button';
export {default as Card} from './Card';
export {default as Checkbox} from './Checkbox';
export {default as ConfigProvider} from './ConfigProvider';
export {default as Divider} from './Divider';
export {default as Ellipsis} from './Ellipsis';
export {default as Empty} from './Empty';
export {default as ErrorBlock} from './ErrorBlock';
export {default as Footer} from './Footer';
export {default as Grid} from './Grid';
export {default as Image} from './Images';
export {default as Input} from './Input';
export type {InputOPTProps, InputPasswordProps, InputProps} from './Input';
export {default as NavBar} from './NavBar';
export {default as NoticeBar} from './NoticeBar';
export {default as PageIndicator} from './PageIndicator';

export {default as ProgressBar} from './ProgressBar';
export {default as Radio} from './Radio';
export {default as Rate} from './Rate';
export {default as Result} from './Result';
export {default as Space} from './Space';
export {default as SpinLoading} from './SpinLoading';
export {default as Switch} from './Switch';
export {default as TabBar} from './TabBar';
export {default as Tag} from './Tag';
export type {TagProps} from './Tag';
export {default as Toast} from './Toast';
export type {ToastProps} from './Toast';
export {default as WaterMark} from './WaterMark';

export {default as CascaderPicker} from './CascaderPicker';
export type {CascaderPickerProps} from './CascaderPicker';
export {default as CascaderView} from './CascaderView';
export type {CascaderViewProps} from './CascaderView';
export {default as Form} from './Form';
export type {FormItemProps, FormProps} from './Form';

export {default as Mark} from './Mark';
export {default as Picker} from './Picker';
export type {PickerProps} from './Picker';
export {default as PickerView} from './PickerView';
export {default as Popup} from './Popup';
export type {PopupProps} from './Popup';
export {default as SafeArea} from './SafeArea';
export {default as Tabs} from './Tabs';
export type {TabsProps} from './Tabs';
`},7728:function(e,n){n.Z=`import './style.scss';

const canUseDom = !!(
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document &&
  window.document.createElement
);
if (canUseDom) {
  document.addEventListener('touchstart', () => {}, true);
}
`},25059:function(e,n){n.Z=`export function attachPropertiesToComponent<C, P extends Record<string, any>>(
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
`},72718:function(e,n){n.Z=`export const canUseDom = !!(
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document &&
  window.document.createElement
);
`},86363:function(e,n){n.Z=`import { isDev } from './is-dev';

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
`},19274:function(e,n){n.Z=`export type GetContainer = () => HTMLElement;

export function resolveContainer(
  getContainer: HTMLElement | GetContainer | undefined | null,
) {
  const container =
    typeof getContainer === 'function'
      ? (getContainer as GetContainer)()
      : getContainer;
  return container || document.body;
}
`},13153:function(e,n){n.Z=`import { canUseDom } from './can-use-dom';

type ScrollElement = HTMLElement | Window;

const defaultRoot = canUseDom ? window : undefined;

const overflowStylePatterns = ['scroll', 'auto', 'overlay'];

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
}
export function getScrollParent(
  el: Element,
  root: ScrollElement | null | undefined = defaultRoot,
): Window | Element | null | undefined {
  let node = el;

  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }
    const { overflowY } = window.getComputedStyle(node);
    if (
      overflowStylePatterns.includes(overflowY) &&
      node.scrollHeight > node.clientHeight
    ) {
      return node;
    }
    node = node.parentNode as Element;
  }
  return root;
}
`},52732:function(e,n){n.Z=`export const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
`},8078:function(e,n){n.Z=`import type { ReactElement, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { canUseDom } from './can-use-dom';
import { resolveContainer } from './get-container';

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement,
) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container) as ReactPortal;
  }
  return node;
}
`},58109:function(e,n){n.Z=`import type { FC, ReactElement } from 'react';
import { useInitialized } from './use-initialized';
interface Props {
  active: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children: ReactElement;
}
export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean,
) {
  const initialized = useInitialized(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}

export const ShouldRender: FC<Props> = (props) => {
  const shouldRender = useShouldRender(
    props.active,
    props.forceRender,
    props.destroyOnClose,
  );
  return shouldRender ? props.children : null;
};
`},31878:function(e,n){n.Z=`import { canUseDom } from './can-use-dom';

export let supportsPassive = false;

if (canUseDom) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
  } catch (e) {}
}
`},1091:function(e,n){n.Z="export function toCSSLength(val: string | number) {\n  return typeof val === 'number' ? `${val}px` : val;\n}\n"},34626:function(e,n){n.Z=`import type React from 'react';
import type { CSSProperties, ReactNode } from 'react'

/** https://github.com/Microsoft/TypeScript/issues/29729 */
export type LiteralUnion<T extends string> = T | (string & {});

export type AnyObject = Record<PropertyKey, any>;

export type CustomComponent<P = AnyObject> = React.ComponentType<P> | string;

/**
 * Get component props
 * @example
 * \`\`\`ts
 * import { Checkbox } from 'antd'
 * import type { GetProps } from 'antd';
 *
 * type CheckboxGroupProps = GetProps<typeof Checkbox.Group>
 * \`\`\`
 * @since 5.13.0
 */
export type GetProps<T extends React.ComponentType<any> | object> = T extends React.ComponentType<
  infer P
>
  ? P
  : T extends object
    ? T
    : never;

/**
 * Get component props by component name
 * @example
 * \`\`\`ts
 * import { Select } from 'antd';
 * import type { GetProp, SelectProps } from 'antd';
 *
 * type SelectOption1 = GetProp<SelectProps, 'options'>[number];
 * // or
 * type SelectOption2 = GetProp<typeof Select, 'options'>[number];
 *
 * const onChange: GetProp<typeof Select, 'onChange'> = (value, option) => {
 *  // Do something
 * };
 * \`\`\`
 * @since 5.13.0
 */
export type GetProp<
  T extends React.ComponentType<any> | object,
  PropName extends keyof GetProps<T>,
> = NonNullable<GetProps<T>[PropName]>;

type ReactRefComponent<Props extends { ref?: React.Ref<any> | string }> = (
  props: Props,
) => React.ReactNode;

type ExtractRefAttributesRef<T> = T extends React.RefAttributes<infer P> ? P : never;

/**
 * Get component ref
 * @example
 * \`\`\`ts
 * import { Input } from 'antd';
 * import type { GetRef } from 'antd';
 *
 * type InputRef = GetRef<typeof Input>;
 * \`\`\`
 * @since 5.13.0
 */
export type GetRef<T extends ReactRefComponent<any> | React.Component<any>> =
  T extends React.Component<any>
    ? T
    : T extends React.ComponentType<infer P>
      ? ExtractRefAttributesRef<P>
      : never;

export type GetContextProps<T> = T extends React.Context<infer P> ? P : never;

export type GetContextProp<
  T extends React.Context<any>,
  PropName extends keyof GetContextProps<T>,
> = NonNullable<GetContextProps<T>[PropName]>;


export interface BasicComponent {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  id?: string
}

export const ComponentDefaults = {
  className: '',
  style: {},
}
`},81802:function(e,n){n.Z=`import { useRef } from 'react';

export function useInitialized(check?: boolean) {
  const initializedRef = useRef(check);
  if (check) {
    initializedRef.current = true;
  }
  return !!initializedRef.current;
}
`},71703:function(e,n){n.Z=`import { createUpdateEffect, useIsomorphicLayoutEffect } from 'ahooks';

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect,
);
`},26507:function(e,n){n.Z=`import { RefObject, useEffect } from 'react';
import { getScrollParent } from './get-scroll-parent';
import { supportsPassive } from './supports-passive';
import { useTouch } from './use-touch';

let totalLockCount = 0;

const BODY_LOCK_CLASS = 'triones-antm-overflow-hidden';

function getScrollableElement(el: HTMLElement | null) {
  let current = el?.parentElement;

  while (current) {
    if (current.clientHeight < current.scrollHeight) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}

// \u79FB\u690D\u81EAvant\uFF1Ahttps://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts
export function useLockScroll(
  rootRef: RefObject<HTMLElement>,
  shouldLock: boolean | 'strict',
) {
  const touch = useTouch();

  const onTouchMove = (event: TouchEvent) => {
    touch.move(event);

    const direction = touch.deltaY.current > 0 ? '10' : '01';
    const el = getScrollParent(
      event.target as Element,
      rootRef.current,
    ) as HTMLElement;
    if (!el) return;

    // This has perf cost but we have to compatible with iOS 12
    if (shouldLock === 'strict') {
      const scrollableParent = getScrollableElement(
        event.target as HTMLElement,
      );
      if (
        scrollableParent === document.body ||
        scrollableParent === document.documentElement
      ) {
        event.preventDefault();
        return;
      }
    }

    const { scrollHeight, offsetHeight, scrollTop } = el;
    const { height } = el.getBoundingClientRect();
    let status = '11';

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollHeight <= Math.round(height + scrollTop)) {
      status = '10';
    }

    if (
      status !== '11' &&
      touch.isVertical() &&
      !(parseInt(status, 2) & parseInt(direction, 2))
    ) {
      if (event.cancelable && supportsPassive) {
        // https://github.com/ant-design/ant-design-mobile/issues/6282
        event.preventDefault();
      }
    }
  };

  const lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener(
      'touchmove',
      onTouchMove,
      supportsPassive ? { passive: false } : false,
    );

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount++;
  };

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);

      totalLockCount--;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };

  useEffect(() => {
    if (shouldLock) {
      lock();
      return () => {
        unlock();
      };
    }
  }, [shouldLock]);
}
`},80742:function(e,n){n.Z=`import { useMemoizedFn } from 'ahooks'
import { RefObject, useEffect } from 'react'

export function observe(
  element: HTMLElement | null,
  options: MutationObserverInit,
  callback: VoidFunction
) {
  if (element && typeof MutationObserver !== 'undefined') {
    let observer: MutationObserver | null = new MutationObserver(() => {
      callback()
    })
    observer.observe(element, options)

    // Return cleanup function
    return () => {
      if (observer) {
        observer.disconnect()
        observer = null
      }
    }
  }

  return () => { }
}

export function useMutationEffect(
  effect: () => void,
  targetRef: RefObject<HTMLElement>,
  options: MutationObserverInit
) {
  const fn = useMemoizedFn(effect)
  useEffect(() => {
    const cleanup = observe(targetRef.current, options, fn)
    return cleanup
  }, [targetRef])
}
`},7482:function(e,n){n.Z=`import { useMemoizedFn, useUpdate } from 'ahooks';
import { SetStateAction, useRef } from 'react';

type Options<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
};

export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue);
  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = useMemoizedFn(
    (v: SetStateAction<T>, forceTrigger: boolean = false) => {
      // \`forceTrigger\` means trigger \`onChange\` even if \`v\` is the same as \`stateRef.current\`
      const nextValue =
        typeof v === 'function'
          ? (v as (prevState: T) => T)(stateRef.current)
          : v;
      if (!forceTrigger && nextValue === stateRef.current) return;
      stateRef.current = nextValue;
      update();
      return onChange?.(nextValue);
    },
  );
  return [stateRef.current, setState] as const;
}
`},59645:function(e,n){n.Z=`import { RefObject } from 'react'
import { useIsomorphicLayoutEffect, useMemoizedFn } from 'ahooks'

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  targetRef: RefObject<T>
) {
  const fn = useMemoizedFn(effect)
  useIsomorphicLayoutEffect(() => {
    const target = targetRef.current
    if (!target) return
    if (window.ResizeObserver) {
      let animationFrame: number
      const observer = new ResizeObserver(() => {
        animationFrame = window.requestAnimationFrame(() => fn(target))
      })
      observer.observe(target)
      return () => {
        window.cancelAnimationFrame(animationFrame)
        observer.disconnect()
      }
    } else {
      fn(target)
    }
  }, [targetRef])
}
`},82718:function(e,n){n.Z=`import { useRef } from 'react';

const MIN_DISTANCE = 10;

type Direction = '' | 'vertical' | 'horizontal';

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

export function useTouch() {
  const startX = useRef(0);
  const startY = useRef(0);
  const deltaX = useRef(0);
  const deltaY = useRef(0);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const direction = useRef<Direction>('');

  const isVertical = () => direction.current === 'vertical';
  const isHorizontal = () => direction.current === 'horizontal';

  const reset = () => {
    deltaX.current = 0;
    deltaY.current = 0;
    offsetX.current = 0;
    offsetY.current = 0;
    direction.current = '';
  };

  const start = ((event: TouchEvent) => {
    reset();
    startX.current = event.touches[0].clientX;
    startY.current = event.touches[0].clientY;
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    // Fix: Safari back will set clientX to negative number
    deltaX.current = touch.clientX < 0 ? 0 : touch.clientX - startX.current;
    deltaY.current = touch.clientY - startY.current;
    offsetX.current = Math.abs(deltaX.current);
    offsetY.current = Math.abs(deltaY.current);

    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current);
    }
  }) as EventListener;

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  };
}
`},69656:function(e,n){n.Z=`export function isPromise(obj: unknown): obj is Promise<unknown> {
  return (
    !!obj && typeof obj === 'object' && typeof (obj as any).then === 'function'
  )
}
`},60751:function(e,n){n.Z=`import React from 'react'
import type { ReactElement } from 'react'
export type PropagationEvent = 'click' | 'touchstart'

const eventToPropRecord: Record<PropagationEvent, string> = {
  'click': 'onClick',
  'touchstart': 'onTouchStart'
}

export function withStopPropagation(
  events: PropagationEvent[],
  element: ReactElement
) {
  const props: Record<string, any> = { ...element.props }
  for (const key of events) {
    const prop = eventToPropRecord[key]
    props[prop] = function (e: Event) {
      e.stopPropagation()
      element.props[prop]?.(e)
    }
  }
  return React.cloneElement(element, props)
}
`}}]);

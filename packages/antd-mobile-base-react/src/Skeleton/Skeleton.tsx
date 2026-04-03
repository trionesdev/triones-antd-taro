import classNames from 'classnames';
import type { CSSProperties, FC, ReactNode } from 'react';
import React from 'react';
import './style.scss';

const prefixCls = 'triones-antm-skeleton';

export type SkeletonAvatarShape = 'circle' | 'square';
export type SkeletonAvatarSize = 'small' | 'medium' | 'large';

export interface SkeletonAvatarProps {
  className?: string;
  style?: CSSProperties;
  shape?: SkeletonAvatarShape;
  size?: SkeletonAvatarSize | number;
  active?: boolean;
}

export interface SkeletonTitleProps {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  active?: boolean;
}

export interface SkeletonParagraphProps {
  className?: string;
  style?: CSSProperties;
  rows?: number;
  /** 单行宽度；数组时为每行宽度，与 antd 一致 */
  width?: number | string | Array<number | string>;
  active?: boolean;
}

export interface SkeletonInputProps {
  className?: string;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
}

export type SkeletonButtonShape = 'default' | 'square' | 'round' | 'circle';

export interface SkeletonButtonProps {
  className?: string;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
  shape?: SkeletonButtonShape;
  block?: boolean;
  active?: boolean;
}

/** 简单块模式：与历史 API 兼容 */
export type SkeletonBlockType = 'text' | 'circle' | 'rect';

export type SkeletonProps = {
  /** 为 true 时显示骨架，为 false 时渲染子节点 */
  loading?: boolean;
  /** 是否展示扫光动画，对应 antd `active` */
  active?: boolean;
  /** 同 `active`，兼容旧属性 */
  animated?: boolean;
  /** 标题占位 */
  title?: boolean | SkeletonTitleProps;
  /** 段落占位 */
  paragraph?: boolean | SkeletonParagraphProps;
  /** 左侧头像占位 */
  avatar?: boolean | SkeletonAvatarProps;
  /** 标题与段落是否使用大圆角 */
  round?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * `composed`：标题+段落组合（默认，对齐 [antd Skeleton](https://ant.design/components/skeleton-cn)）；可配合 `avatar`
   * `block`：单行/单块占位（兼容历史 `type` + `rows`）
   */
  mode?: 'composed' | 'block';
  /** 仅在 mode=block 时生效 */
  type?: SkeletonBlockType;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  rows?: number;
};

/** 使用 px，保证 H5 / 文档站点可渲染（浏览器不支持 rpx） */
const sizeToPx: Record<Exclude<SkeletonAvatarSize, number>, number> = {
  small: 32,
  medium: 44,
  large: 56,
};

const inputHeightPx: Record<NonNullable<SkeletonInputProps['size']>, number> = {
  small: 24,
  medium: 32,
  large: 40,
};

const buttonSizePx: Record<NonNullable<SkeletonButtonProps['size']>, number> = {
  small: 28,
  medium: 32,
  large: 36,
};

function toCssSize(v: number | string | undefined): string | undefined {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
}

function normalizeActive(active?: boolean, animated?: boolean): boolean {
  if (active !== undefined) return active;
  if (animated !== undefined) return animated;
  return true;
}

export const SkeletonAvatar: FC<SkeletonAvatarProps> = ({
  className,
  style,
  shape = 'circle',
  size = 'medium',
  active = true,
}) => {
  const dim =
    typeof size === 'number' ? `${size}px` : `${sizeToPx[size]}px`;
  return (
    <div
      className={classNames(
        `${prefixCls}-avatar`,
        `${prefixCls}-avatar-${shape}`,
        { [`${prefixCls}-element-active`]: active },
        className,
      )}
      style={{ width: dim, height: dim, ...style }}
    />
  );
};

export const SkeletonTitle: FC<SkeletonTitleProps> = ({
  className,
  style,
  width,
  active = true,
}) => (
  <div
    className={classNames(`${prefixCls}-title`, { [`${prefixCls}-element-active`]: active }, className)}
    style={{
      width: width !== undefined ? toCssSize(width) : undefined,
      ...style,
    }}
  />
);

export const SkeletonParagraph: FC<SkeletonParagraphProps> = ({
  className,
  style,
  rows = 3,
  width,
  active = true,
}) => {
  const list = Array.from({ length: rows }, (_, i) => {
    let w: string | undefined;
    if (Array.isArray(width)) {
      const raw = width[i] ?? width[width.length - 1];
      w = raw !== undefined ? toCssSize(raw) : undefined;
    } else if (width !== undefined && i === rows - 1) {
      w = toCssSize(width);
    }
    if (w === undefined && i === rows - 1) {
      w = '62%';
    }
    return (
      <div
        key={i}
        className={classNames(`${prefixCls}-paragraph-line`, { [`${prefixCls}-element-active`]: active })}
        style={w ? { width: w } : undefined}
      />
    );
  });
  return (
    <div className={classNames(`${prefixCls}-paragraph`, className)} style={style}>
      {list}
    </div>
  );
};

export const SkeletonInput: FC<SkeletonInputProps> = ({
  className,
  style,
  size = 'medium',
  active = true,
}) => (
  <div
    className={classNames(`${prefixCls}-input`, { [`${prefixCls}-element-active`]: active }, className)}
    style={{ height: `${inputHeightPx[size]}px`, ...style }}
  />
);

export const SkeletonButton: FC<SkeletonButtonProps> = ({
  className,
  style,
  size = 'medium',
  shape = 'default',
  block = false,
  active = true,
}) => (
  <div
    className={classNames(
      `${prefixCls}-button`,
      `${prefixCls}-button-${shape}`,
      { [`${prefixCls}-button-block`]: block, [`${prefixCls}-element-active`]: active },
      className,
    )}
    style={{
      width: shape === 'circle' ? `${buttonSizePx[size]}px` : undefined,
      height: `${buttonSizePx[size]}px`,
      ...style,
    }}
  />
);

function renderComposed(
  props: SkeletonProps,
  showActive: boolean,
  round: boolean,
): ReactNode {
  const {
    avatar: avatarProp = false,
    title: titleProp = true,
    paragraph: paragraphProp = true,
    className,
    style,
  } = props;

  const avatarCfg = avatarProp === true ? {} : avatarProp === false ? null : avatarProp;
  const titleCfg = titleProp === true ? {} : titleProp === false ? null : titleProp;
  const paragraphCfg =
    paragraphProp === true ? { rows: 3 } : paragraphProp === false ? null : paragraphProp;

  const hasAvatar = Boolean(avatarCfg);
  const hasTitle = Boolean(titleCfg);
  const hasParagraph = Boolean(paragraphCfg);

  if (!hasAvatar && !hasTitle && !hasParagraph) {
    return null;
  }

  const titleProps =
    titleCfg && typeof titleCfg === 'object' ? titleCfg : {};
  const paragraphProps =
    paragraphCfg && typeof paragraphCfg === 'object' ? paragraphCfg : {};
  const avatarProps =
    avatarCfg && typeof avatarCfg === 'object' ? avatarCfg : {};

  const titleActive =
    titleProps.active === false ? false : showActive;
  const paragraphActive =
    paragraphProps.active === false ? false : showActive;
  const avatarActive =
    avatarProps.active === false ? false : showActive;

  const section =
    hasTitle || hasParagraph ? (
      <div className={`${prefixCls}-section`}>
        {hasTitle && <SkeletonTitle {...titleProps} active={titleActive} />}
        {hasParagraph && <SkeletonParagraph {...paragraphProps} active={paragraphActive} />}
      </div>
    ) : null;

  if (hasAvatar) {
    return (
      <div
        className={classNames(
          `${prefixCls}`,
          `${prefixCls}-with-avatar`,
          { [`${prefixCls}-round`]: round },
          className,
        )}
        style={style}
      >
        <div className={`${prefixCls}-header`}>
          <SkeletonAvatar {...avatarProps} active={avatarActive} />
        </div>
        {section}
      </div>
    );
  }

  return (
    <div className={classNames(prefixCls, { [`${prefixCls}-round`]: round }, className)} style={style}>
      {section}
    </div>
  );
}

function renderBlock(props: SkeletonProps, showActive: boolean): ReactNode {
  const {
    type = 'text',
    width,
    height,
    radius,
    rows = 1,
    round,
    className,
    style,
  } = props;

  const baseStyle: CSSProperties = {};
  if (width !== undefined) baseStyle.width = toCssSize(width);
  if (height !== undefined) baseStyle.height = toCssSize(height);

  if (type === 'circle') {
    const d = radius !== undefined ? toCssSize(radius) : undefined;
    if (d) {
      baseStyle.width = d;
      baseStyle.height = d;
    }
    baseStyle.borderRadius = '50%';
  } else if (round) {
    baseStyle.borderRadius = '8px';
  } else if (radius !== undefined) {
    baseStyle.borderRadius = toCssSize(radius);
  }

  if (type === 'text') {
    return (
      <div className={classNames(`${prefixCls}-block-root`, className)} style={style}>
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className={classNames(
              `${prefixCls}-block`,
              `${prefixCls}-block-text`,
              { [`${prefixCls}-element-active`]: showActive },
            )}
            style={{
              ...baseStyle,
              ...(index === rows - 1 ? { width: baseStyle.width ?? '70%' } : {}),
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={classNames(`${prefixCls}-block-root`, className)} style={style}>
      <div
        className={classNames(`${prefixCls}-block`, `${prefixCls}-block-${type}`, {
          [`${prefixCls}-element-active`]: showActive,
        })}
        style={baseStyle}
      />
    </div>
  );
}

type CompoundedSkeleton = FC<SkeletonProps> & {
  Avatar: typeof SkeletonAvatar;
  Title: typeof SkeletonTitle;
  Paragraph: typeof SkeletonParagraph;
  Input: typeof SkeletonInput;
  Button: typeof SkeletonButton;
};

const SkeletonImpl: FC<SkeletonProps> = (props) => {
  const {
    loading = true,
    children,
    mode = 'composed',
    round = false,
    active,
    animated,
  } = props;

  if (!loading) {
    return <>{children}</>;
  }

  const showActive = normalizeActive(active, animated);

  if (mode === 'block') {
    return renderBlock(props, showActive);
  }

  return renderComposed(props, showActive, round);
};

export const Skeleton = Object.assign(SkeletonImpl, {
  Avatar: SkeletonAvatar,
  Title: SkeletonTitle,
  Paragraph: SkeletonParagraph,
  Input: SkeletonInput,
  Button: SkeletonButton,
}) as CompoundedSkeleton;

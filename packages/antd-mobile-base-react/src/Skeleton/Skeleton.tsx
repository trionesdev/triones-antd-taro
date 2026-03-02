import React from 'react';
import './style.scss';

export interface SkeletonProps {
    /** 是否显示骨架屏 */
    loading?: boolean;
    /** 骨架屏类型：text, circle, rect */
    type?: 'text' | 'circle' | 'rect';
    /** 宽度 */
    width?: string | number;
    /** 高度 */
    height?: string | number;
    /** 圆角大小，仅在type为circle时生效 */
    radius?: string | number;
    /** 显示多行文本骨架，仅在type为text时生效 */
    rows?: number;
    /** 是否显示动画效果 */
    animated?: boolean;
    /** 自定义样式类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: React.CSSProperties;
    /** 子元素 */
    children?: React.ReactNode;
    /** 是否是圆角矩形 */
    round?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    loading = true,
    type = 'text',
    width,
    height,
    radius,
    rows = 1,
    animated = true,
    className = '',
    style,
    children,
    round = false
}) => {
    if (!loading || children) {
        return <>{children}</>;
    }

    const getSkeletonStyle = () => {
        const style: React.CSSProperties = {};

        if (width !== undefined) {
            style.width = typeof width === 'number' ? `${width}px` : width;
        }
        if (height !== undefined) {
            style.height = typeof height === 'number' ? `${height}px` : height;
        }

        if (type === 'circle') {
            style.borderRadius = '50%';
            if (radius !== undefined) {
                style.width = typeof radius === 'number' ? `${radius}px` : radius;
                style.height = typeof radius === 'number' ? `${radius}px` : radius;
            }
        } else if (round) {
            style.borderRadius = '8px';
        } else if (radius !== undefined) {
            style.borderRadius = typeof radius === 'number' ? `${radius}px` : radius;
        }

        return style;
    };

    const renderSkeletonItems = () => {
        if (type === 'text') {
            return Array.from({ length: rows }).map((_, index) => (
                <div
                    key={index}
                    className={`skeleton-item skeleton-text ${animated ? 'skeleton-animated' : ''} ${className}`}
                    style={{ ...getSkeletonStyle(), ...style }}
                />
            ));
        } else {
            return (
                <div
                    className={`skeleton-item skeleton-${type} ${animated ? 'skeleton-animated' : ''} ${className}`}
                    style={{ ...getSkeletonStyle(), ...style }}
                />
            );
        }
    };

    return <div className="skeleton-container">{renderSkeletonItems()}</div>;
};

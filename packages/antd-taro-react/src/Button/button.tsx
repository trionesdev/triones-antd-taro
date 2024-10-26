import React, {FC} from "react";
import classNames from "classnames";

type AntButtonProps = {
    children?: React.ReactNode
    /**
     * block 按钮宽高自适应
     */
    block?: boolean
    /**
     * 颜色
     */
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    /**
     * 是否危险按钮，会使用 danger 的颜色
     */
    danger?: boolean
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 幽灵按钮
     */
    ghost?: boolean
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'

    className?: string,
    style?: React.CSSProperties
    icon?: React.ReactNode
    iconPosition?: 'start' | 'end'
    loading?: boolean
    variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link'
}


export const AntButton: FC<AntButtonProps> = (
    {
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
        ...props
    }
) => {
    const clsPrefix = "ant-button"
    let finalColor = color
    let finalVariant = variant
    if (type) {
        if (!color) {
            if (type == 'primary' || type == 'link') {
                finalColor = 'primary'
            }
        }
        if (!variant) {
            if (type == 'primary') {
                finalVariant = 'solid'
            } else if (type == 'default') {
                finalVariant = 'outlined'
            } else if (type === 'dashed' || type == 'link' || type == 'text') {
                finalVariant = type
            }
        }

    }
    if (danger) {
        finalColor = 'danger'
    }
    return <button
        className={classNames(clsPrefix,
            {
                [`${clsPrefix}-block`]: block,
                [`${clsPrefix}-type-${type}`]: type,
                [`${clsPrefix}-color-${finalColor}`]: finalColor,
                [`${clsPrefix}-variant-${finalVariant}`]: finalVariant,

            })}
        disabled={disabled}>
        {iconPosition == 'start' && icon}
        {props.children}
        {iconPosition == 'end' && icon}
    </button>
}
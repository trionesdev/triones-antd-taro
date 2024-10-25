import {Button, View} from "@tarojs/components";
import React, {FC} from "react";
import {ButtonProps} from "@tarojs/components/types/Button";
import classNames from "classnames";

type AntButtonProps = {
    block?: boolean
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    danger?: boolean
    disabled?: boolean
    ghost?: boolean
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'

    className?: string,
    style?: React.CSSProperties
    icon?: React.ReactNode
    iconPosition?: 'start' | 'end'
    loading?: boolean
    variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link'
} & Omit<ButtonProps, 'size|type'>


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
        ...props
    }
) => {
    console.log(props)
    const clsPrefix = "ant-button"
    return <Button   {...props} className={classNames(clsPrefix, {
        [`${clsPrefix}-color-default`]: color === 'default',
        [`${clsPrefix}-color-primary`]: color === 'primary',
        [`${clsPrefix}-color-success`]: color === 'success',
        [`${clsPrefix}-color-warning`]: color === 'warning',
        [`${clsPrefix}-color-danger`]: color === 'danger',
    })} disabled={false}>
        {iconPosition == 'start' && icon}
        {props.children}
        {iconPosition == 'end' && icon}
    </Button>
}
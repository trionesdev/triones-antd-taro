import {Button} from "@tarojs/components";
import React, {FC} from "react";
import {ButtonProps} from "@tarojs/components/types/Button";
import classNames from "classnames";

type AntButtonProps = {
    block?: boolean
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    disabled?: boolean
    fill?: 'solid' | 'outline' | 'none',
    loading?: boolean | 'auto',
    loadingIcon?: React.ReactNode
    loadingText?: string
    shape?: 'default' | 'rounded' | 'rectangular'
    size?: 'mini' | 'small' | 'middle' | 'large'
    type?: 'submit' | 'reset' | 'button'
} & Omit<ButtonProps, 'size'>




export const AntButton: FC<AntButtonProps> = (
    {

    }
) => {

    return <Button className={classNames('antm-button')}/>
}
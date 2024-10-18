import {Button} from "@tarojs/components";
import React, {FC} from "react";
import {ButtonProps} from "@tarojs/components/types/Button";
import {styled} from "@linaria/react";
import classNames from "classnames";
import "./style"

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

const AntButtonStyled = styled(Button)`
    :global() {
        .adm-button {
            border-radius: var(--adm-radius-s);
            user-select: none;
            line-height: 1.4;
            padding: 7Px 12Px;
            display: inline-block;

            &-block {
                display: block;
                width: 100%;
            }

            &-primary {
                background-color: #1677ff;
                color: white;
            }

            &-success {
                background-color: #00b578;
                color: white;
            }

            &-warning {
                background-color: #ff8f1f;
                color: white;
            }

            &-danger {
                background-color: #ff3141;
                color: white;
            }

            &-mini {
                padding-top: 3Px;
                padding-bottom: 3Px;
                font-size: 13Px;
            }

            &-small {
                padding-top: 3Px;
                padding-bottom: 3Px;
                font-size: 17Px;
            }

            &-middle {

            }

            &-large {
                padding-top: 11Px;
                padding-bottom: 11Px;
                font-size: 18Px;
            }

        }
    }
`;


export const AntButton: FC<AntButtonProps> = (
    {
        block,
        color = 'default',
        disabled,
        fill,
        loading,
        loadingIcon,
        loadingText,
        shape = 'default',
        size = 'middle',
        type = 'button',
        ...props
    }
) => {
    const classPrefix = 'adm-button'
    return <AntButtonStyled className={classNames(classPrefix, {
            [`${classPrefix}-block`]: block,
        },
        `${classPrefix}-${color}`,
        `${classPrefix}-${size}`,
    )} {...props}/>
}
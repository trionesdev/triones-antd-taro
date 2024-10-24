import {Button} from "@tarojs/components";
import React, {FC} from "react";
import {ButtonProps} from "@tarojs/components/types/Button";
import classNames from "classnames";

type AntButtonProps = {
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
} & Omit<ButtonProps, 'size'>


export const AntButton: FC<AntButtonProps> = (
    {
        type,
        ...props
    }
) => {
    console.log(props)

    return <Button {...props} className={classNames('ant-button', {'ant-button-primary': type === 'primary'})}/>
}
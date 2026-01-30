import { View } from "@tarojs/components";
import React, { PropsWithChildren, useEffect } from "react";
import { FC } from "react";

const cls = 'triones-antm-overlay'

export type OverlayProps = {
    open: boolean;
    zIndex?: number;
    closeOnOverlayClick?: boolean;
    onClick?: () => void;
}

export const Overlay: FC<PropsWithChildren<OverlayProps>> = ({ children, open = false, zIndex = 1000, closeOnOverlayClick = true, onClick }) => {
    const [internalOpen, setInternalOpen] = React.useState(open);

    const handleClick = () => {
        if (closeOnOverlayClick) {
            setInternalOpen(false);
        }
        onClick?.();
    };

    useEffect(() => {
        if (open !== internalOpen) {
            setInternalOpen(open);
        }
    }, [open]);


    useEffect(() => {
        console.log('internalOpen', internalOpen);
    }, [internalOpen]);

    if (!internalOpen) return null;
    return (
        <View className={cls} onClick={handleClick} style={{ zIndex }} >
            {children}
        </View>
    );
};
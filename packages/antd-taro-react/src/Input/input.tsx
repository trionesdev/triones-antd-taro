import { FC } from "react";
import { InputProps } from "./types";
import { TaroInput } from "./taro-input";
import React from "react";

export const Input:FC<InputProps> = ({...rest})=>{
    return (
        <TaroInput {...rest} />
    )
}
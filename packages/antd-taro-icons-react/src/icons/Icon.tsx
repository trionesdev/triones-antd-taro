import {FC} from "react"
import "./styles.scss"
import classNames from "classnames";

export type IconProps = {
    className?: string
}
export const Icon: FC<IconProps> = ({className}) => {
    return <i className={classNames('triones-antdm-icon', className)}></i>
}
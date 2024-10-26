import {FC} from "react"
import "./styles.scss?inline"
import classNames from "classnames";

export type IconProps = {
    className?: string
}
const Icon: FC<IconProps> = ({className}) => {
    return <i className={classNames('triones-antdm-icon', className)}></i>
}
export default Icon
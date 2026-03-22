import {FloatButton as InternalFloatButton, FloatButtonProps} from "./FloatButton"
import {FloatButtonGroup} from "./FloatButtonGroup"

type InternalFloatButtonType = typeof InternalFloatButton

type CompoundedComponent = InternalFloatButtonType & {
  Group: typeof FloatButtonGroup
}

const FloatButton = InternalFloatButton as CompoundedComponent
FloatButton.Group = FloatButtonGroup

export type {FloatButtonProps}
export type {FloatButtonGroupProps} from "./FloatButtonGroup"
export default FloatButton

import {Checkbox as InternalCheckbox} from "./checkbox"
import {CheckboxGroup} from './checkbox-group';
import {CheckboxButton} from './checkbox-button';
import {CheckboxProps} from "./types";


type CompoundedComponent = typeof InternalCheckbox & {
  Group: typeof CheckboxGroup
  Button: typeof CheckboxButton
};

const Checkbox = InternalCheckbox as CompoundedComponent;
Checkbox.Group = CheckboxGroup;
Checkbox.Button = CheckboxButton;

export type {CheckboxProps}
export default Checkbox

import {Checkbox as InternalCheckbox} from "./checkbox"
import {CheckboxGroup} from './checkbox-group';
import {CheckboxProps} from "./types";


type CompoundedComponent = typeof InternalCheckbox & {
  Group: typeof CheckboxGroup

};

const Checkbox = InternalCheckbox as CompoundedComponent;
Checkbox.Group = CheckboxGroup;


export type {CheckboxProps}
export default Checkbox

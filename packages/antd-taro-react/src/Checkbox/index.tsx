import {Checkbox as InternalCheckbox} from "./checkbox"
import { CheckboxGroup } from './checkbox-group';
import { CheckboxButton } from './checkbox-button';



type CompoundedComponent = typeof InternalCheckbox & {
  Group: typeof CheckboxGroup
  Button: typeof CheckboxButton
};

const Checkbox = InternalCheckbox as CompoundedComponent;
Checkbox.Group = CheckboxGroup;
Checkbox.Button = CheckboxButton;

// export default attachPropertiesToComponent(Checkbox,{
//   Group: CheckboxGroup
// })
export default Checkbox

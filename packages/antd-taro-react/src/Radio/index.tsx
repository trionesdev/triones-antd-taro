import { Radio as InternalRadio } from './radio';
import { RadioGroup } from './RadioGroup';
import './style.scss';

export type { RadioGroupProps, RadioProps } from './types';

import { RadioButton } from './RadioButton';

// export default attachPropertiesToComponent(Radio, {
//   Group: RadioGroup,
//   Button: RadioButton
// });

type CompoundedComponent = typeof InternalRadio & {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
};

const Radio = InternalRadio as CompoundedComponent;
Radio.Group = RadioGroup;
Radio.Button = RadioButton;
export default Radio;

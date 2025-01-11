import { attachPropertiesToComponent } from '../utils/attach-properties-to-component';
import { Group } from './group';
import { Radio } from './radio';
import './style.scss';

export type { RadioGroupProps } from './group';
export type { RadioProps, RadioValue } from './radio';

export default attachPropertiesToComponent(Radio, {
  Group,
});

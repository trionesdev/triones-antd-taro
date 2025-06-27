import {Descriptions as InternalDescriptions} from "./Descriptions"
import { DescriptionItem } from './DescriptionItem';

type CompoundedComponent = typeof InternalDescriptions & {
  Item: typeof DescriptionItem
}
const Descriptions = InternalDescriptions as CompoundedComponent
Descriptions.Item = DescriptionItem

export default Descriptions

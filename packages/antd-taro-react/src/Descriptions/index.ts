import {Descriptions as InternalDescriptions} from "./Descriptions"
import { DescriptionItem } from './DescriptionItem';
import {DescriptionsProps} from "./types"

type CompoundedComponent = typeof InternalDescriptions & {
  Item: typeof DescriptionItem
}
const Descriptions = InternalDescriptions as CompoundedComponent
Descriptions.Item = DescriptionItem

export type {DescriptionsProps}

export default Descriptions

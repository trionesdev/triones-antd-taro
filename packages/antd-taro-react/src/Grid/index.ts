import { attachPropertiesToComponent } from '../utils/native-props'
import { Grid, GridItem } from './grid'

export type { GridProps, GridItemProps } from './grid'

export default attachPropertiesToComponent(Grid, {
  Item: GridItem,
})

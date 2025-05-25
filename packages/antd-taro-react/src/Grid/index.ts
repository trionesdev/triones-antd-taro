import {Grid as InternalGrid, GridItem} from './grid'

export type {GridProps, GridItemProps} from './grid'

type CompoundedComponent = typeof InternalGrid & {
  Item: typeof GridItem;
};

const Grid = InternalGrid as CompoundedComponent;
Grid.Item = GridItem;

export default Grid

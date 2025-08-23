import { Cell as InternalCell } from './cell';
import { CellGroup } from './CellGroup';

type CompoundedComponent = typeof InternalCell & {
  Group: typeof CellGroup;
};
const Cell = InternalCell as CompoundedComponent;
Cell.Group = CellGroup;
export default Cell;

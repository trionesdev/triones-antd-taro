import { Cell as InternalCell } from './cell';
import { CellGroup } from './CellGroup';
import {CellProps,CellGroupProps} from "./types"

type CompoundedComponent = typeof InternalCell & {
  Group: typeof CellGroup;
};
const Cell = InternalCell as CompoundedComponent;
Cell.Group = CellGroup;

export type { CellProps, CellGroupProps };
export default Cell;

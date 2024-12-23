import './style.scss';
import * as React from 'react';

import Tooltip from './tooltip';

function Popover({
  children,
  ...restProps
}) {
  return <Tooltip {...restProps}>
    {children}
  </Tooltip>
}

type CompoundedComponent = typeof Popover
export default Popover as CompoundedComponent;
import './style.scss';
import * as React from 'react';

import Tooltip from './tooltip';

export default function Popover({
  children,
  ...restProps
}) {
  return <Tooltip {...restProps}>
    {children}
  </Tooltip>
}
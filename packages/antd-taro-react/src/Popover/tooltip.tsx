import RcTooltip from 'rc-tooltip';
import { getNextZIndex } from '../utils/zIndex';
import * as React from 'react';
import classNames from 'classnames';
import { isFragment, cloneElement } from '../utils/reactNode';
import type {
  TooltipProps as RcTooltipProps,
  TooltipRef as RcTooltipRef,
} from 'rc-tooltip/lib/Tooltip';



interface TooltipProps extends RcTooltipProps {
  afterOpenChange: boolean;
  arrow: boolean;
  onOpenChange?: RcTooltipProps['onVisibleChange'];
  open?: RcTooltipProps['visible'];
}
const Tooltip = React.forwardRef<RcTooltipRef, TooltipProps>((props, ref) => {
  const {
    getTooltipContainer,
    children,
    // afterOpenChange,
    // afterVisibleChange,
    destroyTooltipOnHide,
    arrow = true,
    overlay,
    visible,
  } = props;  
  const child =
    React.isValidElement(children) && !isFragment(children) ? children : <span>{children}</span>;
  const childProps = child.props;
  

  const mergedShowArrow = !!arrow;
  const prefixCls = 'triones-antm-tooltip'

  const childCls =
    !childProps.className || typeof childProps.className === 'string'
      ? classNames(childProps.className, `${prefixCls}-open`)
      : childProps.className;

  const {
    // getPopupContainer,
    placement = 'top',
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0,
    ...otherProps
  } = props;
  const zIndex = getNextZIndex();
  const tooltipRef = React.useRef<RcTooltipRef>(null);
  const tempOpen = otherProps.open || visible


  const onOpenChange = (vis: boolean) => {
    // setOpen(vis);
    props.onOpenChange?.(vis);
    props.onVisibleChange?.(vis);
  };
  const afterVisibleChange = (vis: boolean) => {
    // setOpen(vis);
    props.onOpenChange?.(vis);
    props.onVisibleChange?.(vis);
  };
  console.log('----overlay--', overlay, zIndex, otherProps, tempOpen)
  return <RcTooltip
      {...otherProps}
      trigger={['hover']}
      zIndex={zIndex}
      showArrow={mergedShowArrow}
      placement={placement}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      prefixCls={prefixCls}
      getTooltipContainer={getTooltipContainer}
      overlay={overlay}
      visible={tempOpen}
      ref={tooltipRef}
      onVisibleChange={onOpenChange}
      afterVisibleChange={afterVisibleChange}
      arrowContent={<span className={`${prefixCls}-arrow-content`} />}
      destroyTooltipOnHide={!!destroyTooltipOnHide}
    >

      {tempOpen ? cloneElement(child, { className: childCls }) : children}
    </RcTooltip>
})
export default Tooltip;
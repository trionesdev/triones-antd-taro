import RcTooltip from 'rc-tooltip';
import { getNextZIndex } from '../utils/zIndex';
import React, { useState }  from 'react';
import classNames from 'classnames';
import { isFragment, cloneElement } from '../utils/reactNode';
import type {
  TooltipProps as RcTooltipProps,
  TooltipRef as RcTooltipRef,
} from 'rc-tooltip/lib/Tooltip';


interface TooltipProps extends RcTooltipProps {
  arrow: boolean;
}

const Tooltip = React.forwardRef<RcTooltipRef, TooltipProps>((props) => {
  const {
    getTooltipContainer,
    children,
    destroyTooltipOnHide,
    arrow = true,
    overlay,
    visible,
    trigger = ['hover']
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
  const [zIndex, handleZIndex] = useState<number>(0);

  const tooltipRef = React.useRef<RcTooltipRef>(null);
  const tempOpen = visible


  const onVisibleChange = (vis: boolean) => {
    if (vis) {
      handleZIndex(_ => getNextZIndex())
    }
    props.onVisibleChange?.(vis);
  };

  return <RcTooltip
      {...otherProps}
      trigger={trigger}
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
      onVisibleChange={onVisibleChange}
      arrowContent={<span className={`${prefixCls}-arrow-content`} />}
      destroyTooltipOnHide={!!destroyTooltipOnHide}
    >

      {tempOpen ? cloneElement(child, { className: childCls }) : children}
    </RcTooltip>
})
// type CompoundedComponent = typeof Tooltip
export default Tooltip;
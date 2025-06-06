import type { FC, ReactElement } from 'react';
import { useInitialized } from './use-initialized';
interface Props {
  active: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children: ReactElement;
}
export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean,
) {
  const initialized = useInitialized(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}

export const ShouldRender: FC<Props> = (props) => {
  const shouldRender = useShouldRender(
    props.active,
    props.forceRender,
    props.destroyOnClose,
  );
  return shouldRender ? props.children : null;
};

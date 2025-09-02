import { createContext } from 'react';
import { ScrollDetail } from './types';

type SideBarContextType = {
  activeKey?: string;
  setActiveKey?: (key: string) => void;
  mode?: 'switch' | 'scroll';
  scrollDetail?: ScrollDetail;
  setScrollDetail?: (detail: ScrollDetail) => void;
  activeChangeCallback?: (targetScrollTop: number) => void;
  onMoveToTab?: (activeKey: string) => void;
  asyncRender?: boolean;

  contentRef?: any;
  contentWheelRef?: any;

  manual?: boolean;
  setManual?: (manual: boolean) => void;
};
export const SideBarContext = createContext<SideBarContextType>({});

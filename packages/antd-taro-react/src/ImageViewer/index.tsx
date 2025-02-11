import { attachPropertiesToComponent } from '../utils/attach-properties-to-component';
import { ImageViewer, MultiImageViewer } from './image-viewer';
import {
  clearImageViewer,
  showImageViewer,
  showMultiImageViewer,
} from './methods';
import './style.scss';

export type {
  ImageViewerProps,
  MultiImageViewerProps,
  MultiImageViewerRef,
} from './image-viewer';
export type { ImageViewerShowHandler } from './methods';

const Multi = attachPropertiesToComponent(MultiImageViewer, {
  show: showMultiImageViewer,
});

export default attachPropertiesToComponent(ImageViewer, {
  Multi,
  show: showImageViewer,
  clear: clearImageViewer,
});

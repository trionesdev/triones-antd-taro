import './style.scss';

const canUseDom = !!(
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document &&
  window.document.createElement
);
if (canUseDom) {
  document.addEventListener('touchstart', () => {}, true);
}

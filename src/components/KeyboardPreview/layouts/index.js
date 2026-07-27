import isvLatn from '@site/src/markdown/keyboards/isv-Latn.json';
import isvCyrl from '@site/src/markdown/keyboards/isv-Cyrl.json';

const layouts = {
  'isv-Latn': isvLatn,
  'isv-Cyrl': isvCyrl,
};

export function resolveLayout(layoutId) {
  return layouts[layoutId];
}

export default layouts;

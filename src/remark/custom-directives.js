const path = require('path');
const i18n = require('./abbr-i18n');

const plugin = ({ visit }) => (_options) => {
  function directiveTransformer(ast, vfile) {
    const filePath = vfile.path.split(path.sep);
    const i18n = filePath.indexOf('i18n');
    const docLang = i18n === -1 ? undefined : filePath[i18n + 1];

    visit(ast, (node) => {
      if (
        node.type !== 'leafDirective' &&
        node.type !== 'containerDirective' &&
        node.type !== 'tableDirective' &&
        node.type !== 'textDirective'
      ) {
        return;
      }

      switch (node.name) {
        case 'kbd':
          return kbd(node);
        case 'stress':
          return stress(node);
        case 'abbr':
          return abbr(node, docLang);
        case 'notr':
          return notr(node);
        case 'isv':
          return isv(node);
        case 'ipa':
          return ipa(node);
        case 'component':
          return component(node);
        case 'be':
        case 'bg':
        case 'bs':
        case 'cnr':
        case 'cs':
        case 'csb':
        case 'de':
        case 'dsb':
        case 'en':
        case 'fr':
        case 'hr':
        case 'hbs':
        case 'hsb':
        case 'mk':
        case 'pl':
        case 'ru':
        case 'rue':
        case 'sk':
        case 'sl':
        case 'sr':
        case 'uk':
        case 'sla':
        case 'zls':
        case 'zle':
        case 'zlw':
          return lang(node);
      }
    });
  }

  return directiveTransformer;
};

function isWordFragment(node) {
  const text = node.value;
  if (text.startsWith('-') || text.endsWith('-')) {
    return true;
  }

  if (text.length <= 3) {
    return true;
  }

  return false;
}

function prepareNode(node) {
  const data = node.data = node.data ?? {};
  const hName = pickTagName(node);
  data.hName = hName;
  return node;
}

function pickTagName(node) {
  switch (node.type) {
    case 'textDirective':
      return 'span';
    case 'inlineCode':
      return 'code';
    default:
      return 'div';
  }
}

function kbd(node) {
  prepareNode(node).data.hName = 'kbd';
}

function isv(node) {
  namedComponent(node, 'TransliteratorElement');
  remapTextRecursively(node, (text) => text.replaceAll('t́', 'ť'));
}

function stress(node) {
  prepareNode(node).data.hName = 'u';
}

function notr(node) {
  prepareNode(node).data.hProperties = { className: 'notranslate', translate: 'no' };
}

function ipa(node) {
  prepareNode(node).data.hName = 'IPA';
}

function abbr(node, lang = 'en') {
  const content = getShallowText(node);
  const [text, title] = i18n[content]?.[lang] ?? [content, node.attributes?.title ?? content];

  Object.assign(prepareNode(node).data, {
    hName: 'abbr',
    hProperties: {
      title,
    },
  });

  node.children = [{ type: 'text', value: text }];
}

function getShallowText(node) {
  let result = '';
  const children = node.children;
  const n = children.length;

  for (let i = 0; i < n; i++) {
    const child = children[i];
    if (child.type === 'text') {
      result += child.value;
    }
  }

  return result;
}

function remapTextRecursively(node, callback) {
  const children = node.children;
  const n = children.length;

  for (let i = 0; i < n; i++) {
    const child = children[i];
    if (child.type === 'text' && typeof child.value === 'string') {
      child.value = callback(child.value);
    }
  }

  return node;
}

function lang(node) {
  const lang = node.name === 'isv' ? 'art-x-interslv' : node.name;
  prepareNode(node).data.hProperties = { className: 'notranslate', translate: 'no', lang };
}

function component(node) {
  const { name, ...props } = node.attributes || {};
  if (!name) return;
  namedComponent(node, name, props);
}

function namedComponent(node, hName, hProperties = {}) {
  Object.assign(prepareNode(node).data, { hName, hProperties });
}

module.exports = plugin;

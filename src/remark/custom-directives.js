const visit = require('unist-util-visit');

const plugin = (_options) => {
  function directiveTransformer(ast) {
    visit(ast, (node) => {
      if (node.type === 'inlineCode') {
        return isWordFragment(node) ? fragment(node) : node;
      }

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
        case 'notr':
          return notr(node);
        case 'ipa':
          return ipa(node);
        case 'en':
        case 'be':
        case 'bg':
        case 'cs':
        case 'hr':
        case 'mk':
        case 'pl':
        case 'ru':
        case 'sk':
        case 'sl':
        case 'sr':
        case 'uk':
        case 'zls':
        case 'isv':
          return lang(node);
      }
    });
  }

  return directiveTransformer;
};

function isInline(node) {
  return node.type === 'textDirective' || node.type === 'inlineCode';
}

function isWordFragment(node) {
  const text = node.value;
  if (!isASCII(text)) {
    return true;
  }

  if (text.startsWith('-') || text.endsWith('-')) {
    return true;
  }

  if (text.length <= 2) {
    return true;
  }

  return false;
}

function isASCII(text) {
  return /^[\x00-\x7F]*$/.test(text);
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

function notr(node) {
  prepareNode(node).data.hProperties = { className: 'notranslate', translate: 'no' };
}

function ipa(node) {
  prepareNode(node).data.hProperties = { className: 'notranslate', lang: 'art-fonipa', translate: 'no' };
}

function lang(node) {
  prepareNode(node).data.hProperties = { lang: node.name };
}

function fragment(node) {
  prepareNode(node).data.hProperties = { className: 'fragment' };
}

module.exports = plugin;

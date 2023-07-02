const visit = require('unist-util-visit');

const plugin = (_options) => {
  function prepare(node) {
    const data = node.data = node.data ?? {};
    const hName = node.type === 'textDirective' ? 'span' : 'div';
    data.hName = hName;
    return node;
  }

  function kbd(node) {
    prepare(node).data.hName = 'kbd';
  }

  function notr(node) {
    prepare(node).data.hProperties = { className: 'notranslate', translate: 'no' };
  }

  function ipa(node) {
    prepare(node).data.hProperties = { className: 'notranslate', lang: 'art-fonipa', translate: 'no' };
  }

  function lang(node) {
    prepare(node).data.hProperties = { lang: node.name };
  }

  function directiveTransformer(ast) {
    visit(ast, 'textDirective', (node) => {
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
          return lang(node);
      }
    });
  }

  return directiveTransformer;
};

module.exports = plugin;

const plugin = (_options) => {
  function directiveTransformer(ast, vfile) {
    const h1 = ast.children.findIndex((node) => node.type === 'heading');
    if (h1 > -1) {
      ast.children.splice(h1 + 1, 0, createMDX('CustomBeforeSection'));
    }

    const refs = ast.children.findIndex((node) => node.type === 'definition');
    if (refs > -1) {
      ast.children.splice(refs, 0, createMDX('CustomAfterSection'));
    } else {
      ast.children.push(createMDX('CustomAfterSection'));
    }
  }

  return directiveTransformer;
};

function createMDX(name) {
  return {
    type: 'mdxJsxFlowElement',
    name,
    attributes: [],
  };
}

module.exports = plugin;

const { traverse } = require('./traverse');

const transform = node => {
  traverse(node, {
    CallExpression: {
      enter({ node }) {
        if (specialForms[node.name]) {
          specialForms[node.name](node);
        }
      },
    },
  });

  return node;
};

const specialForms = {
  define(node) {
    const [identifier, assingment] = node.arguments;
    node.type = 'VariableDeclaration';
    node.identifier = identifier;
    node.assingment = assingment;
    delete node.name;
    delete node.arguments;
  },
};

module.exports = { specialForms, transform };

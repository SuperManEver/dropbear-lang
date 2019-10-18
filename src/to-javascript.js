const generate = require('@babel/generator').default;
const { traverse } = require('./traverse');

const babelVisitor = {
  CallExpression: {
    enter({ node }) {
      node.callee = {
        type: 'Identifier',
        name: node.name,
      };
    },
  },

  VariableDeclaration: {
    enter({ node }) {
      node.type = 'VariableDeclaration';
      node.kind = 'let';
      node.declarations = [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: node.identifier.name,
          },
          init: {
            type: node.assingment.type,
            value: node.assingment.value,
          },
        },
      ];
    },
  },
};

const toJavaScript = ast => {
  traverse(ast, babelVisitor);
  return generate(ast);
};

module.exports = {
  toJavaScript,
};

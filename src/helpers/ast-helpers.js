const isNumericNode = node => node.type === 'NumericLiteral';
const isStringNode = node => node.type === 'StringLiteral';
const isCallExpressionNode = node => node.type === 'CallExpression';
const isIdentifierNode = node => node.type === 'Identifier';

module.exports = {
  isNumericNode,
  isStringNode,
  isCallExpressionNode,
  isIdentifierNode,
};

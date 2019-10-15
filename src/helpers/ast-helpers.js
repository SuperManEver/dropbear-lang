const isNumericNode = node => node.type === 'NumericLiteral';
const isStringNode = node => node.type === 'StringLiteral';
const isCallExpressionNode = node => node.type === 'CallExpression';

module.exports = {
  isNumericNode,
  isStringNode,
  isCallExpressionNode,
};

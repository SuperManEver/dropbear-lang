const { environment } = require('./standard-library');
const {
  isStringNode,
  isNumericNode,
  isCallExpressionNode,
} = require('./helpers/ast-helpers');

const last = collection => collection[collection.length - 1];

const evaluate = node => {
  if (isNumericNode(node) || isStringNode(node)) {
    return node.value;
  }
};

module.exports = { evaluate };

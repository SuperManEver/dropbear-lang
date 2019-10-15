const { environment } = require('./standard-library');
const {
  isStringNode,
  isNumericNode,
  isCallExpressionNode,
  isIdentifierNode,
} = require('./helpers/ast-helpers');

const last = collection => collection[collection.length - 1];

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  return fn(...args);
};

const getIdentifier = node => {
  if (environment[node.name]) return environment[node.name];
  throw new ReferenceError(`${node.name} is not defined`);
};

const evaluate = node => {
  if (isNumericNode(node) || isStringNode(node)) {
    return node.value;
  }

  if (isCallExpressionNode(node)) {
    return apply(node);
  }

  if (isIdentifierNode(node)) {
    return getIdentifier(node);
  }
};

module.exports = { evaluate };

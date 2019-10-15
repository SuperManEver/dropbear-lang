const isNumberToken = token => token.type === 'Number';
const isStringToken = token => token.type === 'String';
const isNameToken = token => token.type === 'Name';

const numericLiteralTokenCreator = token => ({
  type: 'NumericLiteral',
  value: token.value,
});

function stringLiteralTokenCreator(token) {
  return {
    type: 'StringLiteral',
    value: token.value,
  };
}

function identifierTokenCreator(token) {
  return { type: 'Identifier', name: token.value };
}

module.exports = {
  isNumberToken,
  numericLiteralTokenCreator,
  stringLiteralTokenCreator,
  isStringToken,
  isNameToken,
  identifierTokenCreator,
};

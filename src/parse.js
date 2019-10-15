const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const {
  isNumberToken,
  isStringToken,
  isNameToken,
  numericLiteralTokenCreator,
  stringLiteralTokenCreator,
  identifierTokenCreator,
} = require('./token-helpers');
const { peek, pop } = require('./utilities');

const parenthesize = tokens => {
  return tokens;
};

const parse = tokens => {
  const token = pop(tokens);

  if (isNumberToken(token)) {
    return numericLiteralTokenCreator(token);
  }

  if (isStringToken(token)) {
    return stringLiteralTokenCreator(token);
  }

  if (isNameToken(token)) {
    return identifierTokenCreator(token);
  }

  return tokens;
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };

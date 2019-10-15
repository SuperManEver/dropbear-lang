const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const {
  isNumberToken,
  isStringToken,
  isNameToken,
  numericLiteralTokenCreator,
  stringLiteralTokenCreator,
  identifierTokenCreator,
} = require('./helpers/token-helpers');
const { peek, pop } = require('./utilities');

const parenthesize = tokens => {
  const token = pop(tokens);

  if (isOpeningParenthesis(token.value)) {
    const expression = [];

    while (!isClosingParenthesis(peek(tokens).value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return token;
};

const parse = tokens => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  const token = tokens;

  if (isNumberToken(token)) {
    return numericLiteralTokenCreator(token);
  }

  if (isStringToken(token)) {
    return stringLiteralTokenCreator(token);
  }

  if (isNameToken(token)) {
    return identifierTokenCreator(token);
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };

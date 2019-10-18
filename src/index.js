const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { parseAndEvaluate, tokenizeAndParse } = require('./parse-and-evaluate');
const { toJavaScript } = require('./to-javascript');

module.exports = {
  tokenize,
  parse,
  evaluate,
  parseAndEvaluate,
  toJavaScript,
  tokenizeAndParse,
};

#!/usr/bin/env node

const { toJavaScript, tokenizeAndParse } = require('./src');

const fs = require('fs');

const [command, ...args] = process.argv.slice(2);

if (!command) {
  const repl = require('./src/repl');
  return repl();
}

if (command.toLowerCase() === 'run') {
  fs.readFile(args[0], 'utf-8', (error, file) => {
    if (error) {
      console.error(error);
    }

    const result = toJavaScript(tokenizeAndParse(file));
    console.log(result.code);
  });
}

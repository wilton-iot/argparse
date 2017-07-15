define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';

var ArgumentParser = require('argparse/lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: choice'
});

parser.addArgument([ 'foo' ], { choices: 'abc' });

parser.printHelp();
console.log('-----------');

var args;
args = parser.parseArgs([ 'c' ]);
console.dir(args);
console.log('-----------');
parser.parseArgs([ 'X' ]);
console.dir(args);


return module.exports;});

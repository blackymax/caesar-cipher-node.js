const { Command } = require('commander');
const { errorGenerator } = require('./utils');
const programm = new Command();

function getConsoleArg() {
  programm
    .option('-s, --shift <number>', 'shift')
    .option('-a, --action [type]', 'encode decode', '')
    .option('-i, --input [path]', 'input', '')
    .option('-o, --output [path]', 'output', '')
    .parse(process.argv);
  const options = programm.opts();

  if (!options.shift || !Number.isInteger(+options.shift)) {
    errorGenerator(new Error('Option "shift" is missing or your input is not correct (only numbers)'));
    }

  if (options.action !== 'encode' && options.action !== 'decode') {
    errorGenerator(
      new Error(
        'Argument of option --action is invalid. Input correct action argument. Argument could be "encode"/"decode" '
      )
    );
  }
  return options;
}

module.exports = { getConsoleArg };

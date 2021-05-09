const { Command } = require('commander');
const fs = require('fs');
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
    errorGenerator(
      new Error(
        'Option "shift" is missing or your input is not correct (only numbers)'
      )
    );
  }

  if (options.action !== 'encode' && options.action !== 'decode') {
    errorGenerator(
      new Error(
        'Argument of option --action is invalid. Input correct action argument. Argument could be "encode"/"decode" '
      )
    );
  }

  if (!fs.existsSync(__dirname + '/..' + options.input)) {
    errorGenerator(new Error('Current input file does not exist'));
  } else {
    try {
      fs.accessSync(
        __dirname + '/..' + options.input,
        fs.constants.R_OK | fs.constants.W_OK
      );
    } catch (err) {
      errorGenerator(new Error('No access to current input file '));
    }
  }
  
  if (!fs.existsSync(__dirname + '/..' + options.output)) {
    errorGenerator(new Error('Current output file does not exist '));
  } else {
    try {
      fs.accessSync(
        __dirname + '/..' + options.output,
        fs.constants.R_OK | fs.constants.W_OK
      );
    } catch (err) {
      errorGenerator(new Error('No access to current output file '));
    }
  }
  return options;
}

module.exports = { getConsoleArg };

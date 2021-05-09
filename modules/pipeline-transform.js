const { pipeline } = require('stream');
const { coding } = require('./transform');
const { errorGenerator } = require('./utils');
const fs = require('fs');

function transformDataStreams(input, output) {
    let inputFile;
    let outputFile;
    if (input){
        if (!fs.existsSync(__dirname + '/..' + input)) {
            errorGenerator(new Error('Current input file does not exist'))
        } else {
            try {
                fs.accessSync(__dirname + '/..' + input, fs.constants.R_OK | fs.constants.W_OK);
            } catch (err) {
                errorGenerator(new Error('No access to current input file '+err));
            }
        }
        inputFile = fs.createReadStream(__dirname + '/..'  + input, 'utf8');
    } else {
        inputFile = process.stdin;
    }
    if (output){
        if (!fs.existsSync(__dirname + '/..' + output)) {
            errorGenerator(new Error('Current output file does not exist '))
        } else {
            try {
                fs.accessSync(__dirname + '/..' + output, fs.constants.R_OK | fs.constants.W_OK);
            } catch (err) {
                errorGenerator(new Error('No access to current output file '));
            }
        }
        outputFile = fs.createWriteStream(__dirname + '/..' + output);
    } else {
        outputFile = process.stdout;
    }
    pipeline(
        inputFile,
        coding,
        outputFile,
        err => {
        if (err) {
            process.stderr.write(err.message + '\n');
            process.exit(1);
        }
    })
}

module.exports = { transformDataStreams };
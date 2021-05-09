const { pipeline } = require('stream');
const { coding } = require('./transform');
const { errorGenerator } = require('./utils');
const fs = require('fs');

function transformDataStreams(input, output) {
    let inputFile;
    let outputFile;
    if (input){
        inputFile = fs.createReadStream(__dirname + '/..'  + input, 'utf8');
    } else {
        inputFile = process.stdin;
    }
    if (output){
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
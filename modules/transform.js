const { getConsoleArg } = require('./get-data');
const { caesarMachine } = require('./caesar-cipher');
const fs = require('fs');

const stream = require('stream');
const coding = new stream.Transform({objectMode: true});

const optionsData = getConsoleArg();
let oldText = '';
if (optionsData.output) {
    oldText = fs.readFileSync(__dirname + '/..' + optionsData.output, 'utf8') + '\n';
}

coding._transform = function (chunk, encoding, done) {
    try {
        done(null, caesarMachine(chunk.toString(), Number(optionsData.shift), optionsData.action, oldText));
    } catch (e) {
        done(e);
    }
};

module.exports = { coding };
const { getConsoleArg } = require('./get-data');
const { caesarMachine } = require('./caesar-cipher');

const stream = require('stream');
const coding = new stream.Transform({objectMode: true});

const optionsData = getConsoleArg();

coding._transform = function (chunk, encoding, done) {
    try {
        done(null, caesarMachine(chunk.toString(), Number(optionsData.shift), optionsData.action));
    } catch (e) {
        done(e);
    }
};

module.exports = { coding };
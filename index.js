const commander = require('commander');
const { getConsoleArg } = require('./modules/get-data');
const { transformDataStreams } = require('./modules/pipeline-transform');

const options = getConsoleArg();

transformDataStreams(options.input, options.output);
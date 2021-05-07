#!/usr/bin/env node

const commander = require('commander');
const fs = require('fs');
const { stderr } = require('process');
const program = new commander.Command();
const {caesarMachine} = require('./modules/caesar-cipher');


program
    .requiredOption('-s, --shift <number>', 'shift')
    .option('-i, --input <path>', 'input')
    .option('-o, --output <path>', 'output')
    .requiredOption('-a, --action <type>', 'encode decode');
program.parse(process.argv);

const options = program.opts();

const initInput = (path) => {
    enter = fs.readFileSync(path, 'utf8');
}

const writeOutput = (path, out) => {
    fs.writeFileSync(path, out);
}

const errorGenerator = (err) => {
    if (err) {
        process.stderr.write(err.message + '\n');
        process.exit(1);
    }
}

let enter;
if(!options.shift) {
    errorGenerator('Shift (-s <number>) argument is required! Please check your input data!')
}

if(options.input){
    initInput(options.input)
}

if(options.output){ 
    const output = caesarMachine(enter, +options.shift, options.action)
    writeOutput(options.output, output);
}
if(!options.action){
    errorGenerator('Action (-a <type: encode | decode>) argument is required! Please check your input data!')
}
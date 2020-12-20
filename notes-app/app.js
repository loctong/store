// TODO how to use import
//import validator from 'validator';
// import from own files
const add1 = require('./utils');

const getNotes = require('./notes');
// import from npm
const validator = require('validator');
const chalk = require('chalk');
// import from core module
const fileSystem = require('fs');

const yargs = require('yargs');

// const fs = require('fs');

// fs.appendFileSync('notes.txt', '1');

// console.log(add1(1, 2));

console.log(chalk.bgRed(getNotes()))

console.log(validator.isEmail('sdsd@@sdss2d.vn'))

yargs.command({
    command: 'add',
    describe : 'Add ',
    builder: {
        title: {
            describe: 'Note ',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (){
        console.log('add commands')
    }
})

// 20/12/2020
// const params = process.argv;
// console.log(params)
// yargs.version('1.1.0')
console.log(yargs.argv)
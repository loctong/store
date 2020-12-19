// TODO how to use import
//import validator from 'validator';
const add1 = require('./utils');
const getNotes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');

// const fs = require('fs');

// fs.appendFileSync('notes.txt', '1');

// console.log(add1(1, 2));

console.log(chalk.bgRed(getNotes()))

console.log(validator.isEmail('sdsd@@sdss2d.vn'))


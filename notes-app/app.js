const noteApi = require('./notes');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe : 'Add ',
    builder: {
        title: {
            describe: 'Note ',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        noteApi.add(argv.title, argv.body);
    }
})

yargs.parse()
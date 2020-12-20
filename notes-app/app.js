const noteApi = require('./notes');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0')
// Create list command
yargs.command({
    command: 'list',
    describe: 'List',
    handler: function (argv) {
        console.log(noteApi.loadAll());
    }

})

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add ',
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
    handler: function (argv) {
        noteApi.add(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: '',
    builder: {
        title: {
            describe: 'Note ',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        noteApi.remove(argv.title)
    }
})

yargs.parse()
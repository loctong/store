const fileStream = require('fs')
const chalk = require('chalk')
const notesDb = 'notes_db.json'

const add = function (title, body) {
    const datas = loadAll();

    if (checkDuplicate(title, datas)) {
        console.log(chalk.green.inverse('title is taken'))
    } else {
        datas.push({
            title: title,
            body: body
        })

        save(datas)
    }
}

const checkDuplicate = function (title, datas) {
    // if no value , undefined is returned
    return datas.find(x => x.title == title);
}

const save = function (datas) {
    fileStream.writeFileSync(notesDb, JSON.stringify(datas))
}

const loadAll = function () {
    try {
        return JSON.parse(fileStream.readFileSync(notesDb))
    } catch (e) {
        return [];
    }
}

const remove = function (title) {
    const datas = loadAll();

    if (checkDuplicate(title, datas)) {
        const nodeToKeep = datas.filter(x => x.title !== title);
        save(nodeToKeep)
    } else {
        console.log(chalk.red.green('no matching data found'));

    }
}

module.exports = {
    add: add,
    loadAll: loadAll,
    remove: remove
}


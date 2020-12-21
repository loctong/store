const fileStream = require('fs')
const chalk = require('chalk')
const notesDb = 'notes_db.json'

const add = (title, body) => {
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

const checkDuplicate = (title, datas) => {
    // if no value , undefined is returned
    return datas.find(x => x.title == title);
}

const save = (datas) => {
    fileStream.writeFileSync(notesDb, JSON.stringify(datas))
}

const loadAll = () => {
    try {
        return JSON.parse(fileStream.readFileSync(notesDb))
    } catch (e) {
        return [];
    }
}

const remove = (title) => {
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


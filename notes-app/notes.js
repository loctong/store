const fileStream = require('fs')

const notesDb = 'notes_db.json'

const add = function(title, body) {
    const datas = loadAll();

    if (checkDuplicate(title, datas)) {
        console.log('title is taken');
    } else {
        datas.push({
            title : title,
            body : body
        })

        save(datas)
    }
}

const checkDuplicate = function(title, datas) {
    // if no value , undefined is returned
    return datas.find( x => x.title == title);
}

const save = function(datas) {
    fileStream.writeFileSync(notesDb, JSON.stringify(datas))
}

const loadAll = function() {
    try {
        return JSON.parse(fileStream.readFileSync(notesDb))
    } catch (e){
        return [];
    }
}


module.exports = {
    add: add,
    loadAll: loadAll
}


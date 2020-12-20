const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

//fs.writeFileSync('sample.txt', JSON.stringify(book));

const data = JSON.parse(fs.readFileSync('sample.txt'));
data.title = 'tong bao loc'

fs.writeFileSync('sample.txt', JSON.stringify(data));


// const bookJSON =  JSON.stringify(book);

// console.log(bookJSON)

// const a = JSON.parse(bookJSON);
// console.log(a.title);
import * as fs from 'fs/promises';

//let fs2 = require('fs/promises'); // to solve error of import

let result = await fs.readFile('boardgames.json');
console.log(result);

let data = JSON.parse(result);
//console.log(data);

for (let id in data) { //id (variable) in data (from let data json result boardgames.json)
    //console.log(id); //only execute the key
    console.log(data[id]); //cleanly seperated the code from key (first) to value(last)
}
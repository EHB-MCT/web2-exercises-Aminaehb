import * as fs from 'fs/promises';

//let fs2 = require('fs/promises'); // error of import

let result = await fs.readFile('boardgames.json');
console.log(result);

let data = JSON.parse(result);
console.log(data);
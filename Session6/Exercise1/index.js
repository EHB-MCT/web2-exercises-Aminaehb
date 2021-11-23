//create roots, execute some code in there and send the response

const express = require('express')
const app = express()
const port = 3000

//express needs to use these types of things
app.use(express.static('public')); //no roots but we have a public folder --> result: http://localhost:3000/info.html

app.get('/', (req, res) => { //when I call my API to do a GET request
  console.log('Local root called!'); //check if something is called + refresh page to see it called
  //res.send('Hello Amina!') //when a request is send to a server you have to send a response = res
  res.redirect('/info.html'); //instead of sending back a reponse we are redirecting to a different location
  // info.html will be added to the current html http://localhost:3000/
})

// create first new root
app.get('/test', (req, res) => { //test root
  res.send('Test succeeded!') // refresh page to see it or http://localhost:3000/test
}); // they send back data like a JSON file

app.get('/data', (req, res) => { // data root
  let exampleData = { //data with object
    name: 'Amina',
    age: 19
  } //JSON file
  res.send(exampleData); //result: http://localhost:3000/data
});

app.listen(port, () => { //start my server on this port
  console.log(`My first REST api listening at http://localhost:${port}`)
})

//terminal js: nodemon index.js 
//node = it will only run ones & when we change some code we have to stop and run the server again) 
//nodemone = allows it to automatically restart when we change some values
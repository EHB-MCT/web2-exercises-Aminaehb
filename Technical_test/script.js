// STEP 1
// console.log("Hello World")

// STEP 2

//"use strict";

//fetch('')
//.then(response => {
// console.log(response)
// response.json
//})
//:.then(data => {
//     console.log(data);
// })
//.catch(error => {
//    console.log('ERROR');
// })

// api from https://gyazo.com/ = nothing works because I think I need to be a member of it
//The API request to get a list of a user’s saved images.
//fetch('https://api.gyazo.com/api/images')
//{"message":"You are not authorized."}


//This API provides the information of the authenticated user.
//fetch('https://api.gyazo.com/api/users/me')
//response undefined

//This API provide image's raw URL.
//fetch('http://i.gyazo.com/8c9d9c8ec14dec4631b6ec77d1c85450_1.png')
// response = acces to fetch


// STEP 3
"use strict";

const img = document.getElementById('img');

async function getRandompictures() {
    let response = await fetch('https://api.thecatapi.com/v1/images/search') // = GET request --> we take the data from that API 
        .then(response => response.json())
        .then(data => {
            img.src = data[0].url
            //console.log(data);
        })
        .catch(error => {
            console.log('ERROR');
        })
}
getRandompictures();
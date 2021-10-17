let baseurl = 'http://www.omdbapi.com/?apikey=46b3f1ac&';

window.onload = function () {
    //console.log('loaded');
    //get value from input
    //...
    //build url
    let url = baseurl + 't=avengers';
    getData(url).then(result => {
        console.log(result);
    });
}


function list() {
    document.getElementById("content").innerHTML = "";
    list.forEach(list => {
        let html = ``;
        document.getElementById("content").insertAdjacentHTML("beforeend", html);
    });

}


//add t = title
// add s = season

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}
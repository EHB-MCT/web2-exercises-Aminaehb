"use strict";
import Team from './team';
import team from './team'

let list = [];
let pokemon = [];

function getData() {
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            list = data.results;
            for (let element of list)(
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                    console.log(pokemon);
                })
            )

            function list() {
                let html = ` <div class="pokemon">
                <h2 class="title"></h2>
                <img class="img" src=" " alt="">
                <p class="text"></p>
                </div>`
            };
            document.getElementById("list").insertAdjacentHTML("beforeend", html);
        })
let team1 = new Team;
}
window.onload = Function();

getData();
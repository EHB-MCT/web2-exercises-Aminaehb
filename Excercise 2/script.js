"use strict";


const list = [];

function getData() {
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            list = data.results;
            for (let element of list)(
                fetch(element).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                    console.log(pokemon);
                })
            )

            function List() {
                let html = `<article>
    <div class="pokemon">
        <h2 class="title">Bulbasaur</h2>
        <img class="img" src="https://pokeapi.co/api/v2/pokemon/9/" alt="">
        <p class="text">Grass</p>
        <p class="text2">Poison</p>
    </div>
</article>`
            };
        })

}
window.onload = Function();
getData();
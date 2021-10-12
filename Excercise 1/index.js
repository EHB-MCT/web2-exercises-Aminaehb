"use strict";

window.onload = function () { // window.onload = browser helemaal laden 
    console.log('loaded');

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;
        console.log(name);

        document.getElementById('messages').innerHTML = getMessage(name, email, order);

    });

    function getMessage(name, email, order) {
        return '<p> The order for the customer $(name) is the following $(order) with the email: $(email) </p>';
    }

}
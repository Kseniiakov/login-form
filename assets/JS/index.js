"use strict";

const form = document.querySelector('#login');

const loginData = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(loginData.username === '') {
        usernameInput.style.border = '1px solid red';
        return;
    }
   
    if(loginData.password === '') {
        passwordInput.style.border = '1px solid red';
        return;
    }
   
    console.log(loginData.username);
});

const usernameInput = document.querySelector('[name="username"]');
const passwordInput = document.querySelector('[name="password"]');

function onInput(event) {
    loginData[event.target.name] = event.target.value;
}
usernameInput.addEventListener('input', onInput);
passwordInput.addEventListener('input', onInput);
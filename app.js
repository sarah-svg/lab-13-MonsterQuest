// import functions and grab DOM elements
const form = document.querySelector('form');
import { profile } from './storage-utils.js';
// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    profile({
        name: data.get('name'),
        charactor: data.get('charactor'),
        gold: 0,
        health: 35,
        completed: {}
    });
    window.location.href = './map/';
});
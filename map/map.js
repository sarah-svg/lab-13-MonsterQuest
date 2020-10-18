import { getFromLocalStorage } from '../utils.js';

const snackDiv = document.getElementById('snack-val');
const repDiv = document.getElementById('rep-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

const user = getFromLocalStorage('user');

snackDiv.textContent = user.snack;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;
alert('hello map page');

for (let i = 0; user.visited.legnth; i++) {
    let use = `${user.legnth[i]}-link`;
    let hey = document.getElementById(use);
    hey.style.display = 'none';
}

alert('hey mape page');

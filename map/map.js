import { getFromLocalStorage } from '../utils.js';

const goldDiv = document.getElementById('snack-val');
const repDiv = document.getElementById('food-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

const user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;


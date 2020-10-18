console.log('hello');
alert('hello');

import { getFromLocalStorage } from '../utils.js';

let food = [
    {
        id: 'high food intake',
        description: 'You had a awsome run traveling with the gang'
    },
    {
        id: 'medium food intake',
        description: 'You coould have got a better score better luck next time'
    },
    {
        id: 'low food intake',
        description: 'Better luck next time'
    },
];
alert('food');
export let snacks = [
    {
        id: 'high scooby snack score',
        description: 'You did a amazing job on catching the scooby snacks'
    },
    {
        id: 'medium scooby snack score',
        description: 'You could have got more scooby snacks. Better luck next time'
    },
    {
        id: 'low scooby snack score',
        description: 'Better luck next time'
    },
];
alert('snacks');
  //////////////////////  
let foodVal = document.getElementById('food-val');
let snackVal = document.getElementById('snack-val');
let name = document.getElementById('name');
let avatarDiv = document.getElementById('avatar');

let user = getFromLocalStorage('user');

foodVal.textContent = user.food;
snackVal.textContent = user.snacks;
name.textContent = user.name;
avatarDiv.textContent = user.avatarUrl;

const outcomeDiv = document.getElementById('outcome');
let outcomeString;

if (user.snacks >= 220){
    outcomeString = food[0].description;
} else if (user.snacks < 220 && user.snacks > 60){
    outcomeString = food[1].description;
} else {
    outcomeString = food[2].description;
}

if (user.rep >= 150){
    outcomeString = outcomeString + ' ' + snacks[0].description;
} else if (user.rep < 150 && user.rep > 70){
    outcomeString = outcomeString + ' ' + snacks[1].description;
} else {
    outcomeString = outcomeString + ' ' + snacks[2].description;
}


outcomeDiv.textContent = outcomeString;

const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    window.location.replace('../index.html');

    alert('hello');
}); console.log('hello');


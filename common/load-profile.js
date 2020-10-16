import { getUser } from '../data/api.js';
import isOver from './is-dead.js';

function loadProfile() {

    const name = document.getElementById('name');
    const character = document.getElementById('characters');
    const hp = document.getElementById('hp');
    const scoobySnacks = document.getElementById('scoobySnacks');

  
    const user = getUser();


    if (!user) {
        window.location = './';
    }

    alert('hey');
    name.textContent = user.name;
    character.src = '../assets/avatars/' + user.character + '.png';
    scoobySnacks.textContent = user.scoobySnacks;


    if (isOver(user)) {
        hp.textContent = 'YOU DIED!!!';
    }
    else {
        hp.textContent = user.hp;
    }

}

export default loadProfile;
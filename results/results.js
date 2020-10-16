import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './score-hp.js';
import scoreScoobySnacks from './score-snacks.js';
import { hpMessages, aliveScoobyMessages, deadScoobyMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const snackResult = scoreScoobySnacks(user.scoobySnacks);
const hpMessage = hpMessages[hpResult];

let scoobyMessages = null;
if (hpResult === 'dead') {
    scoobyMessages = deadScoobyMessages;
}
else {
    scoobyMessages = aliveScoobyMessages;
}

const scoobyMessage = scoobyMessages[snackResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.character + ', ';
story += hpMessage + ' and ' + scoobyMessage + '.';

storyDisplay.textContent = story;
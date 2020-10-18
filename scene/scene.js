import { findByID, getFromLocalStorage } from '../utils.js';
import info from '../data/data.js';

const goldDiv = document.getElementById('snack-val');
const repDiv = document.getElementById('food-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

const user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

let i;
if (id === 'rome'){
    i = 0;
} else if (id === 'travel') {
    i = 1;
} else if (id === 'castle') {
    i = 2;
} else if (id === 'clown') {
    i = 3;
}
alert('*');

const mainDiv = document.getElementsByTagName('main')[0];

const labelDiv = document.createElement('label');
labelDiv.id = 'header';
labelDiv.textContent = info[i].title;

const imgDiv = document.createElement('img');
imgDiv.src = info[i].image;

const pDiv = document.createElement('p');
pDiv.textContent = info[i].description;

const columnDiv = document.createElement('div');
columnDiv.classList.add('flex-column');
const rowDiv0 = document.createElement('label');
rowDiv0.classList.add('row');
const rowDiv1 = document.createElement('label');
rowDiv1.classList.add('row');
const rowDiv2 = document.createElement('label');
rowDiv2.classList.add('row');
const inputDiv0 = document.createElement('input');
inputDiv0.type = 'radio';
inputDiv0.name = 'options';
inputDiv0.checked = true;
inputDiv0.id = info[i].choices[0].id;
const inputDiv1 = document.createElement('input');
inputDiv1.type = 'radio';
inputDiv1.name = 'options';
inputDiv1.id = info[i].choices[1].id;
const inputDiv2 = document.createElement('input');
inputDiv2.type = 'radio';
inputDiv2.name = 'options';
inputDiv2.id = info[i].choices[2].id;

const opt0 = document.createElement('label');
opt0.textContent = info[i].choices[0].description;
const opt1 = document.createElement('label');
opt1.textContent = info[i].choices[1].description;
const opt2 = document.createElement('label');
opt2.textContent = info[i].choices[2].description;

const optionButtonDiv = document.createElement('button');
optionButtonDiv.textContent = 'Do it!';
optionButtonDiv.id = 'option-button';

const continueButtonDiv = document.createElement('button');
continueButtonDiv.textContent = 'Continue!';
continueButtonDiv.id = 'continue-button';
continueButtonDiv.style.display = 'none';

mainDiv.appendChild(labelDiv);
mainDiv.appendChild(imgDiv);
mainDiv.appendChild(pDiv);
mainDiv.appendChild(columnDiv);
columnDiv.appendChild(rowDiv0);
rowDiv0.appendChild(inputDiv0);
rowDiv0.appendChild(opt0);
columnDiv.appendChild(rowDiv1);
rowDiv1.appendChild(inputDiv1);
rowDiv1.appendChild(opt1);
columnDiv.appendChild(rowDiv2);
rowDiv2.appendChild(inputDiv2);
rowDiv2.appendChild(opt2);
mainDiv.appendChild(optionButtonDiv);
mainDiv.appendChild(continueButtonDiv);




optionButtonDiv.addEventListener('click', () => {
    const checkedRadioButton = document.querySelector('input[type=radio]:checked');

  
    const text = findByID(info[i].choices, checkedRadioButton.id);

    pDiv.textContent = text.outcome;
    const div = document.getElementsByClassName('flex-column')[1];
    div.style.display = 'none';

    continueButtonDiv.style.display = 'block';
    optionButtonDiv.style.display = 'none';
    
});


continueButtonDiv.addEventListener('click', () => {

    if (user.visited.length === 4) {
        window.location.replace('../reult/index.html');
    } else {
        window.location.replace('../map/map.html');
    }
});

alert('conitinue');






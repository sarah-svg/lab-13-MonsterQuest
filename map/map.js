import quests from '../data.js';

const ul = document.querySelector('ul');

quests.forEach(quest => {
    const link = document.createElement('a');
    link.textContent = quest.title;
    ul.append(link);
})
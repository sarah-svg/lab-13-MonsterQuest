function scoreMonsterQuest(choice, questId, user) {
    user.hp += choice.hp;
    user.scoobySnacks += choice.scoobySnacks;
    user.completed[questId] = true;
}

export default scoreMonsterQuest;
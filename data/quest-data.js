


const monsters = {
    id: 'monsters',
    title: 'A SeaMonster',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monster.png',
    description: `
        After you and the gang jump out the van. You realise Mr. Cole isnt there and you
        see a sea monster walk out of the lake. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            fish dinners from the town bar. They give you 35 snacks for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        scoobySnacks: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Fred decides to make a trap. The sea monster slips out of the net.
            The bad news is you take 30 hp damage. The good news is you
            find 50 snacks.
        `,
        hp: -30,
        scoobySnacks: 50
    }, {
        id: 'run',
        description: 'Run away to the van',
        result: `
            As you make a dash for the store you slide on mud 
            causing 50 hp damage.
        `,
        hp: -50,
        scoobySnacks: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Computor Virus',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.png',
    description: `
        You travel to one of you college roomates house and learn he developed a game that now has
        a virus that is out of the computer what do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 scooby snacks.
            Unluckily, you trip over a discarded bannana peel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        scoobySnacks: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the virus, who sees you approach
            and let's loose a fireballs. You wake up the in the game and the
            now you have to get scooby snacks to get out of the game.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        scoobySnacks: 0
    }, {
        id: 'snacks',
        description: 'Grab the nearest snacks',
        result: `
            Inspired by the legend of ScoobyPaw, you notice a
            scooby snack, climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you grab the snacks and are wisked away to the next level. The 
            game awards you 90 scooby snacks.
        `,
        hp: 0,
        scoobySnacks: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'Go home',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
   
    description: `
        As you leave Fred asks you if you want to solve another mystery.
        Just as you start to imagine the food, you see anothe monster comming towards
        you. You'll need to make a run for it or
        do you want to stay solve another mystery?
    `,
    choices: [{
        id: 'leave',
        description: 'drive away',
        result: 'You grab 40 scooby snacks!',
        hp: 0,
        scoobySnacks: 40
    }, {
        id: 'stay',
        description: 'stay',
        result: 'Oh no! The monster crashes into the van and now you can not leave!',
        hp: -50,
        scoobySnacks: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon
];

export default quests;
export default [
    {
        id: 'rome',
        title: 'Rome',
        image: '../assets/quests/place1.png',
        description: 'As you arrive in Rome! You notice your favorite  food spot has a monster issue. And notice some scooby snacks laying on the ground. What do you say?',
        choices: [
            {
                id: 'selfish',
                description: 'Finders keepers!',
                outcome: 'You keep all of the scooby snacks you found but the owner of your favorite resturant is not happy with you for your selfishness. You leave Rome immediately in fear of getting your food stolen.',
                gold: 50,
                rep: -30
            },
            {
                id: 'moderate',
                description: 'I can spare a few minutes to help with the mystery but I need your help.',
                outcome: 'The owner is extremely grateful. The rest of the waiteress gives you a pizza and a box of scooby snacks.',
                gold: 25,
                rep: 20
            },
            {
                id: 'charity',
                description: 'I\'m on this mystery for the fun and don\'t need all this food weighing me down! Please feed the homeless!',
                outcome: 'The resturant errupts in cheering and applause. The owners are so extatic that they tell you to come by anytime for free food, drink, and lodging!',
                gold: 0,
                rep: 50
            }
        ]
    }
    ,
    {
        id: 'travel',
        title: 'Travel',
        image: '../assets/quests/place2.png',
        description: 'As you continue on your road trip around the world. You noticed another mystery. What do you do?"',
        choices: [
            {
                id: 'sneaky',
                description: 'This mystery looks intimidating and the gang turns around.',
                outcome: 'As leave you notice a bou that needs your help.',
                gold: 0,
                rep: 20
            },
            {
                id: 'brazen',
                description: 'Your try to nogociate but the monster isnt hearing it',
                outcome: 'The monster smashes the van',
                gold: 10,
                rep: -20
            },
            {
                id: 'bribe',
                description: 'Would you like a box of scooby snacks?.',
                outcome: 'The monster grabs the snacks and chomps away.',
                gold: -20,
                rep: 10
            }
        ]
    },
    {
        id: 'castle',
        title: 'castle',
        image: '../assets/quests/place3.png',
        description: 'After driving for days you arrive at this old castle. What do you take?',
        choices: [
            {
                id: 'small',
                description: 'enter',
                outcome: 'The housekeeper invites you in and feeds you!',
                gold: 0,
                rep: 20
            },
            {
                id: 'medium',
                description: 'ask for directios',
                outcome: 'You dont want to solve anymore mysterys so you get directions and leave.',
                gold: -20,
                rep: 10
            },
            {
                id: 'large',
                description: 'keep traveling',
                outcome: 'Shaggy mentions how scary the castle looks and the gang leaves the castle.',
                gold: -50,
                rep: -20
            }
        ]
    },
    {
        id: 'clown',
        title: 'CLown',
        image: '../assets/quests/place4.png',
        description: 'Now you have a full gas tank you arrive a an amusment park. What do you do?',
        choices: [
            {
                id: 'risky',
                description: 'Go in.',
                outcome: 'You go in even tho its closed and creepy. ',
                gold: 100,
                rep: -30
            },
            {
                id: 'polite',
                description: 'Talk to the security graud.',
                outcome: 'You chat with the guard who mentions there is a clown loose.',
                gold: 0,
                rep: 30
            },
            {
                id: 'nothing',
                description: 'Look at the the lights',
                outcome: 'You soak in the view csuse you love amusment parks!',
                gold: 0,
                rep: 0
            }
        ]
    }
];
    
    
    
    
    







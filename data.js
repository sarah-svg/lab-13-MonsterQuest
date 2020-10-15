export default [
    {
        id: 'monster',
        title: 'Halloween party over run with vampires',
        map: {

        },
        image: 'vampire.png',
        description: `
        Tonight is the night of the big halloween bash everyon will be there.gutter-right
        After you walk in you nitice it is over run with vampires. What do you do?
        `,
        choices: [{
            id: 'negotiate',
            description: 'Nogotiate with the vampires',
            result: `
            Know that the vampires are super hungry, you offer to go get some blood at the nearest
            blood bank. The give you ten gold coins for gas.
            `,
            health: 0,
            gold: 10
        }, {
            id: 'fight',
            description: 'fight for you life!',
            result: `
            Grabbing the nearest wooden chair you charge at the closest on. Before 
            long you realize all the vampires are piles of dust. The bad news you take
            20 health points, but find 40 gold.
            `,
            health: -20,
            gold: 40
        }, {
            id: 'run',
            description: 'run like the wind',
            result: `
            As you run away a vampire close to the door kicks his leg out and you fall
            down the steps causing 60 health points landing on 100 gold points.
            `,
            health: -60,
            gold: 100
        }]
    },
    {
        id: 'zombie',
        title: 'A zzombie'
        map: {

        },
        image: 'zombie.png',
        description: `
        As you run out the house. You notice a zombie coming at you.
        What do you do?
        `,
        choices: [{
            id: 'run',
            description: 'Run to you car and drive off!',
            result: `
            You run in the opposite direction. Luckily you car is nearby. But in a panic you
            drop you money and lose 10 gold and break a nail causing 10 health points!
            `,
            health: -10,
            gold: -10
        }, {
            id: 'fight',
            description: 'Fight the zombie!',
            result: `
            You attempt to ram the zombie and fall on a rock hurting your leg and
            gaining 20 health points
            `,
            health: -20,
            gold: 0,
        }, {
            id: 'doomsday preeper',
            description: 'A remember the neighbor has a bunker full of weapons',
            result: `
            Inspired by The Walking Dead you grab a machette and give the zombie mercy
            Amazingly you didn't get harmed in the scuffle and found 20 gold coins!
            `,
            health: 0,
            gold: 20
        },
        {
            id: 'home',
            title: 'After you night you go home',
            map: {

            },
            prerequisites: ['monster', 'zombie'];
            image: 'home.png',
            description: `
            As you arrive home you notine the door is open. Do you go in?
            `,
            choices: [{
                id: 'go in',
                description: 'Walk in you house.',
                result: 'Oh no! My parents bite you and you take 50 hp damage',
                hp: -50,
                gold: 0
            }, {
                id: 'walk away',
                description: 'Jump back in your car!',
                result: 'Oh no! My zombie bites before you get in and you and you take 50 hp damage',
                hp: -50,
                gold: 0
            } {
                id: 'blow up',
                description: 'Just blow it up!',
                result: 'After your previous encounter you decide to blow it up! Resulting in finding a 100 gold pieces.',
                hp: 0,
                gold: 100
    
            }]
        }
    ];
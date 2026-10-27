export const pokemons = [
    {
        name: 'Pikachu',
        type: 'electric',
        hp: 274,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        attacks: [
            { name: 'thunder jolt', maxDamage: 40, minDamage: 20, maxCount: 10 },
            { name: 'electro ball', maxDamage: 60, minDamage: 45, maxCount: 6 },
            { name: 'volt tackle', maxDamage: 75, minDamage: 60, maxCount: 4 },
            { name: 'thunder crack', maxDamage: 160, minDamage: 130, maxCount: 2 },
        ],
    },
    {
        name: 'Charmander',
        type: 'fire',
        hp: 282,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        attacks: [
            { name: 'ember', maxDamage: 40, minDamage: 20, maxCount: 10 },
            { name: 'flamethrower', maxDamage: 60, minDamage: 45, maxCount: 6 },
            { name: 'fire spin', maxDamage: 75, minDamage: 60, maxCount: 4 },
            { name: 'inferno', maxDamage: 130, minDamage: 110, maxCount: 2 },
        ],
    },
    {
        name: 'Bulbasaur',
        type: 'grass',
        hp: 294,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        attacks: [
            { name: 'vine whip', maxDamage: 35, minDamage: 15, maxCount: 10 },
            { name: 'razor leaf', maxDamage: 55, minDamage: 40, maxCount: 6 },
            { name: 'seed bomb', maxDamage: 70, minDamage: 55, maxCount: 4 },
            { name: 'solar beam', maxDamage: 150, minDamage: 120, maxCount: 2 },
        ],
    },
    {
        name: 'Squirtle',
        type: 'water',
        hp: 292,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        attacks: [
            { name: 'water gun', maxDamage: 35, minDamage: 20, maxCount: 10 },
            { name: 'bubble beam', maxDamage: 55, minDamage: 40, maxCount: 6 },
            { name: 'aqua tail', maxDamage: 70, minDamage: 55, maxCount: 4 },
            { name: 'hydro pump', maxDamage: 150, minDamage: 120, maxCount: 2 },
        ],
    },
    {
        name: 'Eevee',
        type: 'normal',
        hp: 314,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        attacks: [
            { name: 'quick attack', maxDamage: 30, minDamage: 15, maxCount: 10 },
            { name: 'bite', maxDamage: 50, minDamage: 35, maxCount: 6 },
            { name: 'swift', maxDamage: 65, minDamage: 50, maxCount: 4 },
            { name: 'last resort', maxDamage: 140, minDamage: 110, maxCount: 2 },
        ],
    },
];

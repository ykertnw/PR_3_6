import Pokemon from './pokemon.js';
import { pokemons } from './pokemons.js';
import { random, createClickCounter } from './utils.js';
import { generateLog, addLog, clearLogs } from './logs.js';

class Game {
    constructor() {
        this.$control = document.querySelector('.control');
        this.player1 = null; 
        this.player2 = null;
        this.wins = 0;
    }

    init() {
        this.showButton('START GAME', () => this.startGame());
    }

    getRandomPokemon(exclude = []) {
        const list = pokemons.filter(({ name }) => !exclude.includes(name));
        return list[random(list.length - 1)];
    }

    createPlayer(data, selectors) {
        return new Pokemon({ ...data, selectors });
    }

    clearButtons() {
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach($item => $item.remove());
    }

    createButton(text) {
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = text;
        this.$control.appendChild($btn);
        return $btn;
    }

    showButton(text, handler) {
        this.clearButtons();
        const $btn = this.createButton(text);
        $btn.addEventListener('click', handler);
    }

    startGame() {
        this.clearButtons();
        clearLogs();
        this.wins = 0;

        const pokemon1 = this.getRandomPokemon();
        const pokemon2 = this.getRandomPokemon([pokemon1.name]);

        this.player1 = this.createPlayer(pokemon1, 'player1');
        this.player2 = this.createPlayer(pokemon2, 'player2');

        addLog(`Бій починається: ${this.player1.name} проти ${this.player2.name}!`);
        this.renderAttackButtons();
    }

    resetGame() {
        this.startGame();
    }

    renderAttackButtons() {
        this.player1.attacks.forEach(item => {
            const $btn = this.createButton(item.name);
            const btnCount = createClickCounter($btn, item.maxCount);

            $btn.addEventListener('click', () => {
                btnCount();
                this.fight(item);
            });
        });
    }

    attack(attacker, defender, { minDamage, maxDamage }) {
        const damage = random(maxDamage, minDamage);

        defender.changeHP(damage);
        addLog(generateLog(defender, attacker, damage));
    }

    fight(playerAttack) {
        const { player1, player2 } = this;

        this.attack(player1, player2, playerAttack);

        if (player2.isDead) {
            this.nextEnemy();
        } else {
            this.attack(player2, player1, player2.attacks[0]);
        }

        if (player1.isDead) {
            this.gameOver(`Бідний ${player1.name} програв бій!`);
        } else if (this.noAttacksLeft()) {
            this.gameOver(`У ${player1.name} закінчились удари!`);
        }
    }

    nextEnemy() {
        this.wins++;
        addLog(`${this.player2.name} переможений! Перемог: ${this.wins}`);

        const next = this.getRandomPokemon([this.player1.name, this.player2.name]);
        this.player2 = this.createPlayer(next, 'player2');

        addLog(`Новий суперник: ${this.player2.name}!`);
    }

    noAttacksLeft() {
        const buttons = [...this.$control.querySelectorAll('.button')];
        return buttons.every($btn => $btn.disabled);
    }

    gameOver(text) {
        addLog(`${text} Переможених суперників: ${this.wins}.`);
        this.showButton('RESET GAME', () => this.resetGame());
    }
}

export default Game;

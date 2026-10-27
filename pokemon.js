class Pokemon {
    constructor({ name, hp, type, img, attacks = [], selectors }) {
        this.name = name;
        this.type = type;
        this.img = img;
        this.attacks = attacks;
        this.selectors = selectors;
        this.defaultHP = hp;
        this.damageHP = hp;

        this.elImg = document.getElementById(`img-${selectors}`);
        this.elName = document.getElementById(`name-${selectors}`);
        this.elHP = document.getElementById(`health-${selectors}`);
        this.elProgressbar = document.getElementById(`progressbar-${selectors}`);

        this.renderImg();
        this.renderName();
        this.renderHP();
    }

    get isDead() {
        return this.damageHP === 0;
    }

    renderImg() {
        this.elImg.src = this.img;
        this.elImg.alt = this.name;
    }

    renderName() {
        this.elName.innerText = this.name;
    }

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife() {
        const { elHP, damageHP, defaultHP } = this;
        elHP.innerText = `${damageHP} / ${defaultHP}`;
    }

    renderProgressbarHP() {
        const { elProgressbar, damageHP, defaultHP } = this;
        const percent = damageHP / defaultHP * 100;

        elProgressbar.style.width = `${percent}%`;
        elProgressbar.classList.remove('low', 'critical');

        if (percent <= 20) {
            elProgressbar.classList.add('critical');
        } else if (percent <= 60) {
            elProgressbar.classList.add('low');
        }
    }

    changeHP(count) {
        this.damageHP = Math.max(this.damageHP - count, 0);
        this.renderHP();
    }
}

export default Pokemon;

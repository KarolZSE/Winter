const Game = document.getElementById('Game');
const TreeCutting = document.getElementById('TreeCutting');
let grid = [];
let growStage = [];
let count = 0;
const Player = document.getElementById('Player');
const rect = Game.getBoundingClientRect();
Player.style.left = rect.left + 'px';
Player.style.top = rect.top + 'px';

for (let i = 0; i < 15; i++) {
    grid[i] = [];
    growStage[i] = [];
    for (let j = 0; j < 15; j++) {
        const block = document.createElement('div');
        count++;

        if (count % 4 == 0) {
            growStage[i][j] = 0;
            block.textContent = growStage[i][j];
            block.classList.add('tree');
            block.addEventListener('click', () => {
                HitsRequiered = 5;
                TreeCutting.style.display = 'flex';
                AccuracyRect = document.getElementById('AccuracyBar').getBoundingClientRect();
                let temp = 0;
                setInterval(() => {
                    if (temp >= 28) temp = 0;
                    console.log('12345')
                    document.getElementById('Tree').style.backgroundPosition = `-${200 * temp++}px 0`;
                }, 300);
            });
        };

        Game.appendChild(block);
    }
}

let x = y = 0;
const HitsRequieredHTML = document.getElementById('HitsRequiered');
let HitsRequiered = 5;
const trees = document.querySelectorAll('.tree')
document.addEventListener('keydown', (e) => {
    x = y = 0;
    if (e.key.toLowerCase() === 'w') {
        y = -4;

    } else if (e.key.toLowerCase() === 's') {
        y = 4;

    } else if (e.key.toLowerCase() === 'd') {
        x = 4;

    } else if (e.key.toLowerCase() === 'a') {
        x = -4;

    } else if (e.key === ' ') {
        if (Math.random() <= (1 - Math.abs((PointerMoveCount / AccuracyRect.width) * 2 - 1))) HitsRequiered--;
        HitsRequieredHTML.textContent = HitsRequiered;

        if (HitsRequiered <= 0) {
            TreeCutting.style.display = 'none';
        }
    }

    Player.style.top = Player.offsetTop + y + 'px';
    Player.style.left = Player.offsetLeft + x + 'px';
    trees.forEach(ev => {
        if(isColliding(Player, ev)) {
            Player.style.top = Player.offsetTop - y + 'px';
            Player.style.left = Player.offsetLeft - x + 'px';
        }
    });
});

function isColliding(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < (bRect.left)) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

const Pointer = document.getElementById('Pointer');
let AccuracyRect = document.getElementById('AccuracyBar').getBoundingClientRect();
let PointerMoveCount = 0;
let z = 3;
setInterval(() => {
    PointerMoveCount += z;
    Pointer.style.left = PointerMoveCount + 'px';
    if (PointerMoveCount >= AccuracyRect.width) {
        z = -3;
    } else if (PointerMoveCount <= 0) z = 3;
}, 10);

const Game = document.getElementById('Game');
let grid = [];
let count = 0;
const Player = document.getElementById('Player');
const rect = Game.getBoundingClientRect();
console.log(rect.left, rect.top);
Player.style.left = rect.left + 'px';
Player.style.top = rect.top + 'px';

for (let i = 0; i < 15; i++) {
    grid[i] = [];
    for (let j = 0; j < 15; j++) {
        const block = document.createElement('div');
        block.textContent = count++;
        
        if (count % 4 == 0) {
            grid[i][j] = 'tree';
            block.classList.add('tree'); 
        }

        Game.appendChild(block);
    }
}

let x = y = 0;
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
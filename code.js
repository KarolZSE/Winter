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
        
        if (Math.random() > 0.5) {
            grid[i][j] = 'tree';
            block.classList.add('tree'); 
        }

        Game.appendChild(block);
    }
}


document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'w') {
        Player.style.top = Player.offsetTop - 3 + 'px';

    } else if (e.key.toLowerCase() === 's') {
        Player.style.top = Player.offsetTop + 3 + 'px';

    } else if (e.key.toLowerCase() === 'd') {
        Player.style.left = Player.offsetLeft + 3 + 'px';

    } else if (e.key.toLowerCase() === 'a') {
        Player.style.left = Player.offsetLeft - 3 + 'px';

    }
});
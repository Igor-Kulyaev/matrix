let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let mass = 'abcdefghijklmnopqrstuvwxyz';

mass = mass.split('');

let font_size = 15;

let columns = canvas.width / font_size;

let drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = font_size + 'px arial';

    for (let i = 0; i < drops.length; i++) {
        let text = mass[Math.floor(Math.random() * mass.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);
const area = document.getElementById('interactionArea');
const colors = [
    '#FF007F', '#FF7F00', '#FFBF00', '#FFFF00', '#BFFF00', '#7FFF00',
    '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF'
];

function getColorByLocation(x, y) {
    const col = Math.floor((x / window.innerWidth) * 6);
    const row = Math.floor((y / window.innerHeight) * 4);
    return colors[(row * 6 + col) % colors.length];
}

function createColorRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.classList.add('color-ripple');
    ripple.style.backgroundColor = getColorByLocation(x, y);
    
    const size = Math.max(window.innerWidth, window.innerHeight) * 0.3;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    area.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}

window.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.8) createColorRipple(e.clientX, e.clientY);
});

const area = document.getElementById('interactionArea');
const colors = [
    '#FF007F', '#FF7F00', '#FFBF00', '#FFFF00', '#BFFF00', '#7FFF00',
    '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF'
];

function getColorByLocation(x, y) {
    const numCols = 6; 
    const numRows = 4; 
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const col = Math.floor((x / width) * numCols);
    const row = Math.floor((y / height) * numRows);
    
    const index = row * numCols + col;
    return colors[index % colors.length];
}

function createColorRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.classList.add('color-ripple');
    
    const color = getColorByLocation(x, y);
    ripple.style.backgroundColor = color;
    
    const size = Math.max(window.innerWidth, window.innerHeight) * 0.3;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    area.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

window.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.8) { 
        createColorRipple(e.clientX, e.clientY);
    }
});

window.addEventListener('touchmove', (e) => {
    if (Math.random() < 0.9) { 
        const touch = e.touches[0];
        createColorRipple(touch.clientX, touch.clientY);
    }
}, { passive: true });
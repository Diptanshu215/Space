document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dot-container');
    const numberOfDots = 100; // Adjust the number of dots as needed

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        container.appendChild(dot);
    }

    document.getElementById('enter-button').addEventListener('click', function() {
        document.getElementById('sec').scrollIntoView({ behavior: 'smooth' });
    });
});

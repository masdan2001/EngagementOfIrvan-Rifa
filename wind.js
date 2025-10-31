// Create wind particles
function createWindParticles() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1';

    // Create multiple particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'wind-particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        container.appendChild(particle);
    }

    document.body.appendChild(container);
}

// Initialize wind effect
document.addEventListener('DOMContentLoaded', createWindParticles);

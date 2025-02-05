const heartsContainer = document.querySelector('.hearts');
const surpriseBtn = document.getElementById('surprise-btn');
const surpriseMessage = document.getElementById('surprise-message');

// Create floating hearts
for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heartsContainer.appendChild(heart);
}

// Reveal surprise message
surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
});
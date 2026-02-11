const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// 1. Function to move the "No" button away
function moveButton() {
    // Calculate random positions within the visible window
    const padding = 20;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

    noBtn.style.position = "fixed"; // Switch to fixed for global movement
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Move on hover (makes it impossible to click)
noBtn.addEventListener("mouseover", moveButton);
// Also move on click just in case they manage to tap it on mobile
noBtn.addEventListener("click", moveButton);

// 2. Confetti Creation
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    const colors = ["#ff4d6d", "#ffd700", "#00ffcc", "#ff69b4", "#8a2be2"];
    
    confetti.style.position = "fixed";
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.borderRadius = "2px";
    confetti.style.zIndex = "100";
    
    // Add falling animation
    const duration = Math.random() * 3 + 2;
    confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), duration * 1000);
}

// 3. Heart Creation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = ["❤️", "💖", "💝", "💕"][Math.floor(Math.random() * 4)]; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// 4. Success State
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️<br><span style='font-size: 18px;'>You're stuck with me now!</span>";
    mainImage.style.display = "block"; 
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.2)";
    yesBtn.style.animation = "none"; // Stop pulsing after click

    // Trigger mass effects
    for (let i = 0; i < 75; i++) {
        setTimeout(createHeart, i * 150);
        setTimeout(createConfetti, i * 100);
    }
});

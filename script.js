const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// Preload image
const imgPreload = new Image();
imgPreload.src = "lyn.png";

// 1. Create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => { 
        heart.remove(); 
    }, 5000);
}

// 2. Move No button on click
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = "none";
}
noBtn.addEventListener("click", moveButton);

// 3. Confetti Animation
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    const colors = ["#ff4d6d", "#ffd700", "#00ffcc", "#ff69b4", "#8a2be2"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.width = Math.random() * 8 + 5 + "px";
    confetti.style.height = confetti.style.width;

    // random animation duration
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
}

// 4. Yes button click
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block"; 
    noBtn.style.display = "none";

    // Hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }

    // Confetti
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfetti, i * 50);
    }
});

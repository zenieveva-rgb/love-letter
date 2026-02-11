const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// 1. Teleport No button to a random place on Click
function moveButton() {
    // Calculate safe random positions for mobile screens
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = "none"; // Remove initial centering
}

noBtn.addEventListener("click", moveButton);

// 2. Confetti Effect
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    const colors = ["#ff4d6d", "#ffd700", "#00ffcc", "#ff69b4", "#8a2be2"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.borderRadius = "2px";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
}

// 3. Heart Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

// 4. Yes button click
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block"; 
    noBtn.style.display = "none"; // Hide No button only after Yes is clicked
    yesBtn.style.animation = "none"; // Stop pulsing

    // Start all animations
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
        setTimeout(createConfetti, i * 50);
    }
});

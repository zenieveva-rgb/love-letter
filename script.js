const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// 1. Teleport No button to a random place
function moveButton() {
    // Get screen dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate random position (staying 10% away from edges for mobile)
    const randomX = Math.floor(Math.random() * (screenWidth - 100));
    const randomY = Math.floor(Math.random() * (screenHeight - 50));

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.margin = "0"; // Reset any CSS margins
}

noBtn.addEventListener("click", moveButton);

// 2. Confetti Effect
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    const colors = ["#ff4d6d", "#ffd700", "#00ffcc", "#ff69b4", "#8a2be2"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
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
    noBtn.style.display = "none"; // Hide No button only at the very end

    // Start Animations
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
        setTimeout(createConfetti, i * 50);
    }
});

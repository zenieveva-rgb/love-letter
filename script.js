const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// Preload image
const imgPreload = new Image();
imgPreload.src = "lyn.png";

// --- 1. Floating hearts ---
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// --- 2. Confetti ---
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    const colors = ["#ff4d6d", "#ffd700", "#00ffcc", "#ff69b4", "#8a2be2"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.width = Math.random() * 8 + 5 + "px";
    confetti.style.height = confetti.style.width;
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
}

// --- 3. Firework burst ---
function createFirework(x, y) {
    for (let i = 0; i < 20; i++) {
        const fw = document.createElement("div");
        fw.classList.add("firework");
        fw.style.left = x + "px";
        fw.style.top = y + "px";
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100 + 50;
        fw.style.setProperty('--dx', Math.cos(angle) * distance);
        fw.style.setProperty('--dy', Math.sin(angle) * distance);
        fw.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        document.body.appendChild(fw);
        setTimeout(() => fw.remove(), 800);
    }
}

// --- 4. Floating text ---
function createFloatingText(text) {
    const span = document.createElement("div");
    span.classList.add("floating-text");
    span.style.left = Math.random() * (window.innerWidth - 100) + "px";
    span.style.top = window.innerHeight + "px";
    span.innerHTML = text;
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 2000);
}

// --- 5. No button movement ---
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = "none";
}
noBtn.addEventListener("click", moveButton);
noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = "scale(1.1)"; // tiny hover effect
});
noBtn.addEventListener("mouseout", () => {
    noBtn.style.transform = "scale(1)";
});

// --- 6. Yes button ---
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block"; 
    noBtn.style.display = "none";

    for (let i = 0; i < 50; i++) setTimeout(createHeart, i*100);
    for (let i = 0; i < 100; i++) setTimeout(createConfetti, i*50);
    for (let i = 0; i < 5; i++) createFirework(window.innerWidth/2, window.innerHeight/2);
    ["Love!", "Yes!", "❤️", "Yay!", "😍"].forEach(msg => createFloatingText(msg));
});

// --- 7. Mouse trail hearts ---
document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("floating-heart");
    trail.innerHTML = "💖";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    trail.style.fontSize = Math.random()*10 + 10 + "px";
    trail.style.animationDuration = "1.5s";
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1500);
});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// Function para sa Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

// Function para sa pagtakas ng No button
function moveButton(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - 30));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - 30));
    noBtn.style.position = "fixed"; 
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("click", moveButton);

// EVENT PAG PININDOT ANG YES
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    
    // IPAPAKITA NA ANG IMAGE
    mainImage.style.display = "block"; 
    // Bagong working link (Cute Milk & Mocha Bear)
    mainImage.src = // UPDATED LINE
    mainImage.src = "lyn.png";
    noBtn.style.display = "none";

    // Simulan ang floating hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
});




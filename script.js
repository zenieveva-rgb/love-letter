const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// Preload image to avoid delay
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

// 2. Move No button **to random position on click**
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = "none"; // remove initial translate so it moves naturally
}

// **CLICK event** for No button
noBtn.addEventListener("click", moveButton);

// 3. Yes button click
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block"; 
    noBtn.style.display = "none";

    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
});

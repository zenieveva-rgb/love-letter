const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// 1. Eto yung gumagawa ng puso
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    
    // Tinatanggal ang puso pagkatapos ng 5 seconds para hindi bumagal ang PC
    setTimeout(() => { 
        heart.remove(); 
    }, 5000);
}

// 2. No button behavior
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 30);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 30);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);

// 3. EVENT PAG PININDOT ANG YES
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block"; 
    mainImage.src = "lyn.png"; 
    noBtn.style.display = "none";

    // Eto yung magpapatakbo ng animation (50 hearts)
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
});

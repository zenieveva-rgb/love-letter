const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block";
    mainImage.src = "lyn.png"; 
    noBtn.style.display = "none";
});

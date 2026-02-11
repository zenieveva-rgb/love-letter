const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

function moveButton() {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - 30));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - 30));

    noBtn.style.position = "fixed"; 
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    moveButton();
});

yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1JnByb2Nlc3M9Z2lmX3NlYXJjaCZyaWQ9Z2lwaHkuZ2lm/v4lKqLoT6N_v1K/giphy.gif"; 
    noBtn.style.display = "none";
});

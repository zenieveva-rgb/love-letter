const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// Function para sa pagtakas ng button
function moveButton(e) {
    // Pinipigilan nito ang "click" at pinipigilan ang pagtagos ng event sa ibang buttons
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Random coordinates calculation
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - 30));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - 30));

    noBtn.style.position = "fixed"; 
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// 1. Para sa Laptop/Computer
noBtn.addEventListener("mouseover", moveButton);

// 2. Para sa Cellphone (Touch Support)
noBtn.addEventListener("touchstart", moveButton); // Mas mabilis ito sa phone kaysa 'click'
noBtn.addEventListener("click", moveButton);

// 3. Pag pinindot ang 'Yes' (Dito lang dapat lalabas ang text)
yesBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Sinisiguro na ito lang ang gagana
    questionText.innerHTML = "I knew it! ❤️";
    
    // Cute bear gif
    mainImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1JnByb2Nlc3M9Z2lmX3NlYXJjaCZyaWQ9Z2lwaHkuZ2lm/v4lKqLoT6N_v1K/giphy.gif"; 
    
    // Itago ang No button
    noBtn.style.display = "none";
});

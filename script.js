const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

/**
 * 1. Move No button to a random position
 * This function calculates a safe zone so the button 
 * doesn't go off-screen or hide behind the edges.
 */
function moveButton() {
    // We use 'fixed' to ensure it can move anywhere on the viewport
    noBtn.style.position = "fixed";

    // Calculate max available width and height minus button size
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    // Generate random coordinates
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    
    // Reset transform so it doesn't stay centered via the CSS translate
    noBtn.style.transform = "none";
}

// Trigger the move on click
noBtn.addEventListener("click", moveButton);

// OPTIONAL: Keep the hover effect if you want it to be extra hard to catch
// noBtn.addEventListener("mouseover", moveButton);


/**
 * 2. Yes button click (The Final Goal)
 */
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    mainImage.style.display = "block"; 
    
    // Hide the No button only AFTER they give up and click Yes
    noBtn.style.display = "none";

    // Trigger Effects
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfetti, i * 50);
    }
});

// Reuse your existing createHeart and createConfetti functions below...

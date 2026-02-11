const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

function moveButton() {
    // 1. Get the actual size of the button
    const btnRect = noBtn.getBoundingClientRect();
    
    // 2. Define the available space (Viewport width/height)
    // We subtract the button's size so it doesn't go off-screen
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    // 3. Generate random coordinates within that space
    // We use a small 10px buffer so it doesn't touch the literal edge
    const randomX = Math.max(10, Math.floor(Math.random() * (maxX - 10)));
    const randomY = Math.max(10, Math.floor(Math.random() * (maxY - 10)));

    // 4. Apply the position
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.margin = "0";
    noBtn.style.transform = "none"; // Important: removes the CSS centering
}

noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents zoom/scroll on some mobile browsers
    moveButton();
});

// The rest of your functions (createHeart, createConfetti, yesBtn listener) stay the same!

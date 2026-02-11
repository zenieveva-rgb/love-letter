const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("question-text");
const mainImage = document.getElementById("display-image");

// 1. Make the 'No' button run away
noBtn.addEventListener("mouseover", () => {
    // Calculate random coordinates within the screen
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    // Move the button to those coordinates
    noBtn.style.position = "fixed"; 
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// 2. What happens when they click 'Yes'
yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "I knew it! ❤️";
    // Swap image to a celebratory one
    mainImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZu&ep=v1_gifs_search&rid=giphy.gif"; 
    
    // Hide the No button
    noBtn.style.display = "none";
});
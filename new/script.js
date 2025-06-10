document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts-container");

    // Function to create floating neon pink hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.top = Math.random() * 100 + "vh"; 
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; 
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

        heart.addEventListener("click", () => {
            heart.classList.add("burst");
            setTimeout(() => heart.remove(), 500);
        });
    }

    // Generate hearts every 300ms (ensures frequent appearance)
    setInterval(createHeart, 300);
});

// Function to Show Message and Start Timer
function startGameSequence(event) {
    event.preventDefault(); // Prevents default anchor behavior

    let messageBox = document.createElement("div");
    messageBox.id = "message-box";
    messageBox.style.position = "fixed";
    messageBox.style.top = "50%";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translate(-50%, -50%)";
    messageBox.style.background = "rgba(0, 0, 0, 0.8)";
    messageBox.style.padding = "20px";
    messageBox.style.borderRadius = "15px";
    messageBox.style.border = "2px solid #ff4da6";
    messageBox.style.boxShadow = "0 0 20px #ff1a75";
    messageBox.style.fontSize = "1.8rem";
    messageBox.style.color = "#ff4da6";
    messageBox.style.textAlign = "center";
    messageBox.style.zIndex = "10";
    messageBox.style.fontFamily = "Arial, sans-serif"; // Updated to Arial

    let messageText = document.createElement("p");
    messageText.innerHTML = "Bahut hogaya cute cute 😏";
    messageText.style.fontFamily = "Arial, sans-serif"; // Updated to Arial

    let countdown = document.createElement("p");
    countdown.id = "countdown";
    countdown.style.fontSize = "1.5rem";
    countdown.style.color = "#ff66b2";
    countdown.style.marginTop = "10px";

    messageBox.appendChild(messageText);
    messageBox.appendChild(countdown);
    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageText.innerHTML = "Ab ye game jit ke bata! 🎲";
        let timeLeft = 5; // Timer reduced to 5 seconds

        let timer = setInterval(() => {
            countdown.innerHTML = `Game loading in ${timeLeft} seconds... ⏳`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timer);
                window.location.href = "https://playsnake.org/"; // Redirect to Snake Game
            }
        }, 1000);
    }, 3000);
}

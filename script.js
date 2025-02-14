document.addEventListener("DOMContentLoaded", function () {
    const roseContainer = document.getElementById("roses-container");

    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");
        rose.innerHTML = "💮";

        // Random position & animation duration
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 3 + 2;

        rose.style.left = `${randomLeft}px`;
        rose.style.animationDuration = `${randomDuration}s`;

        roseContainer.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, randomDuration * 1000); 
    }

    // Generate roses every 700ms for a more natural effect
    setInterval(createRose, 700);
});

// Flip Card Click Interaction
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function () {
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});

// Surprise Message
document.getElementById("surpriseBtn").addEventListener("click", function () {
    let message = document.getElementById("surpriseMessage");

    message.classList.toggle("hidden");
    message.style.opacity = message.classList.contains("hidden") ? "0" : "1";
});

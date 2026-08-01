// ===========================
// Friendship Website Script
// ===========================

// Pages
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

let current = 0;
let autoSlide;

// ---------------------------
// Open Gift
// ---------------------------
function startStory() {
    document.getElementById("giftScreen").style.display = "none";
    document.getElementById("story").style.display = "block";

    pages.forEach(page => page.classList.remove("active"));
    pages[0].classList.add("active");

    current = 0;

    // Play music
    music.play().catch(() => {});

    // Start typing animation
    typeText();

    // Auto page change every 5 seconds
    startAutoSlide();
}

// ---------------------------
// Typing Effect
// ---------------------------
const text = "Happy Friendship Day Ammu 🎀💖";
let index = 0;

function typeText() {
    const typing = document.getElementById("typing");
    typing.innerHTML = "";
    index = 0;

    function write() {
        if (index < text.length) {
            typing.innerHTML += text.charAt(index);
            index++;
            setTimeout(write, 80);
        }
    }

    write();
}

// ---------------------------
// Next Page
// ---------------------------
function nextPage() {

    if (current < pages.length - 1) {

        pages[current].classList.remove("active");

        current++;

        pages[current].classList.add("active");

    } else {

        clearInterval(autoSlide);

        showConfetti();

    }

}

// ---------------------------
// Auto Slide
// ---------------------------
function startAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        nextPage();

    }, 5000);

}

// ---------------------------
// Final Celebration
// ---------------------------
function showConfetti() {
    
}

   


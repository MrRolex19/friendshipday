// =======================================
// Friendship Day Website Script
// =======================================

// Pages
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

let current = 0;

// Different page animations
const animations = [
    "zoom",
    "slide",
    "flip",
    "glow",
    "zoom",
    "slide",
    "glow"
];

// =======================================
// Start Story
// =======================================

function startStory(){

    const gift = document.querySelector(".gift3d");
    const flash = document.getElementById("flash");

    // Magic Gift Animation
    gift.classList.add("magic");

    flash.classList.add("show");

    music.play().catch(()=>{});

    setTimeout(()=>{

        document.getElementById("giftScreen").style.display="none";
        document.getElementById("story").style.display="block";

        pages.forEach(page=>{

            page.classList.remove(
                "active",
                "zoom",
                "slide",
                "flip",
                "glow"
            );

        });

        current=0;

        pages[current].classList.add("active");
        pages[current].classList.add(animations[current]);

        typeText();

        addFlowerEvents();

        // ⭐ Only Page 1 → Page 2 after 10 seconds
        setTimeout(()=>{

            if(current===0){

                nextPage();

            }

        },8000);

    },900);

}

// =======================================
// Typing Effect
// =======================================

const text="Happy Friendship Day Ammu 🎀💖";

let index=0;

function typeText(){

    const typing=document.getElementById("typing");

    if(!typing) return;

    typing.innerHTML="";

    index=0;

    function write(){

        if(index<text.length){

            typing.innerHTML+=text.charAt(index);

            index++;

            setTimeout(write,80);

        }

    }

    write();

}
// =======================================
// Next Page
// =======================================

function nextPage(){

    if(current >= pages.length - 1){

        showConfetti();
        return;

    }

    // Remove current page animation
    pages[current].classList.remove(
        "active",
        "zoom",
        "slide",
        "flip",
        "glow"
    );

    current++;

    // Show next page
    pages[current].classList.add("active");
    pages[current].classList.add(animations[current]);

}

// =======================================
// Add Flower Events
// =======================================

function addFlowerEvents(){

    const photos = document.querySelectorAll(".photo");

    photos.forEach(photo=>{

        photo.onclick = ()=>{

            flowerShower();
            createSparkles(photo);

        };

    });

}

// =======================================
// Sparkles
// =======================================

function createSparkles(photo){

    const rect = photo.getBoundingClientRect();

    for(let i=0;i<25;i++){

        const sparkle = document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left =
            rect.left + Math.random()*rect.width + "px";

        sparkle.style.top =
            rect.top + Math.random()*rect.height + "px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },1500);

    }

}

// =======================================
// Floating Hearts
// =======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
        (5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

// Hearts every 2 seconds
setInterval(createHeart,2000);
// =======================================
// Flower Rain
// =======================================

function flowerShower(){

    for(let i=0;i<40;i++){

        const petal=document.createElement("div");

        petal.className="petal";
        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"vw";

        petal.style.setProperty(
            "--drift",
            (Math.random()*300-150)+"px"
        );

        petal.style.animationDuration=
            (3+Math.random()*2)+"s";

        petal.style.animationDelay=
            (Math.random()*0.5)+"s";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },6000);

    }

}

// =======================================
// Confetti
// =======================================

function showConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        const emoji=["🎉","🎊","✨","💖","🌸"];

        confetti.innerHTML=
            emoji[Math.floor(Math.random()*emoji.length)];

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.fontSize=
            (16+Math.random()*18)+"px";

        confetti.style.animationDuration=
            (3+Math.random()*2)+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

// =======================================
// Sparkles Around Gift
// =======================================

function giftSparkles(){

    const gift=document.querySelector(".gift3d");

    if(!gift) return;

    const rect=gift.getBoundingClientRect();

    for(let i=0;i<25;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=
            rect.left+Math.random()*rect.width+"px";

        sparkle.style.top=
            rect.top+Math.random()*rect.height+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },1500);

    }

}

// =======================================
// Sparkles Before Opening
// =======================================

setInterval(()=>{

    if(document.getElementById("giftScreen").style.display!=="none"){

        giftSparkles();

    }

},1200);

// =======================================
// Prevent Image Drag
// =======================================

document.querySelectorAll(".photo").forEach(photo=>{

    photo.setAttribute("draggable","false");

});

// =======================================
// End
// =======================================
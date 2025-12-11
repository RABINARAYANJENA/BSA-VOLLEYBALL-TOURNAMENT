// Volleyball scroll animation
window.addEventListener('scroll', function() {
    const volleyball = document.getElementById('volleyball');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate the scroll percentage
    const scrollPercent = scrollY / (documentHeight - windowHeight);

    // Move the volleyball up and down based on scroll
    const maxMove = windowHeight * 0.8; // Maximum movement range
    const moveY = scrollPercent * maxMove - maxMove / 2;

    volleyball.style.transform = `translateY(${moveY}px)`;
});

// Optional: Add some bounce effect on load
document.addEventListener('DOMContentLoaded', function() {
    const volleyball = document.getElementById('volleyball');
    volleyball.style.animation = 'bounce 2s infinite';
});

// CSS animation for bounce (added via JS for dynamic effect)
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style);
//modified one
let slideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides first
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the slide
    slides[slideIndex - 1].style.display = "block";

    // Update dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");

    // Change image every 3 seconds
    setTimeout(autoShowSlides, 3000);
}





const slides = document.querySelectorAll('#slideshow .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

const bgVideo = document.getElementById('bg-video');

window.addEventListener('scroll', () => {
    if (isElementInViewport(bgVideo)) {
        bgVideo.play();
    } else {
        bgVideo.pause();
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

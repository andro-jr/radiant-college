'use strict'

// Reveal sections
const allSections = document.querySelectorAll('.animate-section');
console.log('allSections :', allSections);

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// Video section

const videoOverlay = document.querySelector('.video-overlay');
const homeVideo = document.querySelector('#home-video')

if (videoOverlay) {
    videoOverlay.addEventListener('click', () => {
        videoOverlay.style.display = 'none';
        homeVideo.setAttribute("controls", "controls")
        homeVideo.play()
    })
}
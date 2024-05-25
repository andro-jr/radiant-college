"use strict";

// Reveal sections
const allSections = document.querySelectorAll(".animate-section");
console.log("allSections :", allSections);

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

// Video section
const videoOverlay = document.querySelector(".video-overlay");
const homeVideo = document.querySelector("#home-video");

if (videoOverlay) {
    videoOverlay.addEventListener("click", () => {
        videoOverlay.style.display = "none";
        homeVideo.setAttribute("controls", "controls");
        homeVideo.play();
    });
}

// Events carousel
$(document).ready(function () {
    $(".events-carousel").owlCarousel({
        loop: false,
        nav: false,
        items: 3,
        margin: 40,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 700,
            },
            600: {
                items: 2,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 700,
            },
            1200: {
                items: 3,
            },
        },

        onChanged: function (event) {
            const parent = event.target.closest(".carousel-row");

            if (!parent) return;
            const customNext = parent.querySelector(".nav-next");
            const customPrev = parent.querySelector(".nav-prev");
            var carousel = event.relatedTarget;
            var hasNext = carousel.relative(carousel.current()) < carousel.maximum();
            var hasPrev = carousel.relative(carousel.current()) > 0;

            if (hasNext) {
                customNext.classList.remove("disabled"); // Enable the next button
            } else {
                customNext.classList.add("disabled"); // Disable the next button
            }

            if (hasPrev) {
                customPrev.classList.remove("disabled"); // Enable the next button
            } else {
                customPrev.classList.add("disabled"); // Disable the next button
            }
        },
    });

    // Custom navigation action
    $(".nav-prev").click(function () {
        var parentCarousel = $(this).closest(".carousel-row");
        var owl = parentCarousel.find(".owl-carousel");
        owl.owlCarousel();
        owl.trigger("prev.owl.carousel");
    });

    $(".nav-next").click(function () {
        var parentCarousel = $(this).closest(".carousel-row");
        var owl = parentCarousel.find(".owl-carousel");
        owl.owlCarousel();
        owl.trigger("next.owl.carousel");
    });
});

// animation

const slideIns = document.querySelectorAll(".slide-in");
const slideUps = document.querySelectorAll(".slide-up");
const scale = document.querySelectorAll(".scale");

const animateHero = (nodeList, finalClass) => {
    window.addEventListener("DOMContentLoaded", () => {
        nodeList.forEach((item) => {
            item.classList.add(finalClass);
        });
    });
};

if (slideIns) {
    animateHero(slideIns, "slide-in-final");
}
if (slideUps) {
    animateHero(slideUps, "slide-up-final");
}
if (scale) {
    window.addEventListener("DOMContentLoaded", () => {
        scale.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("scale-final");
            }, (index + 1) * 500);
        });
    });
}

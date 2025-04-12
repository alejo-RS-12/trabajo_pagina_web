"use strict";
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carouselContainer) => {
        const carousel = carouselContainer.querySelector('.carousel');
        const images = carousel.querySelectorAll('img');
        const prevButton = carouselContainer.querySelector('.carousel-button.left');
        const nextButton = carouselContainer.querySelector('.carousel-button.right');

        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 600; // El ancho de cada imagen
            carousel.style.transform = `translateX(${offset}px)`;
        }

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
    });

    const scrollToTopButton = document.getElementById('scrollToTopButton');

    // Mostrar el botón cuando se haga scroll hacia abajo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Volver arriba cuando se haga click en el botón
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

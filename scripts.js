document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;

    document.querySelector('.next').addEventListener('click', function() {
        index = (index + 1) % slideCount;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        index = (index - 1 + slideCount) % slideCount;
        updateCarousel();
    });

    function updateCarousel() {
        slides.style.transform = 'translateX(' + (-index * 100) + '%)';
    }
});

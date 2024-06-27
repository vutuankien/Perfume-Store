document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.arrival .carousel-inner');
    const items = document.querySelectorAll('.arrival .carousel-item');
    const prevButton = document.querySelector('.arrival .carousel-control-prev');
    const nextButton = document.querySelector('.arrival .carousel-control-next');
    const numVisibleItems = 6; 

    let currentIndex = 0;
    let isTransitioning = false;


    for (let i = 0; i < numVisibleItems; i++) {
        const firstClone = items[i].cloneNode(true);
        const lastClone = items[items.length - 1 - i].cloneNode(true);
        carousel.appendChild(firstClone);
        carousel.insertBefore(lastClone, items[0]);
    }

    function updateCarousel() {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * (100 / numVisibleItems)}%)`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carousel.style.transition = 'transform 0.4s ease-in-out';
            });
        });
    }

    function moveToNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * (100 / numVisibleItems)}%)`;
        carousel.addEventListener('transitionend', handleTransitionEnd);
    }

    function moveToPrev() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * (100 / numVisibleItems)}%)`;
        carousel.addEventListener('transitionend', handleTransitionEnd);
    }

    function handleTransitionEnd() {
        carousel.removeEventListener('transitionend', handleTransitionEnd);
        if (currentIndex >= items.length) {
            currentIndex = 0;
            updateCarousel();
        } else if (currentIndex < 0) {
            currentIndex = items.length - numVisibleItems;
            updateCarousel();
        }
        isTransitioning = false;
    }

    prevButton.addEventListener('click', moveToPrev);
    nextButton.addEventListener('click', moveToNext);

    // Initial position
    currentIndex = numVisibleItems;
    updateCarousel();


});

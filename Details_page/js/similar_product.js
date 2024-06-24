document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.similar-carousel-inner');
    const items = document.querySelectorAll('.similar-carousel-item');
    const prevButton = document.querySelector('.similar-carousel-control-prev');
    const nextButton = document.querySelector('.similar-carousel-control-next');
    const numVisibleItems = 6; // Number of visible items per frame

    let currentIndex = 0;
    let isTransitioning = false;

    // Clone the first and last items for infinite looping
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


import productInfor from './appData.js';
const carousel_items = document.querySelector('.similar-carousel-inner');
if (carousel_items) {
    for (let key in productInfor) {
        if (productInfor.hasOwnProperty(key)) {
            carousel_items.innerHTML += `
            <div class="similar-carousel-item">
                        <img src="${productInfor[key].img}" class="similar-d-block" alt="...">
                        <a href="" class="perfume-name">${productInfor[key].name}</a>
                        <p class="perfume-price">${productInfor[key].price}</p>
            </div>
            `;
        }
    }
} else {
    console.error("Element with class 'card-items' not found.");
}

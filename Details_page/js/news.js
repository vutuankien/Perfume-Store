document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.news-carousel-inner');
    const items = document.querySelectorAll('.news-carousel-item');
    const prevButton = document.querySelector('.news-carousel-control-prev');
    const nextButton = document.querySelector('.news-carousel-control-next');
    const numVisibleItems = 5; // Number of visible items per frame

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
                carousel.style.transition = 'transform 0.5s ease-in-out';
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


function displayAlert(){
    swal("Tính năng đang được phát triển","Xin cảm ơn","error")
}
import news from './newsData.js';
const carousel_items = document.querySelector('.news-carousel-inner');
if (carousel_items) {
    for (let key in news) {
        if (news.hasOwnProperty(key)) {
            carousel_items.innerHTML += `
            <div class="news-carousel-item" onclick = "displayAlert()">
                        <img src="${news[key].image}" class="d-block" alt="..." onclick = "displayAlert()">
                        <div class="date">
                            <p>${news[key].date}</p>
                        </div>
                        <a href="" class="news-title" onclick = "displayAlert()">${news[key].title}</a>
                        <p class="news-des">${news[key].content}</p>
                    </div>
            `;
        }
    }
} else {
    console.error("Element with class 'card-items' not found.");
}
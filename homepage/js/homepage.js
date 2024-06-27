document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    
    let currentIndex = 0;

    function updateCarousel(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : indicators.length - 1;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    }, 5000);
});


const mainImage = document.getElementById('mainImage');

mainImage.addEventListener('mouseover', () => {
    mainImage.style.opacity = 0.5; 
    setTimeout(() => {
        mainImage.src = "./homepage/image/sub-image.png";
        mainImage.style.opacity = 1;  
    }, 200);
});

mainImage.addEventListener('mouseout', () => {
    mainImage.style.opacity = 0.5;  
    setTimeout(() => {
        mainImage.src = './homepage/image/background.png';
        mainImage.style.opacity = 1;  
    }, 200); 
});
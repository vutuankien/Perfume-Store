document.querySelectorAll('.alphabet-list a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const letter = this.getAttribute('data-letter');
        scrollToProduct(letter);
    });
});

function scrollToProduct(letter) {
    const brandLists = document.querySelectorAll('.brand-list');
    brandLists.forEach(brandList => {
        const heading = brandList.querySelector('p').textContent;
        if (heading === letter) {
            brandList.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
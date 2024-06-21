

function sortProductsDesc(order) {
    const productContainer = document.querySelector('.main-items');
    const productCards = Array.from(document.querySelectorAll('.collectors'));

    const sortedProducts = productCards.map(card => {
        const priceElement = card.querySelector('.price');
        const priceText = priceElement.textContent;
        const priceParts = priceText.split(' – ');
        const finalPriceText = priceParts[priceParts.length - 1].replace('₫', '').replace(/,/g, '');
        const finalPrice = parseFloat(finalPriceText);

        return { element: card, price: finalPrice };
    });

    if (order === 'decrease') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    productContainer.innerHTML = '';
    sortedProducts.forEach(product => {
        productContainer.appendChild(product.element);
    });

    console.log(sortedProducts);
}
function sortProductsAsc(order) {
    const productContainer = document.querySelector('.main-items');
    const productCards = Array.from(document.querySelectorAll('.collectors'));

    const sortedProducts = productCards.map(card => {
        const priceElement = card.querySelector('.price');
        const priceText = priceElement.textContent;
        const priceParts = priceText.split(' – ');
        const finalPriceText = priceParts[priceParts.length - 1].replace('₫', '').replace(/,/g, '');
        const finalPrice = parseFloat(finalPriceText);

        return { element: card, price: finalPrice };
    });

    if (order === 'increase') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    productContainer.innerHTML = '';
    sortedProducts.forEach(product => {
        productContainer.appendChild(product.element);
    });

    console.log(sortedProducts);
}

document.querySelector('.select').addEventListener('change', function() {
    const selectedOption = this.value;

    if (selectedOption === 'decrease') {
        sortProductsDesc('decrease');
    }
    else if (selectedOption === 'increase') {
        sortProductsAsc('increase');
    }
});


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

document.querySelector('.select').addEventListener('change', function () {
    const selectedOption = this.value;

    if (selectedOption === 'decrease') {
        sortProductsDesc('decrease');
    }
    else if (selectedOption === 'increase') {
        sortProductsAsc('increase');
    }
});


function searchProducts() {
    var searchValue = document.querySelector('.text-input').value.toLowerCase();
    var collectors = document.querySelectorAll('.collectors');
    var productNameEl = document.querySelectorAll('.collectors-items-name');
    const main_items = document.querySelector('.main-items');
    let found = false;

    collectors.forEach((collector, index) => {
        if (productNameEl[index].innerText.toLowerCase().includes(searchValue)) {
            collector.style.display = 'block';
            found = true;
        } else {
            collector.style.display = 'none';
        }
    });

    if (!found) {
        main_items.innerHTML = '<p style="text-align:center">Không tìm thấy sản phẩm trong giỏ hàng</p>';
    } 
}

document.querySelector('.btn-input').addEventListener('click', searchProducts);

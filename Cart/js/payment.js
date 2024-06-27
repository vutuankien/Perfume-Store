function displayBillItems() {
    const bill = document.querySelector('.table-content');
    const cart = JSON.parse(localStorage.getItem('products')) || [];
    console.log(cart);
    console.log(bill);

    let totalPrice = 0;
    
    cart.forEach((product, index) => {
        const productDiv = document.createElement('div');   
        productDiv.classList.add('table-items');
        productDiv.innerHTML = `
            <p class="table-product-name">${product.name} <span class="number">x${product.number}</span></p>
            <p class="money">${(parseFloat(product.price * product.number) * 1000).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
        `;
        bill.appendChild(productDiv);

        totalPrice += parseFloat(product.price * product.number) * 1000;  
    });


    document.querySelector('.bill-price-number').innerText = totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });


    console.log(localStorage.getItem('discount'));
    const discount = parseFloat(localStorage.getItem('discount')) || 0;
    if(discount === 0){
        totalPrice = totalPrice
    }
    else{
        totalPrice = discount;
    }
    document.querySelector('.bill-total-number').innerText = totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
function pay(){
    const input_value = document.querySelectorAll('.input-text');
    input_value.forEach((input) => {
        input.value = '';
    });
    swal("Thanh toán thành công", "Chúng tôi xin chân thành cảm ơn!", "success");
    localStorage.removeItem('products');
    localStorage.removeItem('discount');
    const bill = document.querySelector('.table-content');
    bill.innerHTML = '';
    document.querySelector('.bill-total-number').innerText = '0đ';
    document.querySelector('.bill-price-number').innerText = '0đ';
    displayBillItems();
}
window.onload = displayBillItems;

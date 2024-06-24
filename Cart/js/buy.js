function displayCartItems() {
    var x = 100000;

    const cart_products = document.querySelector('.cart-products');
    const cart = JSON.parse(localStorage.getItem('products')) || [];
    console.log(cart);
    console.log(cart_products);
    cart_products.innerHTML = '';

    if (cart.length === 0) {
        cart_products.innerHTML = '<p style="text-align:center;margin-top:20px">Không có sản phẩm trong giỏ hàng.</p>';
        return;
    }

    cart.forEach((product, index) => {
        const productDiv = document.createElement('div');   
        productDiv.classList.add('cart-product-items');
        productDiv.innerHTML = `
            <div class="cart-products-left">
                <i class="bi bi-x-circle" onclick="removeProduct(${index})"></i>
                <img src="${product.image}" alt="Product Image" class="product-img">
                <p class="cart-product-name">${product.name} - ${product.mil}</p>
            </div>
            <div class="cart-products-right">
                <p class="product-price">${parseFloat(product.price*1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                <div class="product-quantity">
                    <button class="decrease" onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="text" name="quantity" class="select-quantity" value="${product.number}">
                    <button class="increase" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <p class="product-total-price">${(parseFloat(product.price*product.number)*1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
            </div>
        `;
        cart_products.appendChild(productDiv);
    });
}

;   


let totalPrice = 0, tempPrice = 0;
const cart = JSON.parse(localStorage.getItem('products')) || [];
cart.forEach(product =>{
        totalPrice += parseFloat(product.price * product.number)*1000;
        tempPrice += parseFloat(product.price * product.number)*1000;    
})
document.querySelector('.bill-total-number').innerText = totalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'});
document.querySelector('.bill-price-number').innerText = tempPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'});

function calDiscount() {
    const voucher = {
        voucher1: {
            code: 'TuanKienDeptrai',
            discount: 0.0309,
        },
        voucher2: {
            code: 'ThuHuynXinkGai',
            discount: 0.3009,
        },
        voucher3: {
            code: 'YenLeBruh',
            discount: 0.002,
        },
    };

    const discountInput = document.querySelector('.discount-input').value.trim();  
    const cart = JSON.parse(localStorage.getItem('products')) || [];

    let tempPrice = 0;
    let voucherFound = false;

    cart.forEach(product => {
        for (let key in voucher) {
            if (discountInput === voucher[key].code) {
                let discountedPrice = (parseFloat(product.price) * parseFloat(product.number)) - ((parseFloat(product.price) * parseFloat(product.number)) * voucher[key].discount);
                tempPrice += discountedPrice * 1000
                voucherFound = true;
                break;
            }
        }
    });

    if (voucherFound) {
        // Display success message and update total price
        swal("Áp mã thành công", "Chúng tôi xin chân thành cảm ơn !", "success")
        document.querySelector('.bill-total-number').innerText = tempPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    } else {
        swal("Không tìm thấy mã", "Xin vui lòng nhập lại", "error");
    }

    localStorage.setItem('discount',tempPrice);
}


function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('products')) || [];
    if (cart[index]) {
        cart[index].number += change;
        if (cart[index].number < 1) {
            cart[index].number = 1;
        }
        localStorage.setItem('products', JSON.stringify(cart));
        displayCartItems();
    }
}

function removeProduct(index) {
    const cart = JSON.parse(localStorage.getItem('products')) || [];
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(cart));
        displayCartItems();
    }
}   
function checkCart(){
    const cart = localStorage.getItem('products') || [];
    if(cart.length === 0){
        swal("Giỏ hàng trống","Vui lòng thêm sản phẩm vào giỏ hàng","error");
    }
    else{
        window.location.href = "../page/payment.html"
    }
}
function reloadPage(){
    location.reload();
}

window.onload = displayCartItems;
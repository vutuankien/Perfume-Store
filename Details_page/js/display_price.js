const pricesText = document.querySelector('.product-detail-price').innerText;
const prices = pricesText.split(' – ');

const size_number = document.querySelector('.size-number');
const product_price = document.querySelector('.product-price');
const size_btns = document.getElementsByClassName("size-btn");
let ml = 0;
let money = 0;
let curentValue = 0;

size_btns[0].addEventListener('click', () => {
    size_number.innerText = size_btns[0].innerText;
    product_price.style.display = 'block';
    product_price.innerText = prices[0];
    ml = size_btns[0].innerText;
    money = parseFloat(prices[0]);
    console.log(`${ml} - ${money}`);
});

size_btns[1].addEventListener('click', () => {
    size_number.innerText = size_btns[1].innerText;
    product_price.style.display = 'block';
    product_price.innerText = prices[1];
    ml = size_btns[1].innerText;
    money = parseFloat(prices[1]);
    console.log(`${ml} - ${money}`);
});

function increaseValue() {
    var value = parseInt(document.querySelector('.select-quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.querySelector('.select-quantity').value = value;
    curentValue = value;
    console.log(curentValue);
}

function decreaseValue() {
    var value = parseInt(document.querySelector('.select-quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0) value = 0;  // Đảm bảo giá trị không âm
    document.querySelector('.select-quantity').value = value;
    curentValue = value;
    console.log(curentValue);
}

let card = JSON.parse(localStorage.getItem('products')) || [];

const nameProduct = document.querySelector('.product-detail-name').innerText;
const imgUrl  =document.querySelector('.selected_img').src;
console.log(imgUrl);
function addToCart() {
    const new_product = {
        name: nameProduct,
        price: money,
        mil: ml,
        number: curentValue,
        image: imgUrl
    };
    if (curentValue === 0 || curentValue === undefined) {
        swal("Bạn chưa chọn số lượng sản phẩm","","error")
    }
    else{
        card.push(new_product);
        console.log(card);
        localStorage.setItem('products', JSON.stringify(card));
        swal("Thêm sản phẩm thành công!","","success");
    }
}
// localStorage.removeItem('products'); 


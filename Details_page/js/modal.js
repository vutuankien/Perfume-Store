const message = ["Tính năng đang được phát triển, xin cảm ơn !","Thêm sản phẩm thành công ! Xin cảm ơn !","Cảm ơn bạn đã đánh giá !"]
const modal = document.querySelector('.modal');
const exitBtn = document.querySelector('.close-mark');
const news_items = document.querySelectorAll('.news-carousel-item');
const alertText = document.querySelector('.alert-text');    

const newsItemsArray = Array.from(news_items);

newsItemsArray.forEach(news => news.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    modal.style.display = 'flex';
    console.log(news);
    alertText.innerText = message[0];
}));

exitBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});



const send = document.querySelector(".send");
send.addEventListener('click',(e)=>{
    e.preventDefault()
    swal("Gửi nhận xét thành công", "","success")
})
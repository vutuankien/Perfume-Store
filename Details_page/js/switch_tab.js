const desTab = document.querySelector('#description');
const sizeTab = document.querySelector('#size');
const commentTab = document.querySelector('#comment');
const desBtn = document.querySelector('.desBtn');
const sizeBtn = document.querySelector('.sizeBtn');
const commentBtn = document.querySelector('.commentBtn');

desBtn.addEventListener('click', (e) => {
    e.preventDefault();
    desTab.style.display = 'block';
    sizeTab.style.display = 'none';
    commentTab.style.display = 'none';
    desBtn.style.backgroundColor = '#ccc';
    sizeBtn.style.backgroundColor = '#fff';
    commentBtn.style.backgroundColor = '#fff';
});
sizeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    desTab.style.display = 'none';
    sizeTab.style.display = 'block';
    commentTab.style.display = 'none';
    desBtn.style.backgroundColor = '#fff';
    sizeBtn.style.backgroundColor = '#ccc';
    commentBtn.style.backgroundColor = '#fff';
});
commentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    desTab.style.display = 'none';
    sizeTab.style.display = 'none';
    commentTab.style.display = 'block';
    desBtn.style.backgroundColor = '#fff';
    sizeBtn.style.backgroundColor = '#fff';
    commentBtn.style.backgroundColor = '#ccc';
});
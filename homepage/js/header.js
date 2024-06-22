const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-group i');
console.log(hamburger);
console.log(closeNav);
const navbar = document.querySelector('nav');

var x = window.matchMedia("(max-width: 550px)");
x.addEventListener('change',(e) => {
    if (e.matches) {
        closeNav.addEventListener('click', () => {
            navbar.style.display = 'none';
        });
        hamburger.addEventListener('click', () => {
            navbar.style.display = 'block';
            hamburger.style.cursor = 'pointer';
        });

    } else {
        navbar.style.display = 'block';
    }
});

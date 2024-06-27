const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-group i');
const navbar = document.querySelector('nav');

console.log(hamburger);
console.log(closeNav);

function handleNavbarDisplay(e) {
    if (e.matches) {
        navbar.style.display = 'none';
        closeNav.addEventListener('click', hideNavbar);
        hamburger.addEventListener('click', showNavbar);
    } else {
        navbar.style.display = 'block';
        closeNav.removeEventListener('click', hideNavbar);
        hamburger.removeEventListener('click', showNavbar);
    }
}

function showNavbar() {
    navbar.style.display = 'block';
    hamburger.style.cursor = 'pointer';
}

function hideNavbar() {
    navbar.style.display = 'none';
}

const x = window.matchMedia("(max-width: 550px)");

x.addEventListener('change', handleNavbarDisplay);

handleNavbarDisplay(x);

const menu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
menu.addEventListener('click', () => {
    nav.classList.toggle('active');
})
function closeNavMenuOnResize() {
    if (window.innerWidth > 650 && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
}

window.addEventListener('resize', closeNavMenuOnResize);
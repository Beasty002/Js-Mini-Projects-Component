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


window.onload = function () {
    for (let i = 0; i < 100000; i++) {
        console.log(i)
    }
}
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    loader.classList.add("loader-hidden");
    loader.addEventListener("transtionend", () => {
        document.body.removeChild(loader)
    })


});
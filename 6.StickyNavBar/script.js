// const menu = document.querySelector(".burger-menu");
// const nav = document.querySelector("nav");
// menu.addEventListener('click', () => {
//     nav.classList.toggle('active');
// })
// function closeNavMenuOnResize() {
//     if (window.innerWidth > 650 && nav.classList.contains('active')) {
//         nav.classList.remove('active');
//     }
// }

// window.addEventListener('resize', closeNavMenuOnResize);

// window.addEventListener("scroll", () => {
//     var header = document.querySelector("header");
//     if (window.scrollY > 0) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });


var lastScrollTop = 0;
nav = document.querySelector("header");
window.addEventListener("scroll", () => {
    console.clear();
    var scrollTop = window.pageYOffset; //
    if (scrollTop > lastScrollTop) {
        nav.style.top = "-90px"
    }
    else {
        nav.style.top = "0px"
    }
    console.log(`Current is : ${lastScrollTop}        &     scroll Top is ${scrollTop}`)
    lastScrollTop = scrollTop;
})
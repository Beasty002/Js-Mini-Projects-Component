// const imgContainer = document.querySelectorAll(".img-container");
// const lightBox = document.querySelector("#lightBox")
// lightBox.addEventListener('click', e => {
//     if (!(e.target.tagName === "IMG")) {
//         lightBox.style.display = "none"
//     }
// })
// imgContainer.forEach(el => {
//     el.addEventListener('click', () => {
//         lightBox.children[0].src = el.children[0].src
//         lightBox.style.display = "block"

//     })
// })



const imgContainer = document.querySelectorAll(".img-container");
const lightBox = document.querySelector("#lightBox");
lightBox.addEventListener('click', e => {
    if (!(e.target.tagName === "IMG")) {
        lightBox.style.display = "none"
    }
})
imgContainer.forEach(el => {
    el.addEventListener('click', () => {
        lightBox.children[0].src = el.children[0].src
        lightBox.style.display = "block"

    })
})
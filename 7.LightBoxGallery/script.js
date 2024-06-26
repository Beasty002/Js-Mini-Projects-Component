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
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const lightImg = document.querySelector("#lightBox").querySelector("img");
console.log(lightImg)
let index = 0;
lightBox.addEventListener('click', e => {
    if (!(e.target.tagName === "IMG") && !(e.target.tagName === "BUTTON")) {
        lightBox.style.display = "none"
    }
})


imgContainer.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        index = idx;
        lightImg.src = e.target.src
        lightBox.style.display = "block"
    })
})


next.addEventListener('click', nextMove);
prev.addEventListener('click', prevMove);

function nextMove() {
    index++;
    if (index > imgContainer.length - 1) {
        index = 0;
    }
    // console.log(index)
    lightImg.src = imgContainer[index].children[0].src;
}
function prevMove() {
    index--;
    if (index < 0) {
        index = imgContainer.length - 1;
    }
    // console.log(index)
    lightImg.src = imgContainer[index].children[0].src;
}
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft" && lightBox.style.display === "block") {
        prevMove();
    } else if (e.key === "ArrowRight" && lightBox.style.display === "block") {
        nextMove();
    }
});
document.addEventListener("keyup", (e) => {
    if (lightBox.style.display === "block") {
        if (e.key === "Escape") {
            lightBox.style.display = "none"
        }
    }
    if (e.key === "Enter") {
        lightImg.src = e.target.src
        lightBox.style.display = "block"
    }
})
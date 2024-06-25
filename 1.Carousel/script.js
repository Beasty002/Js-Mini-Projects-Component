let slideImages = document.querySelectorAll('.slide-image');
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots = document.querySelectorAll(".dot");
let imgBtn = document.querySelectorAll(".img-btn");
let inputFile = document.querySelectorAll(".file");
let imgHolder = document.querySelectorAll(".img-holder");
let imgClear = document.querySelectorAll(".img-clear");

var counter = 0;
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards ';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards"
    indicators()
}
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards ';
    if (counter === 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards"
    indicators()
}
function auto() {
    deleteInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
        indicators()
    }
}
auto();
const container = document.querySelector('.slide-container')
container.addEventListener('mouseover', function () {
    clearInterval(deleteInterval);
})
container.addEventListener('mouseout', auto);
function indicators() {

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    dots[counter].className += ' active'
}
function switchImage(img) {
    img.classList.add('active');
    var imgId = img.getAttribute('attr');
    if (imgId > counter) {
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards"
        counter = imgId;
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards"
    }
    else if (imgId == counter) {
        return;
    }
    else {
        slideImages[counter].style.animation = "prev1 0.5s ease-in forwards"
        counter = imgId;
        slideImages[counter].style.animation = "prev2 0.5s ease-in forwards"
    }

    indicators()
}

imgHolder.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('img-clear')) {
            inputFile[index].click();
        }
    })
});
inputFile.forEach((el, index) => {
    el.addEventListener('change', function (e) {
        e.preventDefault();
        const image = this.files[0];
        console.log(image);
        const imgUrl = `./images/${image.name}`
        const img = document.createElement("img");
        if (imgHolder[index].querySelector("img")) {
            imgHolder[index].querySelector("img").remove();
        }
        img.src = imgUrl;
        img.classList.add("uploaded-image");
        imgHolder[index].appendChild(img);
        imgClear[index].style.display = "block";
    })
})
imgBtn.forEach((el, idx) => {
    el.addEventListener('click', () => {
        if (imgHolder[idx].querySelector('img')) {
            slideImages[idx].src = imgHolder[idx].querySelector('img').src;
        }
    })
})
imgClear.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        el.style.display = "none";
        imgHolder[idx].querySelector('img').remove();
    })
})

function showOnLoad() {
    imgHolder.forEach((el, index) => {
        const img = document.createElement("img");
        img.src = slideImages[index].src
        img.classList.add("uploaded-image");
        imgHolder[index].appendChild(img);
        imgClear[index].style.display = "block";
    })
}

window.onload = showOnLoad;

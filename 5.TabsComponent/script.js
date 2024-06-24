const tabBtn = document.querySelectorAll(".tab-btn");
const container = document.querySelectorAll(".container");
tabBtn.forEach((el, idx) => {
    el.addEventListener('click', () => {
        tabBtn.forEach(el => el.classList.remove('active'));
        el.classList.add('active');
        var line = document.querySelector(".line");
        line.style.width = (el.offsetWidth + 8) + "px";
        line.style.left = (el.offsetLeft - 4) + "px";


        container.forEach(cont => cont.classList.remove('active'));
        container[idx].classList.add('active')


    })
})

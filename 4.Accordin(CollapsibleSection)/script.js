const container = document.querySelectorAll(".container");

//if you want to be able to move multiple accordin at once
// container.forEach(el => {
//     el.addEventListener('click', () => {

//         el.classList.toggle('active')
//     })
// })




//------------------------------------if you want radio like feature with able to unselect all

container.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
        else {
            container.forEach(el => el.classList.remove('active'));
            el.classList.add('active')
        }
    })
})
const popup = document.querySelector(".popup");
const content = document.querySelector(".content");
function togglePopup() {
    popup.classList.toggle('active');
    setTimeout(() => {
        content.classList.toggle('active');
    }, 100)
}
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && popup.classList.contains("active")) {
        togglePopup();
    }
})
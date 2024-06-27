const box = document.querySelector('#box');
const val = document.getElementById("counter");
const value = document.getElementById("value");
const maxVal = document.getElementById("maxVal");
let counter = 0;
let finalValue = 0;
let max = 0;
function updateCounter() {
    if (counter < Math.floor((finalValue / max) * 100)) {
        counter++;
        val.innerHTML = counter + "%";
        setTimeout(updateCounter, 8);
    }
}

// updateCounter();
// setTimeout(() => {
//     const element = document.getElementById("box");
//     const computedStyle = window.getComputedStyle(element);  
//     const width = computedStyle.width;
//     console.log("CSS Width:", width);
// }, 1000);

function changeWidth() {
    max = parseInt(maxVal.value, 10);
    finalValue = parseInt(value.value, 10);

    const error = document.querySelector(".err")
    if (max < finalValue) {
        error.style.display = "block";
        // alert("Max value cant be less than the value");
        return;
    }

    error.style.display = "none";
    box.style.width = (finalValue / max) * 100 + "%";
    let valuePercentage = Math.floor((finalValue / max) * 100) || 0;
    val.innerText = `${valuePercentage}%`;
    updateStorage();
}


function valueUpdate() {
    if (value.value.trim() === "") {
        return;
    }
    if (value.value < 0) {
        value.value = 0;
    }
    changeWidth();
}

function maxValueUpdate() {
    if (maxVal.value.trim() === "") { return; }
    if (maxVal.value < 0) {
        maxVal.value = 0;
    }
    changeWidth();
}
// value.addEventListener("focusout", valueUpdate);
// maxVal.addEventListener("focusout", maxValueUpdate);
value.addEventListener("input", valueUpdate);
maxVal.addEventListener("input", maxValueUpdate);
value.addEventListener("keydown", valueUpdate);
maxVal.addEventListener("keydown", maxValueUpdate);
// value.addEventListener("change", valueUpdate);
// maxVal.addEventListener("change", maxValueUpdate);
value.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        valueUpdate();
    }

})
maxVal.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        maxValueUpdate();
    }

})
window.onload = loadFunc;
function loadFunc() {
    let value1 = localStorage.getItem("value");
    let max1 = localStorage.getItem("max");

    if ((value1 === null || value1 === undefined || value1 === '0') &&
        (max1 === null || max1 === undefined || max1 === '0')) {
        value1 = 20;
        max1 = 100;
    }

    value.value = value1;
    maxVal.value = max1;
    changeWidth();
    updateCounter();
}



function updateStorage() {
    localStorage.setItem("value", value.value);
    localStorage.setItem("max", maxVal.value);
}

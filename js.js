<<<<<<< HEAD
=======
const box = document.querySelector(".box"),
        btn = document.querySelector("button");

// const height = box.clientHeight;
// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.clientWidth;
const height = box.scrollHeight;
const width = box.scrollWidth;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + "px";
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(style.display);
document.documentElement.scrollTop = 0;
window.scrollBy(0, 400);
window.scrollTo(0, 400);
>>>>>>> 5659424685f4907195e5ab41fd6cad93b5582c4b

const getImg = document.querySelectorAll('.offer__slide'),
counterNext = document.querySelector('.offer__slider-next'),
counterPrev = document.querySelector('.offer__slider-prev'),
current = document.getElementById('current'),
slidesWrapper = document.querySelector('.offer__slider-wrapper'),
slidesField = document.querySelector('.offer__slider-inner'),
width = window.getComputedStyle(slidesWrapper).width;// ширина всех слайдеров




let index =  1;
let offset = 0;

if (getImg.length < 10) {
current.textContent = `0${index}`;
total.textContent = `0${getImg.length}`;
} else {
current.textContent = index;
total.textContent = getImg.length;
}

slidesField.style.width = 100 * getImg.length + '%';//умножаем ширину на 4
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

getImg.forEach(slide => {
slide.style.width = width;
});

counterNext.addEventListener('click', () => {
if (offset === +width.slice(0, width.length - 2) * (getImg.length - 1)) {
offset = 0;
} else {
offset += +width.slice(0, width.length - 2);
}
slidesField.style.transform = `translateX(-${offset}px)`;

if(index == getImg.length){
index = 1;
}
else {
index++;
}

if (getImg.length < 10) {
current.textContent = `0${index}`;
}  else {
current.textContent = index;
}
});
counterPrev.addEventListener('click', () => {
if (offset == 0) {
offset = +width.slice(0, width.length - 2) * (getImg.length - 1);

} else {
offset -= +width.slice(0, width.length - 2);
}
slidesField.style.transform = `translateX(-${offset}px)`;

if(index == 1){
index = getImg.length;
}
else {
index--;
}

if (getImg.length < 10) {
current.textContent = `0${index}`;
}  else {
current.textContent = index;
}
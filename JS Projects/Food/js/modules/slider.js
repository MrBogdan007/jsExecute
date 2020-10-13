function slider () {
    const getImg = document.querySelectorAll('.offer__slide'),
    counterNext = document.querySelector('.offer__slider-next'),
    counterPrev = document.querySelector('.offer__slider-prev'),
    current = document.getElementById('current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    slider = document.querySelector('.offer__slider'),
    width = window.getComputedStyle(slidesWrapper).width; // ширина всех слайдеров




let index = 1;
let offset = 0;

if (getImg.length < 10) {
    current.textContent = `0${index}`;
    total.textContent = `0${getImg.length}`;
} else {
    current.textContent = index;
    total.textContent = getImg.length;
}

slidesField.style.width = 100 * getImg.length + '%'; //умножаем ширину на 4
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

getImg.forEach(slide => {
    slide.style.width = width;
});

slider.style.position = 'relative';

const indicators = document.createElement('ol'),
    dots = [];

indicators.classList.add('carousel-indicators');
indicators.style.cssText = `    
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;
slider.append(indicators);

for (let i = 0; i < getImg.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
}
counterNext.addEventListener('click', () => {
    if (offset === removeString(width) * (getImg.length - 1)) {
        offset = 0;
    } else {
        offset += removeString(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (index == getImg.length) {
        index = 1;
    } else {
        index++;
    }

    if (getImg.length < 10) {
        current.textContent = `0${index}`;
    } else {
        current.textContent = index;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[index - 1].style.opacity = 1;
});
counterPrev.addEventListener('click', () => {
    if (offset == 0) {
        offset = removeString(width) * (getImg.length - 1);

    } else {
        offset -= removeString(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (index == 1) {
        index = getImg.length;
    } else {
        index--;
    }

    if (getImg.length < 10) {
        current.textContent = `0${index}`;
    } else {
        current.textContent = index;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[index - 1].style.opacity = 1;

});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        console.log(slideTo);
        index = slideTo;

        offset = removeString(width) * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (getImg.length < 10) {
            current.textContent = `0${index}`;
        } else {
            current.textContent = index;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1].style.opacity = 1;
    });
});

function removeString(string) {
    return +string.replace(/\D/g, '');

}
}
module.exports = slider;
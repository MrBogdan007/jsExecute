const slider = document.querySelector('.offer__slider'),
counterNext = document.querySelector('.offer__slider-next'),
counterPrev = document.querySelector('.offer__slider-prev');
let index =  1;
let offset = 0;


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

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1 ].style.opacity = 1;
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
        
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1].style.opacity = 1;

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            console.log(slideTo);
            index = slideTo;

            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (getImg.length < 10) {
                current.textContent = `0${index}`;
            }  else {
                current.textContent = index;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[index - 1].style.opacity = 1;
        });
    });
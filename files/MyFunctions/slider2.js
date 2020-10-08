const getImg = document.querySelectorAll('.offer__slide'),
counterNext = document.querySelector('.offer__slider-next'),
counterPrev = document.querySelector('.offer__slider-prev'),
current = document.getElementById('current');
let index =  1;
showSlide(index);
function showSlide (n) {
    
    if ( n > getImg.length){
        index = 1;
    }
    if ( n < 1) {
        index = getImg.length;
    }

    getImg.forEach(i => i.style.display ='none');

    getImg[index - 1].style.display= 'block';
    
    if (getImg.length < 10) {
        current.textContent = `0${index}`;
    } else {
        current.textContent = index;
    }
    
};

function plusSlides(n){
    showSlide(index +=n);
};
counterPrev.addEventListener('click', () => {
    plusSlides(-1);
});
counterNext.addEventListener('click', () => {
    plusSlides(1);
});
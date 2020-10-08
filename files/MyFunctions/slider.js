   // Slider

   const getImg = document.querySelectorAll('.offer__slide'),
   counter = document.querySelector('.offer__slider-counter'),
   counterNext = document.querySelector('.offer__slider-next'),
   counterPrev = document.querySelector('.offer__slider-prev'),
   prevArrow = document.querySelectorAll(".offer__slider-prev .offer__slider-prevImg"),
   nextArrow = document.querySelectorAll(".offer__slider-next .offer__slider-nextImg"),
   current = document.getElementById('current'),
   total = document.getElementById('total');    
   
   
   console.log(prevArrow);
   getImg.forEach(i => {i.classList.add('hide');});
   current.innerHTML = '00';
   total.innerHTML = '03';


function nextSlide () {

var index =  0;
getImg[index].classList.remove('hide');
getImg[index].classList.add('show');
counterNext.style.cssText = `
   height: 48px;
`;
counterPrev.style.cssText = `
   height: 48px;
`;


   counter.addEventListener('click', (e)=> {
       if(e.target == counterNext || e.target == nextArrow  ){
           if(index < 3) {
           getImg[index].classList.remove('show');
           getImg[index].classList.add('hide');
           index++;
           current.innerHTML = "0" + index; 
           getImg[index].classList.remove('hide');
           getImg[index].classList.add('show');
       }
   }
      else if (e.target == counterPrev || e.target == prevArrow){
           if(index > 0) {
            getImg[index].classList.remove('show');
            getImg[index].classList.add('hide');
            index--;
            current.innerHTML = "0" + index; 
            getImg[index].classList.remove('hide');
            getImg[index].classList.add('show');
        }
    }
   });


};
nextSlide();
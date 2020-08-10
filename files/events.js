let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// // btn[0].onclick = function() {
// //     alert('вы нажали первую кнопку');
// // }
// // btn[0].addEventListener('click', function(){
// //     alert('вы нажали первую кнопку');
// // });
// // btn[0].addEventListener('click', function(){
// //     alert('вы опять нажали первую кнопку');
// // });
// // btn[0].addEventListener('mouseenter', function(){
// //     alert("вы навели на кнопку!");
// // } );
// btn[0].addEventListener('click', function(event){
//     console.log('Произошло событие' + event.type+ "на элементе "+ event.target);
// });
// wrap.addEventListener('click', function(){
//     console.log('Произошло событие' + event.type+ "на элементе "+ event.target);
// });
// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("Событие: "+event.type + "На элементе: "+event.target);
// });
btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log("ты убрал мышь сучара!");
    });
});

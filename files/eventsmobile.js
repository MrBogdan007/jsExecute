

window.document.addEventListener('DOMContentLoaded', function(){
    let heart = document.querySelector('.heart');

    // heart.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
        
    // });

    heart.addEventListener('touchmove', function(e){
        e.preventDefault();
        console.log("Red box:" + e.touches[0].pageX);
    });

    // heart.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });
});
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function circle (x,y,radius) {
     ctx.beginPath();
     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
     ctx.stroke();

}
// canvas.addEventListener("mousemove",function(e) {
  
//     circle(e.pageX,e.pageY,3);
//     event.preventDefault();
// });

$('#canvas').mousemove(function(event) {
    circle( event.offsetX,event.offsetY,3);
});
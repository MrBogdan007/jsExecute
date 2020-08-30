var array = [0,1,2,3,4,5,6,7,8,9];

function shuffle(arr) {
    return 0.5 - Math.random();
}
array.sort(shuffle);

document.writeln(array);

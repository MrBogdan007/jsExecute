const num = prompt('Введите число', 55);
const newArr = [];
function colonOdd (num) {
    var resultString ="";

    let str = num.split("");
    let result = [str[0]];
    console.log(result);
for (let i = 0; i < str.length; i++) { 
    if (str[i] % 2 !== 0 && str[i+1] % 2 !==0 ){

        result.push(':', str[i]);
       
    }
    else  {
        result.push( str[i]);
       
    }

}
var string = result.join("");
console.log(result);
console.log(string);
}

document.writeln(colonOdd(num));

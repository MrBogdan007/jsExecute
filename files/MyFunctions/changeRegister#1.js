const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
    
function changeRegister (str) { 
let UPPER = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
let LOWER = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var result = [];
var string1;
var string2;
for ( let i = 0; i < str.length; i++) {
    
    for (let j = 0; j < UPPER.length; j++){
        if(UPPER[j] == str[i]){ // Я гений и вспомнил что str[i] = LOWER[j], не будет ошибкой, но и не работает как в массиве
        str[i] = string1;
        string1 = LOWER[j];
        console.log(str[i]);
        result.push(string1);
        
           
    }
     if(LOWER[j] === str[i]){
        str[i] = string2;
        string2 = UPPER[j];
        result.push(string2);
    }

    }

}
console.log(result);
return result.join('');

}

document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк] 

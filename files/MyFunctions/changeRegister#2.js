const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
    
function changeRegister (str) { 
let UPPER = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
let LOWER = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var result = [];

for ( let i = 0; i < str.length; i++) {
    
    
    if(UPPER.includes(str[i])){ // Я гений и вспомнил что str[i] = LOWER[j], не будет ошибкой, но и не работает как в массиве
        result.push(str[i].toLowerCase());
        
           
    }
     if(LOWER.includes(str[i])){
        result.push(str[i].toUpperCase());
    }

    }


console.log(result);
return result.join('');

}

document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк] 

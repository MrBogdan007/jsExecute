const num = prompt('Введите число', 55);
const newArr = [];
function colonOdd (num) {
    var resultString ="";

    function splitByIndex(value) {
    for(var i = 0; i < num.length; i++){
        index = i;
        if(i === num.length-1){
            resultString += (value.substring(i,index + 1 ) ) ;
        }
        else{
        resultString += (value.substring(i,index + 1 ) + ",") ;}
        
    
        console.log(resultString);
         
        }
        return resultString;

    }
    
    var result = splitByIndex(num);
    var promptArr =  result.split(",");

    console.log(result);
    console.log(promptArr);
   
}

    
 
   
   
   document.writeln(colonOdd(num));
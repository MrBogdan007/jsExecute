function chooseYears(start, end) {
    let result = [];
    let arrayLength = end - start;
    if (start % 2 !== 0) {
        start ++
        end ++

        for (let i = 0; i < arrayLength; i = i + 4) {

            result.push(i + start);
        }
    } 
    else {
        for (let i = 0; i < arrayLength; i = i + 4) {

            result.push(i + start);
        }

    }
    
    return result;

}

document.writeln(chooseYears(1968, 2018)); // [2000,2004,2008,2012,2016]

//     function chooseYears(start, end) {
//         var yearArray = [];
//         for (var i = start; i <= end; i++) {        
//              yearArray.push(i);
//         }
//         var result = [];

//   yearArray.forEach(function(year) {
//        if (getLeapYear(year))
//        result.push(year);
//   });

//   return result;
// }

// function getLeapYear(year) {
//    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//       return year;
//    } else {
//       return false;
//      }
// }

// document.writeln(chooseYears(2000,2018)); // [2000,2004,2008,2012,2016]
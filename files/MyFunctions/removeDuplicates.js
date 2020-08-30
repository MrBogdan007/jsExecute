var arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java"
];


function removeDuplicates(arr) {
var result = [];
var obj = {};
for( let i = 0; i < arr.length; i++) {
 
 var str = arr[i];
  obj[str] = true;
 
  console.log(obj);
}
  for (i in obj) {
    console.log(i);
    result.push(i);
  }

return result;
}
result = removeDuplicates(arr);


document.writeln(result);

// new RegExp('pattern', 'flags');

let ans = prompt('Введите цифры');

let reg = /\d/g;

console.log(ans.match(reg));

// // console.log(ans.match(reg));

// let pass = prompt("Enter your pass");

// // console.log(pass.replace(/./g,"*"));
// console.log(pass.replace(/-/g,":"));
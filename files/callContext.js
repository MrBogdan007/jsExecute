'use strict';

// function showThis(a,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);

// var obj = {
//     a : 20,
//     b: 30,
//     sum: function () {
//         console.log(this);
//         function shout () {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();
// function User(name, id, weight) {
//     this.name = name;
//     this.id = id;
//     this.human = Boolean;
//     this.weight = weight;
//     this.hello = function (){
//         console.log(`Hello ${this.name}`)
//     }
//     this.exit = function () {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
//     User.prototype.health = 200;
// }

// const bohdan = new User('bohdan', 22 , 33);
// bohdan.exit();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, " Smith");
// sayName.apply(user, [' Smith']);

// function count (num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
// console.log(this);
// this.style.backgroundColor = 'red';
// });

// var obj = {
//     a : 20,
//     b: 30,
//     sum: function () {
//         console.log(this);
//         const shout = () => {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// const double = a =>a * 2;
// console.log(double(4));


// 1) Обычная функция this = window, но если use strict = undefined;
// 2) Контекст вызова обьекта - сам обьект;
// 3) this в конструкторах и классах - это новый экземпляр обьекта;
// 4) Ручная  привязка this call, apply, bind (биндим функцию с телом функции и новый контекст);
// 5) В обработчике событий контекст вызова обычной функции - это сам элемент , а в стрелочной нету контекста вызова
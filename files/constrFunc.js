'use strict';

function User(name, id, weight) {
    this.name = name;
    this.id = id;
    this.human = Boolean;
    this.weight = weight;
    this.hello = function (){
        console.log(`Hello ${this.name}`)
    }
    User.prototype.exit = function () {
        console.log(`Пользователь ${this.name} ушел`);
    }
    User.prototype.health = 200;
}
const ivan = new User('Ivan', 28, 30 );
const bohdan = new User('Alex', 20);
console.log(ivan.health);


ivan.exit();
ivan.hello();
bohdan.hello();

console.log(ivan);
console.log(bohdan);
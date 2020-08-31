'use strict';

class Rectangle {
    constructor(height, width) {
        
        this.height = height;
        this.width = width;
    }
    
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}
const div = new ColoredRectangleWithText(10, 200, "abc", "red");

div.showMyProps();
console.log(div.calcArea());
console.log(div);
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());
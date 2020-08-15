// let movies =  {
// "Гарри Потер и тайная комната " : {
//     duration : 174,
//     date : 2002,
//     actors : ["Emma youtson", "Daniel Redklif", "Rupert"],
//     format : "Blu-ray"
// },
// "Кунфу-Панда 1" : {
//     duration : 165,
//     date : 2004,
//     actors : ["Po", "Mantis", "Tigress"],
//     format : "Blu-ray"
// },
// "Властелин колец" : {
//     duration : 400,
//     date : 2000,
//     actors : ["Eragorn", "Frodo", "Hendalf"],
//     format : "Dvd"
// }

// };

// var cars = {
//     duration : 120,
//     date : 20000,
//     actors : ["1", "2", "3"],
//     format : "Blu-ray"
// };
// movies.Тачки = cars;
// console.log(Object.keys(movies));
// console.log(movies["Тачки"]);
// console.log

// var scores = {
//     vadik: 12,
//     arthur: 20,
//     valentin: 2
// };
// scores.vadik +=2 ;
// console.log((scores.vadik));
// var myCrazyObject = {
//     "name": "nelepiy object",
//     "some array": [7, 9, { purpose: "putanica", number: 123 }, 3.3], 
//     "random animal": "bananovaya akyla"
// };
// console.log(myCrazyObject["some array"][2].number);

// var animals = ["cat","dog", "mouse" , "duck"];

// for(let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + " прекрасное животное ";
//     console.log(animals[i]);
// }
// console.log(animals[0]);


// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var stringg = "";
// var count = 0;

// while(count < 6 ) {
//     var randomString = Math.floor(Math.random() * alphabet.length);
//    stringg += alphabet[randomString];
//    count++;
//    console.log(stringg);
// }

// var input = "InTeRnAlBleading";

// var output = ""; 


// for(let i = 0; i < input.length; i++){
//     if(input[i] == "e" || input[i] == "E"){
//         output += "3";
//     }
//     else if (input[i] == "a" || input[i] =="A"){
//         output += '4';
//     }
//     else if (input[i] == "o" || input[i] == "O"){
//         output += "0";

//     }
//     else if(input[i] == "i" || input[i] == "I"){
//         output += '1';
//     }

//     else{
//     output += input[i] ;
//     }

// }
// console.log(output);

// var words = ["антошка", "банан" , "абрикос", "тюфтеля", "ананас", "мальчик", "пила"];

// var word = words[Math.floor(Math.random() * words.length)];


// var answerArray = [];

// for( let i = 0; i < word.length; i++) {
//     answerArray[i] = "-";
// }

// var remainingLetters = word.length;
// var guesses = 5;
// while(remainingLetters > 0 && guesses > 0 ){

// alert(answerArray.join(" "));
// var guess = prompt("введите вашу букву");
// guess = guess.toLowerCase();



// if(guess === null) {
//     console.log("выходим из игры!");
//     break;
// }
// else if(guess.length !== 1 ){
//     alert("не вводите больше  1 символа");
// }
// else {
//     guesses--;
//     for(let j = 0; j < word.length; j++) {
//         if(word[j] === guess){ 
//         if(answerArray[j] === "-"){
//             answerArray[j] = guess;
//             remainingLetters--;
//         }
//         }

//     }

// }

// }

// alert(answerArray.join(" "));
// if(guesses > 0 ){
//     alert("отлично, было загадоно слово " + word);}
// else{
//     alert("ты израсходывал попытки");
// }

// function add (a, b) {
//     return a + b; 
// }

// function multiply (a, b) {
//     return a * b;
// }


// console.log(add(multiply(36325, 9824),777));

// function areArraysSame (arr1,arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for(var i = 0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[i]){
//             return false;
//         } 
//     }
//         return true;

// };

// console.log(areArraysSame([4,5,6],[4,5,6]));

// var pickWord = function () {
//     var words = ["антошка", "банан", "абрикос", "тюфтеля", "ананас", "мальчик", "пила"];
//     return words[Math.floor(Math.random() * words.length)];
// };
// var setupAnswerArray = function (word) {
//     var answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//     }
//     return answerArray;
// };
// var showPlayerProgress = function (answerArray) {
//     alert(answerArray.join(" ") );
// };
// var getGuess = function () {
//     return prompt("Guess a letter, or click Cancel to stop playing.");
// };
// var updateGameState = function (guess, word, answerArray) {
//     var count = 0;

//     for (let j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             count++;
//         }
//     }

//     return count;
//     // Обновляет answerArray согласно ответу игрока (guess)
//     // возвращает число, обозначающее, сколько раз буква guess
//     // встречается в слове, чтобы можно было обновить значение
//     // remainingLetters
// };
// var showAnswerAndCongratulatePlayer = function (answerArray) {
//     alert(" Поздравляю вы победили - ответ был " + answerArray.join("") );
//     // С помощью alert показывает игроку отгаданное слово
//     // и поздравляет его с победой
// };

// var word = pickWord();
// // answerArray: итоговый массив
// var answerArray = setupAnswerArray(word);
// // remainingLetters: сколько букв осталось угадать
// var remainingLetters = word.length;
// while (remainingLetters > 0) {
//     showPlayerProgress(answerArray);
//     // guess: ответ игрока
//     var guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//         // correctGuesses: количество открытых букв
//         var correctGuesses = updateGameState(guess, word,
//             answerArray);
//         remainingLetters -= correctGuesses;
//     }
// }
// showAnswerAndCongratulatePlayer(answerArray);
// var a = [], b = [];
// console.log(!4);
// console.log(typeof(a));
// console.log(Object == true);
//  console.log((a == b) + ` ` + (a == !b) + ` ` + (!a == b)+ ` ` + (!a == !b));

// var friends = ["Bohdan", "Sasha"];
// for(let i = 0; i < friends.length; i++) {


//     $("body").append("<p>" + friends[i] + "</p>" + "лучший");
//     $("h1").text("Мои друзья"); 
//     $("p").hide();
//     $("p").fadeIn(2000); 
// }
// $("h1").text("Заголовок");
// for (let i = 0; i < 5; i++) {
//     let fadeTime = (i + 1) * 1000;
//     $("h1").fadeIn(fadeTime / 2 ).fadeOut(fadeTime / 2);


// }
// $("button").delay(5000).fadeOut(1000).fadeIn(1000);
// $("h1").fadeTo(2000, 0.5);

// $("html").click(function(event)  {
// $("#main-heading").offset({
// left: event.pageX,
// top: event.pageY
// });
// });
// var offset = 1;
// var direction = 'right';
// var clicks = 0;
// var intervalLength = 60;
// $("h1").offset({left: offset, top: offset});
// function moveHeading () {

// if(direction === "right"){
// $("h1").offset({left:offset});
// offset++;

// if(offset > 200) {
// offset = 0;
// direction = "top";

// }
// }
// else if(direction === "top"){
//     $("h1").offset({top:offset});
//     offset++;
//     if(offset > 200) {
//         offset = 200;
//         direction= "left";
//     }
// }
// else if(direction === "left"){
//     $("h1").offset({left:offset});
//     offset--;
//     if(offset < 0) {
//         offset = 200;
//         direction= "bottom";
//     }
// }
// else if(direction === "bottom"){
//     $("h1").offset({top:offset});
//     offset--;
//     if(offset < 0) {
//         offset = 0;
//         direction= "right";
//     }
// }
// }
//  var intervalId = setInterval(moveHeading, intervalLength);

//     $("#heading").click(function () {


//     $("#heading").text(clicks);
//       intervalLength /= 2;
//         clicks++;
//         console.log(clicks);

//       if (clicks > 6) {
//         $("#heading").text("You Win.");
//       } else {
//         intervalId = setInterval(moveHeading, intervalLength);

//       }
//     });
/* <script>
        function getRandomPixel(pixel) {
            return Math.floor(Math.random() * pixel);
        };


        function distanceHint(temperature) {
            if (temperature < 10) {
                return "Обожжешься! " + temperature;
            } else if (temperature < 20) {
                return "Очень горячо " + temperature;
            } else if (temperature < 40) {
                return "Горячо " + temperature;
            } else if (temperature < 80) {
                return "Тепло " + temperature;
            } else if (temperature < 160) {
                return "Холодно " + temperature;
            } else if (temperature < 320) {
                return "Очень холодно " + temperature;
            } else if (temperature < 400) {
                return "Очень-очень холодно! " + temperature;
            } else {
                return "Замерзнешь!";
            }
        };

        function getDistance(event, target) {
            var horizontal = event.offsetX - target.x;
            var vertical = event.offsetY - target.y;
            return Math.floor(Math.sqrt((horizontal * horizontal) + (vertical * vertical)));

        };


        var width = 800;
        var height = 800;
        var target = {
            x: getRandomPixel(width),
            y: getRandomPixel(height)
        };
        var clicks = 0
        $("#map").click(function (event) {
            clicks++;
            var temperature = getDistance(event, target);
            var getDistanceHint = distanceHint(temperature);
            var clickLimit = 50;
            $("#temperature").text(getDistanceHint + " " + "Ограничение по кликам: " + clickLimit);
            if (clicks > clickLimit) {
                alert("GAME OVER");
                return;
            }
            if(temperature < 40 || temperature < 140){$("#clicks-remaining").text(clickLimit - clicks);}
            if (temperature < 8) {
                alert("Ты победил, клад был найден   " + "  Ты кликнул : " + clicks);
            }

        });
    </script> */

    // function distanceHint(temperature) {
    //     if (temperature < 0 && temperature > - 50) {
    //         return "It’s super cold today. Be sure you dressed well! ";
    //     } else if (temperature < 10 && temperature > 0) {
    //         return "It’s windy outside, but we are sure you will enjoy your day! " + temperature;
    //     } else if (temperature < 30 && temperature > 11) {
    //         return "It’s time for outdoor walking! " + temperature;
    //     } else if (temperature < 40 && temperature > 31) {
    //         return "It's so hot outside! " + temperature ;
    //     }  else if (temperature < 50 && temperature > 41) {
    //         return "Welcome to hell! " + temperature;
    //     } else {
    //         return "Please re-check results in 5 mins";
    //     }
    // };
    // console.log(distanceHint(0));

    // var Car = function (x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.speed = 5;
    //     Car.prototype.draw = function () {
    //     var carHtml = '<img src="car.png">';
    //     this.carElement = $(carHtml);
    //     this.carElement.css({
    //         position: "absolute",
    //         left: this.x,
    //         top: this.y
    //     });
    //     $("body").append(this.carElement);
    // }
    // };


    // Car.prototype.moveRight = function (distance) {
    //     this.x += distance;
    //     this.carElement.css({
    //         left: this.x,
    //         top: this.y
    //     });
    // };

  
    // Car.prototype.moveLeft = function (distance) {

    //     this.x -= distance;
    //     this.carElement.css({
    //         left: this.x,
    //         top: this.y
    //     });
    // };
    // Car.prototype.moveUp = function (distance) {
    //     this.y -= distance;
    //     this.carElement.css({
    //         left: this.x,
    //         top: this.y
    //     });
    // };
    // Car.prototype.moveDown = function (distance) {
    //     this.y += distance;
    //     this.carElement.css({
    //         left: this.x,
    //         top: this.y
    //     });
    // };

    // var tesla = new Car(20, 20);
    // var nissan = new Car(100, 200);
    // nissan.draw();
    // tesla.draw();

    // setInterval(function () {
    // nissan.moveRight(Math.random() * 5);
    // tesla.moveRight(Math.random() * 5);
    //  }, 30);

//RECTANGULARS
//     <script>
//         var somestring = "abc";
        
//         var mystring = somestring.replace("abc","cba");
//         console.log(mystring);
        

       
//         ctx.fillRect(25,0,50,50);
//         ctx.fillRect(45,50,8,20);
//         ctx.fillRect(0,65,100,8);
//         ctx.fillRect(22,70,60,60);
//         ctx.fillRect(72,128,10,40);
//         ctx.fillRect(22,128,10,40);  

// </script>    


//LINES
// ctx.strokeRect(0,0,30,30)
// ctx.beginPath();
// ctx.moveTo(15,30);
// ctx.lineTo(15,45);
// ctx.moveTo(15,45);
// ctx.lineTo(45,35);
// ctx.moveTo(15,45);
// ctx.lineTo(-25,15);
// ctx.moveTo(15,45);
// ctx.lineTo(15,75);
// ctx.moveTo(15,75);
// ctx.lineTo(-15,100);
// ctx.moveTo(15,75);
// ctx.lineTo(35,90);
// ctx.stroke();




// CIRCLES
// ctx.fillStyle = "Blue";
// ctx.lineWidth = 2;
// ctx.strokeStyle = "Green";
// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();
// ctx.beginPath(); ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();

//SNOWMAN

// var canvas = document.getElementById("canvas");
//         var ctx = canvas.getContext("2d");

// var circle = function (x, y, radius,fillCircle) {
//  ctx.beginPath();
//  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//  ctx.stroke();
// if (fillCircle === true){
    
//     ctx.fill();
// }
// else{
//     ctx.stroke();
// }



// };
// ctx.lineWidth = 2;

// circle(100, 98, 15);
// circle(96,96,2, true);
// circle(106,96,2, true);
// ctx.fillStyle = "Orange";
// ctx.strokeStyle = "Orange";
// circle(101,100,2, true);
// ctx.strokeStyle = "Black";
// ctx.fillStyle = "Black";
// circle(100, 133, 2,true);
// circle(100, 120, 2,true);
// circle(100, 145, 2,true);
// circle(100, 133, 20);


// function createObject (o) {
//     function f () {}
//     f.prototype = o;
//     return new f();
// }
// function f1() {}
// f1.firstName = "Robert";
// console.log(f1.firstName);
// var f2 = createObject(f1);
// f2.lastName = "Redford";
// console.log(f2.lastName);
// console.log(f1.firstName);

// You want to generate the following output:

// Removed Van
// Vehicles = Car,Truck,Skateboard,Scooter


// var vehicles = [ "Car", "Truck", "Van", "Scooter" ];
// document.write("Removed " + vehicles.splice(2, 1, "Skateboard") + "<br>");
// document.write("Vehicles = " + vehicles);

// vehicles.splice(2, "Skateboard")

// vehicles.splice(2, 1, "Skateboard")

// vehicles.splice(3, 1, "Skateboard")

// vehicles.slice(2, 1, "Skateboard")

// vehicles.replace(2, 1, "Skateboard")

// console.log(escape("Your order #1234 has been completed"));

// function add(numbers) {
//     var iter,sum = 0;
//     for (iter = 0; iter < numbers.length; iter++) {
//         sum += numbers[iter];
//     }
//     return sum
// }

// var answer = add({1,2,3,4});

// var answer = add(...[1,2,3,4]);

// var answer = add(new Array([1,2,3,4])));

// var answer = add(1,2,3,4);

// var answer = add((1,2,3,4));

// var family = [];
// family.push("bill");
// family.push("R");
// family.push("J");
// family.pop();
// family.push("A");
// family.push("J");
// family.pop();
// family.pop();
// family.push("mary");
// console.log(family);


// console.log(isNaN(Date));


// for(i = 0; i<10; i++);
// for (j=0; j<10; i++);
// multiply(i,j);
// function multiply (x,y){
//     return x*y;
// }



// throw "Something bad happened";

// throw new Exception({ msg : "Something bad happened" });

// throw { message : "Something bad happened" };

// throw Exception("Something bad happened");

// throw new Exception("Something bad happened");

// var scrArray = [0,1,2,3,4];
// var destArray = [];
// scrArray.reduce(function(prevVal, currVal, idx, array){
//     destArray.push(prevVal + currVal);
//     return prevVal + currVal;
// });
// alert(destArray);
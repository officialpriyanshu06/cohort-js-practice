
//Q1- Write a function `sayHello()` that prints `"Hello JavaScript"`.

function sayHello(){
    console.log("Hello JavaScript");
}

sayHello();


//Q2- Create a function `add(a, b)` that returns their sum and log the result.

function add(a, b){
    return a+b;
}

let sum = add(5, 6);
console.log(sum);

//Q3- Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

function greet(Guest = "guest"){
    console.log("hi " + Guest);
}

greet();  //koi bhi name nhi bhejenge call karte wakht to ayega hii undefined isliye parameter me guest ki default value guest set kar rahe hai.

//Q4- Use rest parameters to make a function that adds unlimited numbers.

function addUnlimited(...numbers){
    let total = 0;
    for(let num of numbers){
        total = total + num;
    }

    return total;
}

console.log(addUnlimited(1, 2, 3, 4, 5, 6, 7, 8));

//Q5- Create an IIFE that prints `"I run instantly!"`.

(function(){
    console.log("I run instantly!");
}) ();

//Q6- Make a nested function where the inner one prints a variable from the outer one.

function parent(){
    let a = 12;
    function child(){
        console.log(a);
    }
    child();
}

parent();

//Q7- Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let arr = ["apple", "banana", "pineapple", "guava", "grapes"];

arr.push("orange");
arr.unshift("mango");

console.log(arr);

//Q8- Use a `for` loop to print all elements of an array.

let array = [1, 2, 3, 4, 5, 6, 7];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Q9- Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

let person = {
    name: "gohan",
    age: 24,
    city: "kashi"
}

console.log(person.name);
console.log(person.age);
console.log(person.city);

//Q10- Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

setTimeout(function(){
    console.log("Time’s up!");
}, 2000)  // 2sec = 2000ms
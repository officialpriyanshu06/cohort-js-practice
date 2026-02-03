// Print numbers divisible by 7 from 1 to 50. Use modulo % and loop.

for(let i = 1; i < 51; i++){
    if(i%7 === 0){
        console.log(i);``
    }
}



// Sum of all odd numbers from 1 to 30. Add only odd numbers. Print final sum.

let sum = 0;

for(let i = 1; i < 31; i++){
    if(i%2 == 1){
        sum += i;
    }
}
console.log(`sum of all odd numbers from 1 to 30 is ${sum}`)


// Qn:- 15 Keep asking number until user enters an even number. Use while loop. Stop only if input is even.

// let number = +prompt("enter a number ");

// while(number%2 !== 0){
//     number = +prompt("enter a number ");
// }

// console.log(`${number} is a even number`);

// Qn:- 16 Print numbers between two user inputs. Input start and end using prompt() → print all between.

let start = +prompt("enter start number");
let end = +prompt("enter end number");

for(start; start <= end; start++){
    console.log(start);
}

let x = 50;
x /= 5 - 2;
console.log(x);

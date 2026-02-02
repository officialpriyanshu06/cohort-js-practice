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


// Keep asking number until user enters an even number. Use while loop. Stop only if input is even.

let number = +prompt("enter a number ");

while(number%2 !== 0){
    number = +prompt("enter a number ");
}

console.log(`${number} is a even number`);

// Print only first 3 odd numbers from 1 to 20. Use loop. Stop with break after 3 odd prints
let odd = 0;

for(let i = 1; i <= 20; i++){
    if(odd === 3) break;
    if(i%2 === 1){
        console.log(i);
        odd++;
    }
}


// Ask user 5 numbers. Count how many are positive. Use loop + condition + counter.

let counter = 0;
for(let i = 1; i < 6; i++){
    let num = +prompt("enter number");
    if(num >= 0) counter++;
}

console.log(`total positive numbers are ${counter}`);
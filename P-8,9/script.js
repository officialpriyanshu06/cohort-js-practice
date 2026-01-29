// Print multiplication table of 5. Use loop to print 5 × 1 to 5 × 10.

for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}


// Count how many numbers between 1 and 15 are greater than 8. Loop and count conditionally.

let count = 0;

for(let i = 1; i < 15; i++){
    if(i > 8){
        console.log(i);
        count++
    }
}

console.log(`total ${count} numbers are greater than 8 b/w 1 to 15`);
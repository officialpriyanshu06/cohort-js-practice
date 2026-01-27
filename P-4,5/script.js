// Qn4:- print the word 'yes' 5 Times. 

// learned about global variables/scope and strict mode

"use strict";

for(let i = 1; i < 6; i++){
    console.log("yes");
}


// Qn5:- print whether numbers from 1 to 10 are even or odd 

for(let i = 1; i <= 10; i++){
    if(i%2 === 0){
        console.log(i, "even no.");
    } else{
        console.log(i, "odd no.");
    }
}


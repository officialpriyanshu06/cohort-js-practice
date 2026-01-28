// Ask user’s age and check if eligible to vote. If age >= 18 → “Eligible”, else → “Not eligible”

"use strict";

let age = prompt("what is your age ? ");

if(age === null){
    console.error("you cancelled it")
}else {
    if(age.trim() === ""){
        console.log("please write something...")
    } else{
        age = Number(age)
        if(isNaN(age)){
            console.log("please enter a number...")
        }else{
            if(age >= 18){
                console.log("you're eligible to vote");
            } else {
                console.log("you're not eligible to vote");
            }
        }
    }
}


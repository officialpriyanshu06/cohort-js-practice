// Ask user’s age and check if eligible to vote. If age >= 18 → “Eligible”, else → “Not eligible”

let age = +prompt("what is your age ? ");

if(age >= 18){
    console.log("you're eligible to vote");
} else {
    console.log("you're not eligible to vote");
}
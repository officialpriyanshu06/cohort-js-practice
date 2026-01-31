// Allow only 3 attempts to enter correct password. If user gets it right early, stop. If not → “Account locked”

let sahipass = "gohanbhai";
let pass = prompt("enter the passwod");
let count = 0;

while(pass !== sahipass){
    count++
    if(count === 3){
        console.log("account locked");
        break;
    }
    pass = prompt("enter the passwod");
}

if(pass === sahipass){
    console.log("access granted");
}

// another apprach

// let count = 0;
// let sahipass = "gohanbhai";
// let pass = prompt("enter the passwod");

// count++

// while(count < 3 && pass !== sahipass){
//     pass = prompt("enter the passwod");
//     count++
// }

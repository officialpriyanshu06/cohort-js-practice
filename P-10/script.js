// Ask user for password and print access status. Hardcoded correct password. Compare with user input.

let password = "gohanbhai";

let pass = prompt("enter your password");

if(pass === password){
    console.log("access granted!");
} else{
    console.log("access not granted!");
}
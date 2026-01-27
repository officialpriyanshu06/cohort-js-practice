// ask user for a number and say if its positive or negative(use prompt and conditionals)

// prompt always returns string. isliye number me convert karna padta hai. prompt() browser ka built-in function hai. aur node me nhi exist karta hai isliye isko browser me hi use krna hota hai.
// Browser ke paas GUI (popup window) hoti hai, Isliye ye dialog box dikha deta hai

let num = Number(prompt("enter a number of ypur choice"));

if(num > 0){
    console.log(num, "is a positive number");
}else {
    console.log(num, "is a negative number");
}


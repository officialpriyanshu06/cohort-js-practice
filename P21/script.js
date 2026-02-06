// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”l

let balance = 1000;
let flag = false;

let counter = 0;
while(balance > 0 && counter !==3) {
    let withdraw = +prompt("how much money you want to withdrawl");
    counter++;
    if(withdraw <= balance) balance -+ withdraw;
    else{
        flag = true;
        break;
    }
}

if(flag === true){
    console.log("insufficient Balance");
}